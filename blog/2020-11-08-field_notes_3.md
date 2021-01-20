---
slug: field-notes-3
title: "Spruce Developer Field Notes #3"
author: Wayne Change
author_title: Bodega Afficionado and CEO
author_url: "https://github.com/wyc"
author_image_url: "https://avatars3.githubusercontent.com/u/858687?s=460&v=4"
tags: [spruce, tezos, nyc]
---

At Spruce, we’re building a product suite to manage all aspects of the data supply chain. Here’s the latest from our development efforts:

![user interface buttons](https://miro.medium.com/max/617/1*aMJZ3_55ovrKSTTCBZmCZQ.png)

### Rust VC/DID Library

We are currently working on a project called *DIDKit*: a cross-platform toolkit for using DIDs and VCs with our Rust libraries at the core.

- We have been able to utilize the core credential flows of Issue, Present, and Verify using DIDKit, currently supporting RSA and Ed25519 signature systems with more to come.
- We currently support [did-key](https://w3c-ccg.github.io/did-method-key/), but are starting work on support for did-tezos, did-btcr, did-web, and did-peer.
- We are helping to write tests for the DID Test Suite at the [W3C DID Working Group](https://www.w3.org/2019/did-wg/).

### Tezos DID Method

The Tezos DID Method makes a pragmatic trade-off between usability, security, and privacy, allowing any Tezos-based address to have a useful DID.

- Our current draft of the Tezos DID Method can be found [here](https://did-tezos-draft.spruceid.com/).
- We have been reviewing this with members of the Tezos ecosystem and members of the decentralized identity ecosystem to ensure usability, security, and privacy.
- We have started the implementation of the method.
- We intend to submit this as a Credentials Community Group work item with our partner TQ over the next few weeks.

### Credible

- We are completing the integration of our Rust libraries into our native mobile applications through the Flutter cross-platform framework.
- We have begun scoping the cloud wallet and single-page app target aspects of Credible.

### Keylink

- We have begun work on Keylink, which links existing enterprise accounts to keypairs.
- We have a working MVP demonstration which uses Keycloak as the identity provider and Keylink as the relying party for signing with Ed25519 keys.
- Keys are stored in an encrypted SQLite database for the MVP, but we intend to integrate with cloud KMS systems such as Amazon KMS in the future.
- We intend to release Keylink open source as it matures.

### Contact us

*If you would like to discuss how we would deploy the architecture described above for a specific use case, please take 30 seconds to* [*leave us a message*](https://www.spruceid.com/contact)*, and we will respond within 24 hours.* 

Or just Follow us on [*Twitter*](https://twitter.com/sprucesystems) & [*LinkedIn*](https://www.linkedin.com/company/sprucesystemsinc).


