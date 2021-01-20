---
slug: field-notes-2
title: "Spruce Developer Field Notes #2"
author: Gregory Rocco
author_title: Lovable Scrumbag
author_url: "https://github.com/obstropolos"
author_image_url: "https://avatars2.githubusercontent.com/u/18144858?s=460&u=c893f3c7ca61474a5d7891ea36ef22423b795cd0&v=4"
tags: [spruce, tezos, pizza]
---

At Spruce, we’re building software to power the future of digital identity. Here’s the latest from our development efforts:

![DIDKit screengrab](https://miro.medium.com/max/700/0*fiMPENKByM4nqPsF)

## Rust VC/DID Library

- We are continuing to implement Rust support for [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) and the emerging W3C specification [Decentralized Identifiers](https://github.com/w3c/did-core).
- We have implemented preliminary support for [JSON-LD](https://json-ld.org/) and [Linked Data Proofs](https://w3c-ccg.github.io/ld-proofs/). We plan to evolve this into a fully-fledged open source JSON-LD library for Rust.
- We now support DID Resolution through the [Universal Resolver](https://github.com/decentralized-identity/universal-resolver) API.
- We are beginning discussions with professional security consulting firms to undergo a review of our core libraries and use of cryptography.
- We have started to evaluate open-source licenses and establish contributor guidelines in preparation to release our work as open source. We want to ensure an excellent experience for potential contributors and the ecosystem right out of the first release.
- If you would like a preview of our code before public release, please use our [contact page](https://www.spruceid.com/contact) and we’ll be happy to walk you through what we’ve done in return for some thoughtful feedback.

## Tezos DID Method

- The Tezos DID Method draft is undergoing internal review and will thereafter begin a review with both the Tezos and decentralized identity ecosystems.
- It will be paired with a Tezos Interoperability Proposal ([TZIP](https://gitlab.com/tzip/tzip)) to define smart contract interfaces for DID management.
- We are pleased to report that the recently completed and upcoming Tezos protocol upgrades will make DID management using our proposed method to be more efficient [with relaxed gas constraints](https://blog.nomadic-labs.com/delphi-official-release.html) and enhance privacy preservation with protocol-level [shielded transactions](https://blog.nomadic-labs.com/sapling-integration-in-tezos-tech-preview.html).

## Introducing Credible

**Design and development ** are now underway for our native credential wallet, called *Credible*. We see Credible as the *Amazon Basics* of credential wallets for the consumption, storage, and presentation of verifiable credentials on Android and iOS. It will be free to download and use, and it will support the core credential formats and protocols.

Credible will be both a fully usable real-world production wallet and a reference implementation demonstrating best practices for a cross-platform mobile application managing DIDs and VCs. In addition to supporting W3C Verifiable Credentials and Decentralized Identifiers, its development will be further informed by emerging standards work including outputs from the [Secure Data Store WG](https://identity.foundation/working-groups/secure-data-storage.html), [Universal Wallet 2020](https://w3c-ccg.github.io/universal-wallet-interop-spec/), [select Aries RFCs](https://github.com/hyperledger/aries-rfcs/blob/master/features/0160-connection-protocol/README.md), [DIDComm](https://identity.foundation/didcomm-messaging/spec/), [Presentation Exchange](https://identity.foundation/presentation-exchange/), and more. Over time, we are committed to maintaining this wallet and supporting the most open protocols and standards as they emerge.

The core functionality for Credible will be provided by our Rust libraries, which package the same small set of cryptographic dependencies already vetted and used in trusted projects such as [Hyperledger Ursa](https://www.hyperledger.org/use/ursa).. Since security engineering is foremost among our concerns, Credible will natively take advantage of [iOS Secure Enclave](https://developer.apple.com/documentation/security/certificate_key_and_trust_services/keys/storing_keys_in_the_secure_enclave) and [Android Keystore](https://developer.android.com/training/articles/keystore) key management options, although a build for older phones will also be built with the maximum security guarantees possible given its reduced featureset. We have budgeted and roadmapped for external security guidance and review at every major version.

## Credible’s architecture

To enable cross-platform deployments, we considered implementing fully native applications rather than using frameworks such as Flutter, Xamarin, and React Native. We ultimately chose to build using Flutter to avoid the complexity of mixed-origin [dependency graphs](http://npm.broofa.com/?q=react-native). Flutter also had a slightly more beaten path for embedding Rust through C ABIs. So far, we have implemented a working Flutter build using our Rust libraries, and are now busy stabilizing and integrating all the moving parts to demonstrate basic credential functionality.

Despite the design choices for our reference app, Credible’s modular architecture still allows it to be used with React Native, Xamarin, pulled in as an SDK to fully native applications, and to augment live applications with active users by adding DID/VC functionality. The high level architecture of Credible is as follows:

![Credible architecture](https://miro.medium.com/max/1324/0*bm10yzhoGgknf5nd)

## Our goals

We are not trying to create *one credential wallet to rule them all*, because we do not want to be in the rent-seeking vendor-lock-in business; we are not making a freemium or advertising-supported free software product. Rather, we are building a modular all-weather wallet toolkit that can be mixed and matched into limitless use cases, with an evolving production-ready reference implementation that anyone can download on their phones for free, just like any other app. User-centric, open-source, secure software will be a long time coming if redundant and incompatible wallets proliferate, reinvent every wheel, and waste all their resources competing for oxygen and attention. We need an open wallet in common, stat.

We believe that the future of user-centric credential wallets is a strong base suite of core credentialing functions, tailored to use cases and user experiences with last-mile “skins”, integrations, and profiles. into context-rich verticals such as finance, healthcare, government, and supply chain. We are therefore building the modular base and invite you to come build with us.

### Contact us

*If you would like to discuss how we would deploy the architecture described above for a specific use case, please take 30 seconds to* [*leave us a message*](https://www.spruceid.com/contact)*, and we will respond within 24 hours.* 

Or just Follow us on [*Twitter*](https://twitter.com/sprucesystems) & [*LinkedIn*](https://www.linkedin.com/company/sprucesystemsinc).
