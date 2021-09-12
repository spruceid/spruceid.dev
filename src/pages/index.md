--- 
hide_table_of_contents: true
id: index
slug: /
title: Getting Started with DIDKit
---

# Getting Started with Spruce ID
          
This website exists for two complementary purposes: 
1. To get you *using* DIDKit and other Spruce ID tooling as smoothly and quickly
   as possible
2. To provide developer [documentation](/docs/) and [references](/docs/glossary)
   that help you understand [DIDKit](/docs/didkit), wrap your head around
   [Verifiable Credentials](/docs/primer/), find the right [Decentralized
   Identifier scheme](/docs/did-methods) for your project, and generally just
   get you from "curious🤔" to "wizard🧙‍♂️" as fast as we can.

We put a quick "crash course" here on this page for people who want to jump right
in and get their hands dirty using the command-line interface. If that sounds a
little scary, click around on those links above and then come back for a tour!
Or, if you already know what DIDKit is and does, and just want a reference page
specific to the interface you'll be using, jump straight to that page from this
list:

<div class="dropdown">
  <ul id="my-dropdown2">
    <li><a href="/docs/didkit-interfaces/rust">Rust</a></li>
    <li><a href="/docs/didkit-interfaces/C">C</a></li>
    <li><a href="/docs/didkit-interfaces/java">Java</a></li>
    <li><a href="/docs/didkit-interfaces/python">Python</a></li>
    <li><a href="/docs/didkit-interfaces/node">Node/JS</a></li>
  </ul>
  <a href="#my-dropdown2"
     aria-controls="my-dropdown2"
     role="button"
     data-toggle="dropdown"
     id="my-dropdown2-btn">
    Select an option...
  </a>
  <a href="#my-dropdown2-btn"
     aria-controls="my-dropdown2"
     role="button"
     data-toggle="dropdown"
     class="close">
    Close dropdown
  </a>
</div>

## Step 0: install DIDKit 

These examples will walk you through installing DIDKit and using it on a Linux
command-line environment-- Linux on a Mac or WSL2 on a Windows machine should
work fine (but run `sudo apt install build-essential` just in case).

```sh
git clone https://github.com/spruceid/didkit
cd didkit
git clone https://github.com/spruceid/ssi ../ssi
cargo build
```

Or, if you prefer, the Docker version: 

```sh
docker run ghcr.io/spruceid/didkit-cli:latest --help
```

That's it! You have DIDKit now.

## Step 1: Starting issuing and signing Verifiable Credentials 

If you're not familiar with Verifiable Credentials, they're a low-level data
format designed to be Very Portable, as in: anyone can authenticate this data,
and if they understand who it was that "issued" (i.e. minted) that unique,
signed, data object, they can trust it as much as they trust the issuer. More
info in the [primer](/docs/primer).

So what do you need to get started with VCs?  Basically just a private key and
DIDKit! The simplest way to issue a test credential is to use DIDKit to generate
one, which is pretty easy. From the DIDKit root directory:

```sh
didkit generate-ed25519-key > issuer_key.jwk
```

Or, if you want to BYO, just copy it into the folder like so:

```bash
cp /path/to/privkey.jwk issuer_key.jwk
```

Once this key is on hand, you have to structure some data to be the payload of
this VC you want to issue. For simplicity, let's throw this into a JSON file to
be signed over in the next step. Don't worry too much about the meaning or
function of any specific property if this is your first Verifiable Credential--
all things in time.
          
```bash
cat > credential-unsigned.jsonld <<EOF
{
    "@context": "https://www.w3.org/2018/credentials/v1",
    "id": "\`uuidgen\`",
    "type": ["VerifiableCredential"],
    "issuer": "did:web:issuance.yournamehere.com",
    "issuanceDate": "\`date --utc +%FT%TZ\`",
    "credentialSubject": {
        "id": "did:example:0x1234someguywetalkinabout",
        "claim1": "this guy is cool"
    }
}
EOF
```

Now you're ready to mint the thing by signing it with that private key, which has to be passed in two different ways: as a key, and as a "verification method" (a transformation of the key which we'll explain later).

```bash
verification_method=$(didkit key-to-verification-method -k issuer_key.jwk)
didkit vc-issue-credential \
    -k issuer_key.jwk \
    -v "$verification_method" \
    -p assertionMethod \
    < credential-unsigned.jsonld \
    > credential-signed.jsonld
echo 'Issued verifiable credential:'
print_json credential-signed.jsonld
echo
```

And that's it! Wherever this signed blob ends up, it can be handled by standard
JSON tooling, and VC tooling can identity it as trustworthy information, or at
least as trustworthy as 'yournamehere.com' was at the time in 'issuanceDate'.
Notice that the 'issuer' field identified you by a website, and a "did:web:"
prefix. We'll explain this one in the next step.

## Step 2: Pre-Verification Resolution

Just as a single command line can be used to issue a VC in DIDKit, so too can a
single line check someone else's VC against the public key that the issuer has
published--once you have that public key, that is. The process of finding and
fetching it is referred to as "resolution".

So let's take a simple example VC, issued by
`did:web:demo.spruceid.com:2021:vc-faucet` which, as you might guess, is a VC
issued publicly from the Spruce [VC faucet](https://demo.spruceid.com/). The
first step in verifying the credential is to get information about its issuers,
which has to be "resolved" in much the same way that a web address (like
demo.spruceid.com) needs to be resolved to an IP address to establish a browser
connection. There are many ways of resolving DIDs, but let's stick to DID-web
for now, as it is the easiest for new folks to understand.
          
A "did-web" is a DID which publishes its "DID Document" (a data file containing
identity information and public keys) in a standardized location at the website
it identifies. https://demo.spruceid.com/2021/vc-faucet/did.json is, as a
web-savvy user might expect, a JSON file that publishes resolution information
about the DID `did:web:demo.spruceid.com:2021:vc-faucet`. A did-web tells you
exactly where to go to "resolve" that DID into a DID document: you just tack
`/.well-known/did.json` to the end of a root domain, or just `/did.json` for a
qualified domain, and fetch that JSON blob.  Other DID methods have more complex
resolution mechanisms, but take the same input (a DID string) which, if
succesfully resolved, outputs the same kind of DID document, give or take a few
optional properties specific to each DID method.

The most basic and useful thing that a DID Document contains is a series of
"verification methods", i.e., public keys used for specific purposes and which
can be referenced by specific relative references. These are used to check the
signature on a VC, among other purposes. See, for example, this DID document
from the demo app we use to test DIDKit and wallets
([src](https://demo.spruceid.com/2021/vc-faucet/did.json)):

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    {
      "@id": "https://w3id.org/security#publicKeyJwk",
      "@type": "@json"
    }
  ],
  "id": "did:web:demo.spruceid.com:2021:vc-faucet",
  "verificationMethod": [
    {
      "id": "did:web:demo.spruceid.com:2021:vc-faucet#key-1",
      "type": "Ed25519VerificationKey2018",
      "controller": "did:web:demo.spruceid.com:2021:vc-faucet",
      "publicKeyJwk": {
        "kty": "OKP",
        "crv": "Ed25519",
        "x": "ZMKSD7bKSOg_4IQhZUd-2VCoBTCrEB8L2tql4oRNDUg"
      }
    }
  ],
  "authentication": [
    "did:web:demo.spruceid.com:2021:vc-faucet#key-1"
  ],
  "assertionMethod": [
    "did:web:demo.spruceid.com:2021:vc-faucet#key-1"
  ]
}
```
*Note: this DID Document has an Ed25519 key as its "key-1" that is the
designated key for `authentication` and `assertionMethod` purposes. The latter
alias signals to wallets that this is the key used to sign assertions about the
world-- assertions that this public key makes verifiable.*

While on the issuer side, a verification method can be deterministically derived
from the private key, a verifier downstream does not have that option, which is
why DID Documents exist in the first place: to publish annotated key material
that can be used to verify signatures out there in the world.  Having resolved
the issuer's DID, you now have the "verification method" needed to verify a
credential.

This might sound like a lot of work described step by step, but don't worry-- DID resolution happens automatically once everything is up and running.  For example, you can fetch a DID Document with a single DIDKit command, in any context with web access:

```bash
didkit did-dereference did:web:demo.spruceid.com:2021:vc-faucet
```