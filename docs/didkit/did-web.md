---
id: did-web
title: did-web in minutes
sidebar_label: Did-web in minutes
---

## Introduction

Using DIDKit CLI to generate a did-web is actually a fairly simple process,
although it might not be intuitive for some just from reading the [DIDKit-CLI
documentation](/docs/didkit-packages/cli/) and the [did-web
specification](https://w3c-ccg.github.io/did-method-web/). For that reason,
we've created this page to walk you through the steps.

## Picking a DID

Did-web identifiers can denote a complete web domain or subdomain
(`spruceid.com` or `demo.spruceid.com`), OR a subdirectory of the web-space at a
domain (`demo.spruceid.com/path/to`). In either case, the represented site is
referred to below as the `hosting site`. 

*Note: as per the DID specification, pathnames must be entirely lowercase,
regardless of the case-sensitivity of the web server in question. Similarly, in
the case of identifiers that include a path, `:`s should be used instead of `/`s
to conform to DID syntax, i.e. `https://demo.spruceid.com/path/to` would host
the DID document for the DID `did:web:demo.spruceid.com:path:to`.*

## Setup

1. [Install DIDKit-CLI](/docs/didkit/install/) and any dependencies.
   1. We recommend installing didkit-cli on the same server or virtual machine
      that will run the issuance service and/or website that will issue
      verifiable credentials signed by your `did:web`.  This allows you to
      generate a JWK in situ in step 2 that will later by accessed locally by
      the instance of DIDKit that will sign VCs.  

2. Generate a fresh Ed25519 key and save it locally as a JWK with the command:

```sh
didkit generate-ed25519-key > issuer_key.jwk
```

*Note: in this tutorial we assume a unique, fresh key but omit any backup or
storage considerations. While re-using existing keys entails risks, so does
storing a private key only on a mutable server; if a key is lost, no new
credentials can be signed (i.e. issued), and updating the public key published
on step5 will invalidate any credentials signed with the lost private key.*

1. Generate a `did:key` from that Ed25519 key, display it, and save its DID
   document locally:
```sh
did=$(didkit key-to-did key -k issuer_key.jwk)
printf 'DID: %s\n\n' "$did"
didkit did-resolve `didkit key-to-did key -k issuer_key.jwk` > issuer_key_did_doc.json
```

You should see a DID that looks like this
 `did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW` and the contents of
 the file `issuer_key_did_doc.json` should look like this:
```json
{
  "@context": "https://www.w3.org/ns/did/v1",
  "id": "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW",
  "verificationMethod": [
    {
      "id": "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW#z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW", 
      "type": "Ed25519VerificationKey2018",
      "controller": "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW",
      "publicKeyJwk": {
        "kty": "OKP",
        "crv": "Ed25519",
        "x": "-kMHp5nohaFOK5E9Jch4ErdgwMFYFUc4Lt_wYlAGy8s"
      }
    }
  ],
  "authentication": [
    "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW#z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW"
  ],
  "assertionMethod": [
    "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW#z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW"
  ]
}
```

4. In the text editor of your choice, open the DID document file above. Either manually in the editor or with CLI commands, you'll want to make the following changes to the file:
    1. You'll want to change every instance of `did:key:z6Mkw...` to
       `did:web:{hosting site}` where `{hosting site}` is the full domain (with
       or without path) you picked above, without the `https://` prefix. I.e.,
       ```sh
       sed -i -e "s/did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW/did:web:{hosting site}/g" <my_file>.json
       ``` 
    2. Note that in the property `verificationMethod.id`, there is a query
       parameter `#z6Mkw...` defining the default (and only) "[verification
       method](/docs/didkit/concepts/)" of the DID by that name. You'll want to
       replace this with `#{mainKeyName}` (the conventional default is `#key1`
       or `#owner`). 
    3. By default, a did-web should have at least two `verificationMethod`s:
       `authentication` and `assertionMethod`.  If you'd like these both to be
       aliases for the key generated above, simply change the two
       verificationMethod-qualified DIDs from the respective sections as the
       bottom to the one created in the previous step. The changes in 2 & 3 can
       be executed with a single command: 
       ```sh
       sed -i -e "s/#z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW/#{mainKeyName}/g" <my_file>.json
       ```
    4. *Note: adding any other properties to the DID document is discouraged,
       but adding unregistered properties and/or using keytypes other than
       Ed25519 may require inserting entries to an inline @Context definition.
       See [the did-web
       specification](https://w3c-ccg.github.io/did-method-web/#json-ld-context-definition)
       for an example and the [JSON-LD
       spec](https://json-ld.org/spec/latest/json-ld/#example-6-in-line-context-definition)
       for more explanation.*

5. Save this edited DID document and publish it as `/.well-known/did.json` on
   the hosting site's web server. You may need to configure the server to host
   the file as `content-type/json`.

## Testing

From a CLI installed on any web-connected computer, you can call
```bash
didkit did-resolve did:web:{hosting site}
```
and get back the same DID document you published in step 5.

For example, `didkit did-resolve did:web:demo.spruceid.com` returns:
```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    {
      "@id": "https://w3id.org/security#publicKeyJwk",
      "@type": "@json"
    }
  ],
  "id": "did:web:demo.spruceid.com",
  "verificationMethod": [
    {
      "id": "did:web:demo.spruceid.com#_t-v-Ep7AtkELhhvAzCCDzy1O5Bn_z1CVFv9yiRXdHY",
      "type": "Ed25519VerificationKey2018",
      "controller": "did:web:demo.spruceid.com",
      "publicKeyJwk": {
        "kty": "OKP",
        "crv": "Ed25519",
        "x": "2yv3J-Sf263OmwDLS9uFPTRD0PzbvfBGKLiSnPHtXIU"
      }
    }
  ],
  "authentication": [
    "did:web:demo.spruceid.com#_t-v-Ep7AtkELhhvAzCCDzy1O5Bn_z1CVFv9yiRXdHY"
  ],
  "assertionMethod": [
    "did:web:demo.spruceid.com#_t-v-Ep7AtkELhhvAzCCDzy1O5Bn_z1CVFv9yiRXdHY"
  ]
}
```

If instead of your DID document you get a 404 error, you may want to
double-check your work in step 5 above by typing `https://{hosting
site}/.well-known/did.json` into a web-browser
([example](https://demo.spruceid.com/.well-known/did.json)).