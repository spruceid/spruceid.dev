---
slug: field-notes-1
title: "Spruce Developer Field Notes #1"
author: Gregory Rocco
author_title: Lovable Scrumbag
author_url: "https://github.com/obstropolos"
author_image_url: "https://avatars2.githubusercontent.com/u/18144858?s=460&u=c893f3c7ca61474a5d7891ea36ef22423b795cd0&v=4"
tags: [spruce, tezos, pizza]
---

At Spruce, we’re building software to power the future of digital identity. Here’s the latest from our development efforts:

![the urbanity of it all clipart](https://miro.medium.com/max/700/0*FwXmEvmdGxjxgh7y.png)


### Verifiable Credential Library

As part of our efforts, we are developing a library to provide functionality around Verifiable Credentials (VC) in Rust. We chose Rust for its [speed, predictable performance, and safety](https://msrc-blog.microsoft.com/2019/07/22/why-rust-for-safe-systems-programming/). One other consideration for Rust was for embedded and IoT devices in the future as they harness credentials and use them in the performance of discrete tasks.

We are happy to report that our VC library passes all tests required by the [W3C Verifiable Claims Working Group](https://github.com/w3c/vc-test-suite) test suite to be considered a conforming implementation. Once released, we will propose that our library is included in the [W3C CCG implementations list](https://w3c.github.io/vc-test-suite/implementations/) with all public results of our conformance testing, and instructions on how to run them locally. At the moment we are implementing JSON-LD support in Rust to fully express semantic data models past the operations required to pass the test suite. We are also working on improving support for LD-Proofs and the use of ZKPs.

![Screengrab of a very nerdy CLI](https://miro.medium.com/max/896/0*nshLJCNbnl9rD3O-)

We are currently awaiting a preliminary security review. After that check passes and with proper contributor guidelines, we will publicly release the repository.

### Tezos DID Method

Our work with the Tezos ecosystem requires a Tezos-based DID method to allow Tezos accounts to use verifiable credentials using a trustless model and within the same execution context. As a refresher, a decentralized identifier (DID) relies on DID documents to establish authentication, and operations on DID documents themselves, including creation, resolution, updating, and deactivation, as described by a DID method. We are therefore currently in the early stages of developing a DID method based on Tezos, incorporating [TZIPs](https://gitlab.com/tzip/tzip) such as TZIP-16 and eventually producing TZIPs from our work.

Public ledger-based DIDs are rife with privacy concerns, and we are taking the following approaches with our DID method specification:

- Encouraging off-chain interactions where possible by (1) not requiring a public transaction prior to DID resolution and usage, and (2) considering the interplay with privacy-preserving DID methods such as [did:peer](https://identity.foundation/peer-did-method-spec/), which should actually serve the brunt of interactions to prevent unnecessary information exposure.
- Limiting the scope towards providing only authentication via keypairs thereby ameliorating many concerns by the community [around service endpoints](https://github.com/w3c/did-core/issues/382). We are considering the incorporation of the [KERI](https://github.com/decentralized-identity/keri) protocol to keep things straightforward.
- Working closely with engineers from the Tezos ecosystem to provide implementations in Lorentz and/or LIGO for the DID document management smart contracts. There is a chance we’ll have a full spec if we can keep the contracts tight enough, and also minimize gas costs in the process.

### Reusable Components

With respect to our reusable product components, we are currently in the early design stages for our credential wallet, issuer tool, and ecosystem steward platform. We are completing user journeys and technical requirements based on customer feedback.

### Contact us

*If you would like to discuss how we would deploy the architecture described above for a specific use case, please take 30 seconds to* [*leave us a message*](https://www.spruceid.com/contact)*, and we will respond within 24 hours.* 

Or just Follow us on [*Twitter*](https://twitter.com/sprucesystems) & [*LinkedIn*](https://www.linkedin.com/company/sprucesystemsinc).
