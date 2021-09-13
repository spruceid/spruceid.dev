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
2. To provide developer [docs](/docs/) and [references](/docs/glossary)
   that help you understand [DIDKit](/docs/didkit)
3. To help you wrap your head around
   [Verifiable Credentials](/docs/primer/), find the right [Decentralized
   Identifier scheme](/docs/did-methods) for your project, and generally just
   get you from "curious🤔" to "wizard🧙‍♂️" as fast as we can.

This page is devoted to #1 for the do-first crowd. If jumping straight into a command line sounds little scary, feel free to choose your own adventure and click around on those links above first.  Then come back for ther tour! Similarly, if you already know what DIDKit is and does, and just want a reference page specific to the interface you'll be using, jump straight to that page from this
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

## Step 1: Issue your first Verifiable Credential

If you're not familiar with Verifiable Credentials, they're a low-level data
format designed to be Very Portable, as in: anyone can authenticate this data,
and if they understand who it was that "issued" (i.e. minted) that unique,
signed, data object, they can trust it as much as they trust the issuer. More
info in the [primer](/docs/primer).

So what do you need to get started with VCs?  Basically just DIDKit and a dream!
The first ingredient is DIDKit, the second is a signing key, which DIDKit can
generate for you once it's installed. From the DIDKit root directory:

```sh
didkit generate-ed25519-key > issuer_key.jwk
```

Or, if you want to BYO a private key you already have (Ed25519 for now, to keep
the examples simple), you can just copy it into the folder like so:

```bash
cp /path/to/privkey.jwk issuer_key.jwk
```

Once this key is on hand, you have to structure some data to be the payload of
this VC you want to issue. For simplicity, let's throw this into a JSON file to
be signed over in the next step. Don't worry too much about the meaning or
function of any specific property if this is your first Verifiable Credential--
all things in time. You're not signing away your soul, don't worry-- these are the basic ingredients of a verified credential.
          
```bash
cat > payload.json <<EOF
{
    "@context": "https://www.w3.org/2018/credentials/v1",
    "id": "urn:uuid:`uuidgen`",
    "type": ["VerifiableCredential"],
    "issuer": "did:web:issuance.yournamehere.com",
    "issuanceDate": "`date --utc +%FT%TZ`",
    "credentialSubject": {
        "id": "did:example:0x1234someguywetalkinabout"
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
    < payload.json \
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

## Step 2: Verifying a real VC

Let's take a real-life VC issued by our testing faucet and drop it into your DIDKit root directory as an example.

<details>
  <summary>Click here for an example VC</summary>
  <div>
    <div><i>Note: to get a fresher version of this credential issued to a 
    real-world DID, you might want to install the Credible mobile wallet on
    a mobile device, whether from <a href="https://github.com/spruceid/credible">source code</a>,
    from the <a href="https://testflight.apple.com/join/CPZON8Ho">Apple test flight</a>, 
    or from <a href="https://play.google.com/store/apps/details?id=com.spruceid.app.credible&hl=de&gl=US">the Google Play store</a>, then navigate to <a href="https://demo.spruceid.com">our demo faucet</a></i>.
    </div>
    <br/>
     <code>{`
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schema.org/"
  ],
  "id": "urn:uuid:baef4793-ab07-4c17-a175-ec114b18245e",
  "type": "VerifiableCredential",
  "credentialSubject": {
    "id": "did:tz:tz1aTuW7578MTt3ZtWYCjX65nUXkzE1CMcAf"
  },
  "issuer": "did:web:demo.spruceid.com:2021:vc-faucet",
  "issuanceDate": "2021-09-13T09:19:41Z",
  "proof": {
    "type": "Ed25519Signature2018",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:web:demo.spruceid.com:2021:vc-faucet#key-1",
    "created": "2021-09-13T09:19:41.374Z",
    "jws": "eyJhbGciOiJFZERTQSIsImNyaXQiOlsiYjY0Il0sImI2NCI6ZmFsc2V9..uwSzKxDeXk4nCd6EH6H-7GwaXNwgdoEBPNsrCbbcmJV9hJRrwZPJakXaK6c4uFkFoICGUikTBifmEdV_7BOCCg"
  },
  "expirationDate": "2021-10-13T09:19:41Z"
}
`.slice(1, -1)}</code>
  </div>
<br />(You can cut and paste it into a <code>{`
sample.vc
`.slice(1, -1)}</code> file using a text editor or a bash command for simplicity's sake, or download it <a href="/assets/example_vc.json">here</a>).

</details>

<br />You will notice that this VC looks much like the one you issued in the previous step, but with a "proof" section attached with contains the issuer's signature.  Verifying this signature is as simple as another single-line DIDKit call:

```bash
didkit vc-verify-credential -p assertionMethod < example.vc > result.json
```

That will spit out a verbose response as a JSON file listing the checks passed, warnings, and errors. If everything is set up properly, you should see this when you `nano result.json`:

```json
{"checks":["proof"],"warnings":[],"errors":[]}
```

You might be asking yourself, though, how did DIDKit get from `"issuer": "did:web:demo.spruceid.com:2021:vc-faucet"` to having the public key (and knowing the *type* of the public key) to be able to verify the signature in the proof? This is the magic of DIDs!

<details><summary>Detailed explanation of the ✨Magic of Step 1.5✨</summary>

<h3>The [often implicit!] resolution step</h3>

Let's take the simple example VC above, issued by <code>did:web:demo.spruceid.com:2021:vc-faucet</code>, i.e. our <a
href="https://demo.spruceid.com/">VC faucet</a>). Information about this issuer
has to be "resolved" in much the same way that a web address (like
demo.spruceid.com) needs to be resolved to an IP address to establish a browser
connection. There are many ways of resolving DIDs, but let's stick to DID-web
for now, as it is the easiest for young wizards to understand.
          
A "did-web" is a DID which publishes its "DID Document" (a data file containing
identity information and public keys) in a standardized location at the website
it identifies. <a
href="https://demo.spruceid.com/2021/vc-faucet/did.json">https://demo.spruceid.com/2021/vc-faucet/did.json</a>
is, as a web-savvy user might expect, a JSON file that publishes resolution
information about the DID <code>did:web:demo.spruceid.com:2021:vc-faucet</code>.
A "did-web" tells you exactly where to go to "resolve" that DID into a DID
document: you just tack <code>/.well-known/did.json</code> to the end of a root
domain, or just <code>/did.json</code> for a qualified domain, and fetch that
JSON blob.  Other DID methods have more complex resolution mechanisms, but take
the same input (a DID string) which, if succesfully resolved, outputs the same
kind of DID document, give or take a few optional properties specific to each
DID method.

The most basic and useful thing that a DID Document contains is a series of
"verification methods", i.e., public keys used for specific purposes and which
can be referenced by specific relative references. These are used to check the
signature on a VC, among other purposes. See, for example, this DID document
from the demo app we use to test DIDKit and wallets:

<details>
  <summary><h3>Behold! A real-world DID Document!</h3></summary>
    <code>{`
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
`.slice(1, -1)}</code>

<br />*Note: this DID Document has an Ed25519 key as its "key-1" (default key)
that is the designated key for <code>`authentication`</code> and
<code>`assertionMethod`</code> purposes. The latter alias signals to wallets
that this is the key used to sign assertions about the world-- assertions that
this public key makes verifiable.*

</details>

While on the issuer side, a verification method can be deterministically derived
from the private key, a verifier downstream does not have that option, which is
why DID Documents exist in the first place: to publish annotated key material
that can be used to verify signatures out there in the world.  Having resolved
the issuer's DID, you now have the subset of its contents needed to verify a
credential: the "verification method" for checking the signatures on a VC.

This might sound like a lot of work described step by step, but don't worry--
DID resolution happens automatically once everything is up and running, as you
already saw above.  If you needed to do only the solution step for some reason,
you could fetch a DID Document with a single DIDKit command as well, in any
context with web access:

<code>{`
didkit did-dereference did:web:demo.spruceid.com:2021:vc-faucet
`}</code>

</details>