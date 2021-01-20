---
slug: field-notes-5
title: "Spruce Developer Field Notes #5"
author: Gregory Rocco
author_title: Lovable Scrumbag
author_url: "https://github.com/obstropolos"
author_image_url: "https://avatars2.githubusercontent.com/u/18144858?s=460&u=c893f3c7ca61474a5d7891ea36ef22423b795cd0&v=4"
tags: [spruce, tezos, pizza]
---

![screengrab of did:tezos specification](https://miro.medium.com/max/700/1*ssFkUNDRxNpthAPzWz2MCQ.png)

At Spruce, we’re building a product suite to manage all aspects of the data supply chain. Here’s the latest from our development efforts:

### Tezos DID Method

The [Tezos DID Method](https://did-tezos-draft.spruceid.com/) specifies how Tezos can be used for DID creation and management, compatible with the issuance, storage, and verification of Verifiable Credentials.

- We are still collecting feedback on the specifications of the DID method as well as the on-chain DID manager.

### DIDKit

[DIDKit ](https://sprucesystems.medium.com/introducing-didkit-an-identity-toolkit-e0dfa292f53d)is a cross-platform toolkit for working with W3C Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs).

- Packaged DIDKit into an npm package so it can run on the backend for a Node.js application.
- Started building DIDKit for WebAssembly, for use in web browsers. 
- Implemented did-tezos resolution layer 1 to support tz1/tz2/tz3 without the DID manager smart contract or off-chain updates
- Implemented JSON-LD to RDF serialization to support arbitrary Linked Data verifiable credentials, with compile-time context loading.
- Tested our implementation of JSON-LD to RDF serialization and JSON-LD Dataset normalization with W3C test suites, discovering and fixing bugs along the way.
- We are increasing cryptographic agility so that the user can choose their own cryptographic function implementations.

## Credible

[Credible](https://medium.com/@sprucesystems/spruce-developer-update-2-484368f87ee9) is Spruce’s native credential wallet for the consumption, storage, and presentation of Verifiable Credentials on Android and iOS.

- Our efforts on Credible are currently focused on making sure did-tezos resolution layer 1 is the default, working DID method in Credible.

## Intake

Intake is a smarter onboarding tool for businesses via secure document collection and processing. These artifacts can then be used as evidence to generate and issue credentials to the counterparty that originally uploaded them.

- We’ve currently completed our initial sprint on Intake to create an app capable of basic onboarding via documents and fields through form creation.
- We are designing the models for forms and submissions, using JSON Schema as well as the possibility to enrich them using semantics and linked data.
- We are designing the implementation of workflows state machines, aiming for a robust but expressive system, studying general-purpose workflow engines and models such as petri nets.

## Contact Us

If you would like to discuss how we would deploy the architecture described above for a specific use case, please take 30 seconds to [leave us a message](https://www.spruceid.com/contact), and we will respond within 24 hours.

Or just follow us on [Twitter](https://twitter.com/sprucesystems) and [LinkedIn](https://www.linkedin.com/company/sprucesystemsinc).