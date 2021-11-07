---
id: did-methods
title: DID Methods Supported
hide_title: true
sidebar_label: DID Methods
---

## DID Methods supported today:

- [did-tezos](https://did-tezos-draft.spruceid.com/): architected by Spruce,
  did:tezos supports a powerful and robust multi-layer architecture.  This
  includes support for "implicit" (unpublished) DIDs, on-chain (published) DIDs,
  DIDs that begin their lives as the former and become the latter, and
  additional metadata local to specific networks, including Sidetree networks.
- [did-key](https://w3c-ccg.github.io/did-method-key/): the classic
  deterministic method for generating DIDs deterministically from a JWK file or
  other local key material
- [did-pkh](https://github.com/spruceid/ssi/blob/main/did-pkh/did-pkh-method-draft.md):
  a did-key-like deterministic method for generating DIDs from blockchain
  addresses encoded and validated according to the emerging "CAIP" cross-chain
  addressing [specification](https://github.com/ChainAgnostic/CAIPs)
- [did-web](https://w3c-ccg.github.io/did-method-web/): a DID method for
  publishing a DID document to a domain's "/.wellknown/" configuration
  directory, to be resolved over HTTPS. Note: we also host a
  [tutorial](/docs/didkit/did-web/) on how to create and set up a did-web using
  `didkit-cli`.
- did-webkey: a DID method designed in-house for deterministically deriving DID
  Documents from key material exposed by major web APIs; while we implemented it
  specifically for the SSH and GPG keys exposed and consumed by GitHub's APIs,
  it could readily be extended to analogous contexts.
- [did:onion](https://blockchaincommons.github.io/did-method-onion/): a DID
  method designed to be resolved over Tor-style onion routing
- [did-ethr](https://github.com/decentralized-identity/ethr-did-resolver/blob/master/doc/did-method-spec.md):
  the classic Ethereum-based DID method at the heart of uPort, Veramo, and many
  web3 dApp projects (implicit only; main-net indexing & resolution coming soon)
- [did-sol](https://identity-com.github.io/sol-did/did-method-spec.html): the
  native DID method of the Solana blockchain and DeFi ecosystem.

## Proof types verifiable so far:

- RSASignature2018
- Ed25519VerificationKeys
- EcdsaSecp256k1Signature2019
- EcdsaSecp256r1Signature2019
- EcdsaSecp256k1RecoverySignature2020
- Eip712Signature2021
- SolanaSignature2021
- JsonWebSignature2020
