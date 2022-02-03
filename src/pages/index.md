--- 
id: quickstart
slug: /
hide_table_of_contents: true
title: Quickstart Guide to working with DIDKit
---

# Getting Started with Spruce ID

This site exists for three complementary purposes: 
1. To quickly demonstrate DIDKit and other SpruceID tooling.
2. To provide developer [documentation](/docs/) and [references](/docs/glossary)
   for more details about [DIDKit](/docs/didkit).
3. To introduce the concepts of [W3C Verifiable Credentials
   (VCs)](/docs/primer/) and [W3C Decentralized Identifiers
   (DIDs)](/docs/didkit/did-methods).

This guide describes how to perform credential issuance and verification with
DIDKit's CLI program. For other packaging, such as HTTP endpoints and SDK
integration, see the [DIDKit Packages](/docs/didkit-packages) page.

## Step 0: install DIDKit 

To install the DIDKit command line program on GNU/Linux, MacOS,
or Windows+WSL, first install
[cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html).
With [`build-essential`](https://packages.debian.org/sid/build-essential) or
equivalent tools also installed, run:

```sh
cargo install didkit-cli
```

This will add the binary `didkit` to your Cargo installation (typically
`~/.cargo/bin`), which can be added to your system's PATH for ease of use.

You can also build DIDKit CLI [from source](/docs/didkit/install#manual) or
[install via Docker](/docs/didkit/install#docker).

## Step 1: Issue and verify your first VC using a DID

W3C Verifiable Credentials are a standard data format for claims expressed in
JSON, also known as digital attestations. They contain the claim being made,
data schema references, and a digital signature to be verified and consumed by
unknown future parties. More info can be found in the [primer](/docs/primer).

### Generating a `did-key` DID

To issue your first credential, you will need a signing key. We will use this
key to generate a DID using the
[`did-key`](https://w3c-ccg.github.io/did-method-key/) DID method. DIDKit can
generate a signing key with the `generate-ed25519-key` subcommand to create an
[Ed25519](https://ed25519.cr.yp.to/) private key in the
[JWK](https://tools.ietf.org/html/rfc7517) format. Existing JWKs can also be
loaded via filepath.

```sh
didkit generate-ed25519-key > issuer_key.jwk
issuer_did=$(didkit key-to-did key -k issuer_key.jwk)
echo $issuer_did
```

With the signing key prepared and its representation as a did-key known,
specify the JSON of the Verifiable Credential to be signed. You can use
the following example for this tutorial.
```bash
cat > unsigned-vc.json <<EOF
{
    "@context": "https://www.w3.org/2018/credentials/v1",
    "id": "urn:uuid:`uuidgen`",
    "type": ["VerifiableCredential"],
    "issuer": "${issuer_did}",
    "issuanceDate": "$(date -u +%FT%TZ)",
    "credentialSubject": {
        "id": "did:example:my-data-subject-identifier"
    }
}
EOF
```

The `@context` property flags this JSON object as a W3C Verifiable Credential,
and can be optionally interpreted as [JSON-LD](https://json-ld.org/), which is
out of scope of this tutorial. The `id` property is the identifier for the VC,
which may be unique and ultimately depends on the system design. The `type`
property identifies this VC as a base data model, with no additions. The
`issuer` property contains a URI referring to the issuer of the VC (the did-key
generated previously), with `issuanceDate` denoting when the VC was issued
(now, in UTC).  Finally, the `credentialSubject` contains the claim itself,
which for this dummy example, contains no information other than the data
subject in `credentialSubject.id`, which happens to be an example Decentralized
Identifier. A full listing of the required or suggested properties for a VC can
be found in the [VC Data Model](https://www.w3.org/TR/vc-data-model/)
specification.

To sign the VC using DIDKit CLI with Decentralized Identifiers, input the path
to the signing key, a verification method (`-v`), a proof purpose (`-p`), and
the unsigned credential (`stdin`). Verification methods describe how to
interpret the signature and check for validity. Proof purposes add the scope
and intent of the signing, and in this example we will use the proof purpose
value of `assertionMethod`, which asserts the authenticity of the credential.
For more information verification methods and proof purposes, refer to the [DID
Core specification](https://www.w3.org/TR/did-core/#assertion)).

```sh
vm=$(didkit key-to-verification-method key --key-path issuer_key.jwk)
didkit vc-issue-credential --key-path issuer_key.jwk \
                           -v "${vm}" -p assertionMethod \
                           <unsigned-vc.json > signed-vc.json
cat signed-vc.json
```

This produces a signed VC, which we will now verify.

```sh
didkit vc-verify-credential < signed-vc.json
```

You shouldn't see any failed checks, warnings, or errors. For good measure, try
modifying the contents of `signed-vc.json` and ensuring that it no longer
verifies successfully.

## Step 2: Verifying a `did-web` issued VC

In this example, we will verify a VC generated from Spruce's demo server.
```sh
curl https://demo.spruceid.com/get-example-vc > example-vc.json
```

<details>
  <summary>`example-vc.json` should resemble the following content (click to expand):</summary>
  <div>
     <code>{`
{
  "@context":["https://www.w3.org/2018/credentials/v1"],
  "type":"VerifiableCredential",
  "credentialSubject":{},
  "issuer":"did:web:demo.spruceid.com",
  "issuanceDate":"2021-09-13T18:23:56Z",
  "proof":{
    "type":"Ed25519Signature2018",
    "proofPurpose":"assertionMethod",
    "verificationMethod":"did:web:demo.spruceid.com#_t-v-Ep7AtkELhhvAzCCDzy1O5Bn_z1CVFv9yiRXdHY",
    "created":"2021-09-13T18:23:56.483Z",
    "jws":"eyJhbGciOiJFZERTQSIsImNyaXQiOlsiYjY0Il0sImI2NCI6ZmFsc2V9..X5J2jI5j3TPqFO_g6XOlB730WlXJ8mDsfoyLQ4u60MelVosi1Et6V_pB7-zELDggdqZTsKQjSqDodv0m7ui1Bg"
  },
  "expirationDate":"2021-10-13T18:23:56Z"
}
`.slice(1, -1)}</code>
  </div>
<br />
</details>

<br />

To verify the VC, run:

```sh
didkit vc-verify-credential -p assertionMethod < example-vc.json
```

You shouldn't see any failed checks, warnings, or errors. For good measure, try
modifying the contents of `example-vc.json` and ensuring that it no longer
verifies successfully. Under the hood, DIDKit will resolve the
[`did-web`](https://w3c-ccg.github.io/did-method-web/) DID into a DID Document
containing public keys and supported verification methods.

You can resolve a `did-web` DID directly by running the following:
```sh
didkit did-resolve did:web:demo.spruceid.com
```

Congratulations, you have issued a VC using a `did-key` DID, verified it, and
also verified a VC issued by a `did-web` DID!
