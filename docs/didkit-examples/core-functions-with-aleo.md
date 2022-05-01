---
id: core-functions-with-aleo
title: Core Functions with Aleo
---

## Introduction

DIDKit also supports the issuance and verification of Verifiable Credentials using Aleo accounts.

This is an example shell script using all the core functions of DIDKit-CLI: key
generation, credential/presentation issuance and verification.

_Note 1: This script is meant to be in a DIDKit-CLI source directory. See the
complete script below for setup details._

_Note 2: Aleo signature functionality in the ssi library requires the `aleosig` feature.
When building the DIDKit CLI the feature `ssi/aleosig` can be used to enable this functionality:_

```bash
git clone https://github.com/spruceid/didkit
cd didkit
cargo install --features=ssi/aleosig --path cli
cd .. 
```

### Start with a keypair

The SSI library can generate an Aleo keypair as an example:

```bash
git clone https://github.com/spruceid/ssi
cd ssi
cargo run --example genaleojwk --features=aleosig > aleokey.jwk
```

You can also provide the details of an existing Aleo account, although you will
need to do some extra work for DIDKit to use it.

The Aleo private JWK format used by DIDKit is non-standard. An example:

```json
{
  "kty": "OKP",
  "crv": "AleoTestnet1Key",
  "x": "78_Jh_c7Fw46fX31xS9Ifdg_LeuabZ2p2aIl5fn9zw0",
  "d": "f4a9dNLd0omQcg3SEajVHGqEqwFHDGD9yNc2xpzuiZ3sSJjIf5AnEYXWCQ"
}
```

The format is as follows:

- kty: "OKP"
- crv: "AleoTestnet1Key"
- x: An Aleo account address derived from the private key using Aleo Testnet1
  parameters, as a Base64Url value (without the "aleo" prefix that appears in its
  Base58 format)
- d: An Aleo private key converted from Base58 (where it starts with
  "APrivateKey1") to Base64Url value

### Generate a DID:Key document

This document gets wrapped around the keypair generated (or passed) in the
previous step. For more context on the DID:key method, see the
[specification](https://w3c-ccg.github.io/did-method-key/).

```bash
key=aleokey.jwk
did=$(didkit key-to-did pkh:aleo -k $key)
issued=$(date -u +'%Y-%m-%dT%H:%M:%SZ')
```

### Prepare credential for issuing.

Here, we'll issue an example credential (unsigned) and save it to a file. For
more info about what these properties mean, see the Verifiable Credentials Data
Model [specification](https://www.w3.org/TR/vc-data-model/).

```bash
cat > credential-unsigned.jsonld <<EOF 
{
       "@context": ["https://www.w3.org/2018/credentials/v1"],
       "type": ["VerifiableCredential"],
       "issuer": "$did",
       "issuanceDate": "$issued",
       "credentialSubject": {}
}
EOF
```

### Issue the verifiable credential.

- We ask DIDKit to issue a verifiable credential using the given keypair file,
  passing the unsigned credential on standard input.

```bash
didkit vc-issue-credential -k $key < credential-unsigned.jsonld \
    > credential-signed.jsonld
```

### Verify a verifiable credential.

- We pass the newly-issued signed verifiable credential back to didkit for
  verification.

```bash
didkit vc-verify-credential < credential-signed.jsonld
```

### Appendix: whole script without comments

```bash
#!/bin/sh
set -ex
key=../ssi/tests/aleotestnet1-2021-11-22.json
did=$(didkit key-to-did pkh:aleo -k $key)
issued=$(date -uIsec)

cat > credential-unsigned.jsonld <<EOF 
{
       "@context": ["https://www.w3.org/2018/credentials/v1"],
       "type": ["VerifiableCredential"],
       "issuer": "$did",
       "issuanceDate": "$issued",
       "credentialSubject": {}
}
EOF

didkit vc-issue-credential -k $key < credential-unsigned.jsonld \
    > credential-signed.jsonld

didkit vc-verify-credential < credential-signed.jsonld
```
