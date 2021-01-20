---
slug: introducing-did-kit
title: Introducing DIDKit
author: Charles Lerner
author_title: Rust Kingpin
author_url: "https://github.com/clehner"
author_image_url: "https://avatars0.githubusercontent.com/u/95347?s=460&u=d3198bf178a7747bffd84e067ab0b9391bb06a69&v=4"
tags: [spruce, rust, automation]
---

In order to better work with decentralized identifiers and verifiable credentials, we’re working on DIDKit.

![Image for post](https://miro.medium.com/max/1464/0*04yvJG6ysGtY5aMB)

**DIDKit** is a cross-platform toolkit for working with W3C Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs). It allows you to resolve and manage DID documents, and also manage the entire lifecycle of Verifiable Credentials including their issuance, presentation, and verification.

Notably, it reuses the same codebase across command-line tooling, RESTful HTTP servers, and platform-specific SDKs to facilitate code-level interoperability and a low total cost of ownership. When building ecosystems using decentralized identity to enable verifiable information, many actors must share the same underlying data formats and processing algorithms across different roles.

We wrote DIDKit in Rust due to its memory safety, expressive type system, and suitability across a variety of systems and environments. For example, the Rust ecosystem has already explored WASM compilation targets in support of single-page apps running in browsers, and we wanted to be able to support those and also browser extensions with DID and VC operations.

The same codebase can also run nimbly on embedded systems with moderately constrained resources (memory in the megabytes and CPU in the megahertz). Finally, Rust programs are able to directly interface with production-ready cryptographic libraries, as seen with Hyperledger Ursa’s use of openssl, libsodium, and libsecp256k1.

Currently, we have a working suite of command-line tools for credential issuance, presentation, and verification. We are creating an HTTP server conforming to [VC HTTP API](https://w3c-ccg.github.io/vc-http-api/), and we have native iOS and Android libraries that are used in our Credible wallet.

## Contact us

*If you would like to discuss how we would deploy the architecture described above for a specific use case, please take 30 seconds to* [*leave us a message*](https://www.spruceid.com/contact)*, and we will respond within 24 hours.* 

Or just Follow us on [*Twitter*](https://twitter.com/sprucesystems) & [*LinkedIn*](https://www.linkedin.com/company/sprucesystemsinc).
