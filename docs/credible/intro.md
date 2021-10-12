---
id: intro
title: Introducing the Credible Wallet
hide_title: true
sidebar_label: Introduction
slug: /credible/
---

![Credible header](/assets/crediblehead.png)

[![](https://img.shields.io/badge/Flutter-1.22.6-blue)](https://flutter.dev/docs/get-started/install)
[![](https://img.shields.io/badge/ssi-v0.1-green)](https://www.github.com/spruceid/ssi)
[![](https://img.shields.io/badge/DIDKit-v0.1-green)](https://www.github.com/spruceid/didkit)
[![](https://img.shields.io/badge/License-Apache--2.0-green)](https://github.com/spruceid/credible/blob/main/LICENSE)
[![](https://img.shields.io/twitter/follow/sprucesystems?label=Follow&style=social)](https://twitter.com/sprucesystems)


Credible is a reference implementation of a native mobile wallet that supports
W3C Verifiable Credentials and Decentralized Identifiers built on DIDKit and
Flutter. We packaged the DIDKit library written in Rust into a Flutter
application that can be rendered equally to both Android and iOS, using C
bindings and Dart’s FFI capabilities respectively. This is the wallet
counterpart to the rich, growing issuance/verification toolkit supplied by
DIDKit, the two pillars of a reference architecture for creating trusted
interactions at scale using verifiable [credentials](concepts).

![credible architecture](/assets/credible-architecture.png)

## Core Features

* QR support to initiate and execute issuance and presentation of verifiable
  credentials
* Official decentralized-identity wallet of [DID Method Tezos](https://did-tezos-draft.spruceid.com/), i.e. "did-tz"
* Changing only a few lines of code, Credible can be rebuilt from source to natively handle any of [the DID methods supported by DIDKit](/docs/didkit/did-methods) instead of did-tz: did-key, did-ethr, did-onion...
* Built in the Flutter native framework, for leaner, faster builds and less dependencies, but also available through the top package manager of both ecosystems for more involved integrations (see the [Native Development](native) page)
* Demonstration-build installable from Apple Test Flight and [Google Play Store](https://play.google.com/store/apps/details?id=com.spruceid.app.credible) (Early Access)

## Extensibility

We built Credible to be solid on the foundations and light on the
context-specific details, meaning that it handles DIDs and VCs to an exceptional
degree of conformance with the core specifications for each. We feel, however,
that the protocols, semantics, and higher-order decisions taken by anyone
integrating a wallet into one or more credential ecosystems should not be
constrained, much less taken, by a reference implementation: those choices are
up to Credible's white-labelers and forkers.  

Credible is end-to-end open source, however, so do [open an
issue](https://github.com/spruceid/credible/issues) if you have thoughts on how
to better support the protocols you are implementing for authentication,
authorization, VC exchange, etc. Or, if you want to contribute code, we are open
to  PRs on Credible and its Spruce-governed dependencies, with the appropriate
[contributor agreements](/docs/contributing) and review!