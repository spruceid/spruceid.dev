---
id: devhome
title: Welcome to the Spruce ID Developer Portal
hide_title: true
sidebar_label: Home
slug: /
---

## SpruceID Overview

Welcome! This portal offers many ways of getting started with SpruceID libraries
and projects.  At a high level, the core components in our modular framework
are:

- [**DIDKit**](/docs/didkit) - our cross-platform toolkit for signing and
  verifying W3C Verifiable Credentials with or without W3C Decentralized
  Identifiers ("DIDs"), configurable across many interfaces and installable from
  most major package managers
- [**Credible**](/docs/credible) - our lightweight credential wallet,
  demonstrating how DIDKit can be built into a native mobile app or web wallet
  and ready to be whitelabeled for a use-case-specific client application
- **Rebase** - our reputation framework for lightweight, self-service
  verifications and control-proofs across platforms and systems. (*Documentation
  coming soon*)
- **Kepler** - a key-governed solution for self-sovereign storage (the new S3!),
  providing a granular and decentralized Authorization model, robust replication
  and localization controls, and other next-generation features that Web3
  developers will soon forget how hard it not to have yet.

Our goal is to make SpruceID useful, open, and versatile, which drives our
design of each component to be modular and just complex enough to do the heavy
lifting for a wide range of use cases.  For example:

#### Authenticity for NFT Creators
Rebase contains a wide range of verification flows that authenticate users and
guide them through a proof-of-control and produce a receipt in the form of a
Verifiable Credential (DIDKit under the hood). These can be mixed and matched to
create a self-service reputation-system portal like
[TzProfiles.com](https://tzprofiles.com).

#### Decentralized backup and recovery of a decentralized identity
It takes less than a minute for any user to install a stock-model Credible
mobile wallet from a Big Name App Store, generate a unique, private DID, receive
their first VC, and backup the wallet's contents to a self-registered Kepler
account. In case of catastrophe, that same DID can be reconstituted in a new
wallet from a seed recovery phase, and the wallet contents restored from
Kepler-- you can't ask for a more censorship-resistant or decentralized account
system.

#### Decentralized On-boarding for Private DeFi Pools
These Rebase credentials can be mixed and matched with other Verifiable
Credentials from other dApps (on-chain history checks, fresh proofs of staking,
or even an "employment history" from a decentralized marketplace like
[gitcoin](https://gitcoin.co)) to gate access in a decentralized, secure, and
impartial way to DeFi applications that need to reduce spam, sybils, and/or
looky-loos.

#### Decentralized dApp hosting
Just as Rebase bootstraps reputation and history from centralized systems to
identify a blockchain address, so too can DIDKit bootstrap a github account to
sign and verify trustworthy and tamperproof packages. This allows dApps to be
distributed as packages and hosted privately from a Kepler orbit or other
privacy-preserving decentralized storage system.

#### Further reading
Still can't quite grok what all these building blocks add up to? Start with our
primer, ["What is Decentralized Identity?"](primer.md), or use the
[glossary](glossary.md) to go deeper into the technological foundations and
pre-standards specifications that inspire this next-generation tooling.

Or, get started by [building DIDKit locally](didkit/intro.md#getting-started)
and learn as you buidl! 

## Spruce's Company Vision

When was the last time you felt comfortable sending or receiving important
documents digitally? Have you ever been shocked at how much an online platform
knows about you and wish you had more control over your identity? As a business,
do your customers feel any of the above when they’re doing business with you?

> **Spruce is reimagining trusted interactions for enterprises and governments — the
> stewards of the most foundational and impactful layers of infrastructure shaping
> our lives.**
 
We believe that in any organization you can find people working to build
institutions that honor individual’s control over their own information and
privacy.  We are also pragmatists who understand that these principles are most
likely to be implemented at scale when they also make commercial and operational
sense. We firmly believe that there are paths striking a balance that both
respects individual liberty and allows for enterprise success.

We are creating open-source software products that help our customers go from
untrusted data to verifiable information that can be shared privately and with
consent. Our products enable complete lifecycle management for licenses,
certificates, audit reports, registrations, and other mission-critical data that
must remain secure while passing many hands. Our main workflows allow end-users
to manage their own data, and for everyone else to have confidence in the
consent and purpose of data shared by them. To achieve this, we will utilize a
cadre of emerging data technologies, including the recent W3C Verifiable
Credentials and W3C Decentralized Identifiers specifications, which have been
designed to solve business problems while leaving ample room to champion the end
user’s control within a data supply chain.

## Contact

Have any questions about Spruce's development efforts? Reach us via email at
oss@spruceid.com.

_Please note: this site documents multiple early-stage open-source products, and
we are still incorporating feedback from our first comprehensive third-party
code audit. These artefacts are presented as functional "betas" for
experimentation and to show the direction of the projects (inviting proposals
for changes of direction, even!). They are not, however, intended for
transacting real-world business yet._