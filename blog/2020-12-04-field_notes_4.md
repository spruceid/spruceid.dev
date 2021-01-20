---
slug: field-notes-4
title: "Spruce Developer Field Notes #4"
author: Gregory Rocco
author_title: Lovable Scrumbag
author_url: "https://github.com/obstropolos"
author_image_url: "https://avatars2.githubusercontent.com/u/18144858?s=460&u=c893f3c7ca61474a5d7891ea36ef22423b795cd0&v=4"
tags: [spruce, tezos, pizza]
---

At Spruce, we’re building a product suite to manage all aspects of the data supply chain. Here’s the latest from our development efforts:

### Tezos DID Method

The [Tezos DID Method](https://did-tezos-draft.spruceid.com/) specifies how Tezos can be used for DID creation and management, compatible with the issuance, storage, and verification of Verifiable Credentials.

- We are actively implementing [TZIP-19](https://gitlab.com/tzip/tzip/-/blob/tzip-19-draft/proposals/tzip-19/tzip-19.md), which is the smart contract interface necessary to implement the Tezos DID Manager.
- Derivation from did:tz (tier 1/did-key resolution) has been fully implemented.
- On-chain (tier 2) is in progress, the smart contract has been written, and now we are working on the integration between the resolver and the Tezos blockchain.
- We are still continuing to iterate on the DID Method Specification and TZIP-19 based on multiple rounds of feedback.

### DIDKit

[DIDKit ](https://sprucesystems.medium.com/introducing-didkit-an-identity-toolkit-e0dfa292f53d)is a cross-platform toolkit for working with W3C Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs).

- The HTTP server has been implemented, and it passes the [VC HTTP API test suite](https://github.com/w3c-ccg/vc-http-api/tree/master/packages/plugfest-2020).
- The CLI and HTTP server have been dockerized.
- We now have the [JNI](https://en.wikipedia.org/wiki/Java_Native_Interface) implemented.
- We’ve expanded our documentation in order to provide a better developer experience.
- We fixed a number of bugs discovered during our interoperability testing.

### Credible

[Credible](https://medium.com/@sprucesystems/spruce-developer-update-2-484368f87ee9) is Spruce’s native credential wallet for the consumption, storage, and presentation of Verifiable Credentials on Android and iOS.

- We demonstrated a complete workflow integrated with one of our initial use-cases with [HIE of One](https://hieofone.com/), dealing with patient-directed health records.
- The workflow noted includes a user being able to respond to a credential offer, save that credential to secure storage, and respond to a verifiable presentation request.
- We continued to enhance our documentation efforts to further support the developer experience using the wallet.

### Keylink

Keylink is Spruce’s tool to link existing enterprise accounts to keypairs.

- We’ve completed the integration of verifiable credential issuance for files using libssi (our native library), [did:key](https://w3c-ccg.github.io/did-method-key/), and [ISCC ID](https://iscc.foundation/iscc/).

### Intake

Intake is a smarter onboarding tool for businesses via secure document collection and processing. These artifacts can then be used as evidence to generate and issue credentials to the counterparty that originally uploaded them.

- We’ve completed our initial design phase for the first MVP iteration of Intake and have begun to implement it.
- We’re begun integrating with 3rd party auth providers to create a familiar authentication experience, and cloud storage providers for directed data storage.
- We’re utilizing our own internal projects to prepare Intake for the handling of Verifiable Credentials.

### Contact us

*If you would like to discuss how we would deploy the architecture described above for a specific use case, please take 30 seconds to* [*leave us a message*](https://www.spruceid.com/contact)*, and we will respond within 24 hours.* 

Or just Follow us on [*Twitter*](https://twitter.com/sprucesystems) & [*LinkedIn*](https://www.linkedin.com/company/sprucesystemsinc).
