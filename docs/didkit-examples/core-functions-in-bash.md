---
id: core-functions-in-bash
title: Core Functions (CLI)
---

## Introduction

This is an example shell script using all the core functions of DIDKit-CLI: key
generation, credential/presentation issuance and verification.

### Setup

_Note: This script is meant to be run in the directory where DIDKit-CLI is
built, regardless of installation method. See the complete script below for
setup details._

1. These instructions assume Ubuntu, and have been tested on Linux, MacOS, and
   WSL2.
1. See DIDKit installation page instructions for dependencies and install options.
1. `jq` is recommended but not required for testing purposes. It can be
   installed by running the command `sudo apt-get install jq`.

### Start with a keypair

DIDKit can generate a unique ed25119 keypair from entropy. Alternately, you can
provide a static key locally.

```bash
if [ -e issuer_key.jwk ]; then
	echo 'Using existing keypair.'
else
	didkit generate-ed25519-key > issuer_key.jwk
	echo 'Generated keypair.'
fi

echo
```

### Generate a DID:Key document

This document gets wrapped around the keypair generated (or passed) in the
previous step. For more context on the DID:key method, see the
[specification](https://w3c-ccg.github.io/did-method-key/). For more info on the
parameters and flags for the `key-to-did` function, run `didkit help
key-to-did`.

```bash
did=$(didkit key-to-did key -k issuer_key.jwk)
printf 'DID: %s\n\n' "$did"
```

### Define verificationMethod for keypair.

This is used to identify the key in linked data proofs. Verifiers of such proofs
query a DID found in a credential based on what [registered] proof type (i.e.,
what kind of signatures) it needs key material to verify.

```bash
issuer_verification_method=$(didkit key-to-verification-method key -k issuer_key.jwk)
printf 'verificationMethod: %s\n\n' "$issuer_verification_method"
```

### Prepare credential for issuing.

Here, we'll issue an example credential (unsigned) and save it to a file. In
this credential, the issuance date, id, and credential subject id are arbitrary,
but in real-world usage these are diverse and critical properties. For more info
about what these properties mean, see the Verifiable Credentials Data Model
[specification](https://w3c.github.io/vc-data-model/).  Note that SUBJECTDID and
ISSUERDID fields need to be URIs, so if you are using non-DID identifiers such
as certificates or UUIDs, they need to be prefixed with the approriate [URN
prefix](https://www.iana.org/assignments/urn-namespaces/urn-namespaces.xhtml),
i.e., "urn:uuid:", etc.

```bash
SUBJECTDID='did:example:d23dd687a7dc6787646f2eb98d0'
ISSUERDID=$did
DATE=`date --utc +%FT%TZ`
CREDID="urn:uuid:"`uuidgen`

cat > credential-unsigned.jsonld <<EOF
{
	"@context": "https://www.w3.org/2018/credentials/v1",
	"id": "$CREDID",
	"type": ["VerifiableCredential"],
	"issuer": "$ISSUERDID",
	"issuanceDate": "$DATE",
	"credentialSubject": {
		"id": "$SUBJECTDID"
	}
}
EOF
```

### Issue the verifiable credential.

- We ask DIDKit to issue a verifiable credential using the given keypair file, verification method, and proof purpose, passing the unsigned credential on standard input.

- DIDKit creates a linked data proof to add to the unsigned credential, and outputs the resulting newly-issued (signed) verifiable credential on standard output, which we save to a file.

```bash
didkit vc-issue-credential \
	-k issuer_key.jwk \
	-v "$issuer_verification_method" \
	-p assertionMethod \
	< credential-unsigned.jsonld \
	> credential-signed.jsonld
echo 'Issued verifiable credential:'
cat credential-signed.jsonld | jq .
```

### Verify a verifiable credential.

- We pass the newly-issued signed verifiable credential back to didkit for verification using the given verification method and proof purpose.

- DIDKit then outputs the verification result as JSON and saves it. If verification is successful, the command completes successfully (returns exit code 0).

```bash
if ! didkit vc-verify-credential \
	-v "$issuer_verification_method" \
	-p assertionMethod \
	< credential-signed.jsonld \
	> credential-verify-result.json
then
	echo 'Unable to verify credential:'
	print_json credential-verify-result.json
	exit 1
fi
echo 'Verified verifiable credential:'
cat credential-verify-result.json | jq .
```

### Create a verifiable presentation that embeds the verifiable credential.

- Prepare to present the verifiable credential by wrapping it in a verifiable presentation (VP).

- The id here is an arbitrary URL for example purposes; VPs are often but not always uniquely identified, whether by identifiers, URLs, or URIs.

```bash
cat > presentation-unsigned.jsonld <<EOF
{
	"@context": ["https://www.w3.org/2018/credentials/v1"],
	"id": "http://example.org/presentations/3731",
	"type": ["VerifiablePresentation"],
	"holder": "$did",
	"verifiableCredential": $(cat credential-signed.jsonld)
}
EOF
```

### Issue verifiable presentation.

- Pass the unsigned verifiable presentation to DIDKit to be issued as a verifiable presentation. \* DIDKit signs the presentation with a linked data proof, using the given keypair, verification method and proof type.
- We save the resulting newly created verifiable presentation to a file.

:::note
In most use-cases, the `holder` field contains a DID or other identifier verifiably linked to the key material signing the presentation, which has some relationship to the credential(s) being presented. The classic example is a fresh and interactive proof of being the [human] subject identified by a credential, but there are many VP use-cases as well. This may be a manual, consented, unique and interactive identity assurance operation, but it can also be an assurance of the identity of a machine or a legal entity, operated by an API call or an automation carried out by a fiduciary/trusted piece of software, etc.

In these examples, the keys representing the two parties are stored in expressive filenames, 'issuer_key' and 'holder_key'. There are, however, no differences between these keys, and the JWK filenames were chosen simply to clarify the example; there are no restrictions on them.
:::

```bash
didkit vc-issue-presentation \
	-k issuer_key.jwk \
	-v "$verification_method" \
	-p authentication \
	< presentation-unsigned.jsonld \
	> presentation-signed.jsonld
echo 'Issued verifiable presentation:'
cat presentation-signed.jsonld | jq .
```

### Verify the verifiable presentation.

- We pass the verifiable presentation we created back to DIDKit for verification, and save the results in a JSON.

```bash
if ! didkit vc-verify-presentation \
	-v "$issuer_verification_method" \
	-p authentication \
	< presentation-signed.jsonld \
	> presentation-verify-result.json
then
	echo 'Unable to verify presentation:'
	print_json presentation-verify-result.json
	exit 1
fi
echo 'Verified verifiable presentation:'
cat presentation-verify-result.json | jq .

echo Done
```

### Appendix: whole script without comments

Also available on Github as
[/cli/tests/example.sh](https://github.com/spruceid/didkit/blob/main/cli/tests/example.sh)

```bash
#!/bin/sh
# This is an example shell script using DIDKit for key generation,
# credential/presentation issuance and verification. Run it in the
# directory where didkit-cli has been built.
# `jq` is an optional bash tool for displaying JSON objects legibly.
# if desired, install with `sudo apt-get install jq`; otherwise, 
# substitute all `cat $file | jq .` commands for a text editor
# like `nano`  or `vim`.
set -e

print_json() {
    file=${1?file}
    if command -v jq >/dev/null 2>&1; then
        jq . "$file" || cat "$file"
    elif command -v json_pp >/dev/null 2>&1; then
        json_pp < "$file" || cat "$file"
    else
        cat "$file"
    fi
}

cd "$(dirname "$0")"

cargo build -p didkit-cli

export PATH=$PWD/../../target/debug:$PATH

# check for issuer key and generate verification method to match

if [ -e issuer_key.jwk ]; then
    echo 'Using existing keypair.'
else
    didkit generate-ed25519-key > issuer_key.jwk
    echo 'Generated keypair.'
fi
echo

did=$(didkit key-to-did-key -k issuer_key.jwk)
printf 'DID: %s\n\n' "$did"

issuer_verification_method=$(didkit key-to-verification-method -k issuer_key.jwk)
printf 'issuer verificationMethod: %s\n\n' "$issuer_verification_method"

cat > credential-unsigned.jsonld <<EOF
{
    "@context": "https://www.w3.org/2018/credentials/v1",
    "id": "http://example.org/credentials/3731",
    "type": ["VerifiableCredential"],
    "issuer": "$did",
    "issuanceDate": "2020-08-19T21:41:50Z",
    "credentialSubject": {
        "id": "did:example:d23dd687a7dc6787646f2eb98d0"
    }
}
EOF

didkit vc-issue-credential \
    -k issuer_key.jwk \
    -v "$verification_method" \
    -p assertionMethod \
    < credential-unsigned.jsonld \
    > credential-signed.jsonld
echo 'Issued verifiable credential:'
print_json credential-signed.jsonld
echo

if ! didkit vc-verify-credential \
    -v "$verification_method" \
    -p assertionMethod \
    < credential-signed.jsonld \
    > credential-verify-result.json
then
    echo 'Unable to verify credential:'
    print_json credential-verify-result.json
    exit 1
fi
echo 'Verified verifiable credential:'
print_json credential-verify-result.json
echo

# check for holder key and generate verification method to match,
# for creating verifiable presentation

if [ -e holder_key.jwk ]; then
    echo 'Using existing keypair.'
else
    didkit generate-ed25519-key > holder_key.jwk
    echo 'Generated keypair.'
fi
echo

# generate DID of using method DID:key from holder key

did=$(didkit key-to-did-key -k holder_key.jwk)
printf 'DID: %s\n\n' "$did"

holder_verification_method=$(didkit key-to-verification-method -k holder_key.jwk)
printf 'holder verificationMethod: %s\n\n' "$holder_verification_method"

cat > presentation-unsigned.jsonld <<EOF
{
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "id": "http://example.org/presentations/3731",
    "type": ["VerifiablePresentation"],
    "holder": "$did",
    "verifiableCredential": $(cat credential-signed.jsonld)
}
EOF

didkit vc-issue-presentation \
    -k holder_key.jwk \
    -v "$verification_method" \
    -p authentication \
    < presentation-unsigned.jsonld \
    > presentation-signed.jsonld
echo 'Issued verifiable presentation:'
print_json presentation-signed.jsonld
echo

if ! didkit vc-verify-presentation \
    -v "$verification_method" \
    -p authentication \
    < presentation-signed.jsonld \
    > presentation-verify-result.json
then
    echo 'Unable to verify presentation:'
    print_json presentation-verify-result.json
    exit 1
fi
echo 'Verified verifiable presentation:'
print_json presentation-verify-result.json
echo

echo Done
```
