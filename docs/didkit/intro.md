---
id: intro
title: Introducing DIDKit
hide_title: true
sidebar_label: Introduction
slug: /didkit/
---

![DIDKit header](/assets/didkithead.png)

[![](https://img.shields.io/badge/Docker-19.03.x-blue)](https://www.docker.com/) [![](https://img.shields.io/badge/Rust-v1.51.0-orange)](https://www.rust-lang.org/) [![](https://img.shields.io/badge/ssi-v0.1-green)](https://www.github.com/spruceid/ssi) [![](https://img.shields.io/badge/License-Apache--2.0-green)](https://github.com/spruceid/didkit/blob/main/LICENSE) [![](https://img.shields.io/twitter/follow/sprucesystems?label=Follow&style=social)](https://twitter.com/sprucesystems)

## What is DIDKit?

DIDKit provides Verifiable Credential and Decentralized Identifier
functionality across different platforms. It's written primarily in Rust due
to Rust's expressive type system, memory safety, simple dependency web, and
suitability across different platforms including embedded systems.

DIDKit supports the following high level use cases, with more to be added shortly:

- [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) with
  JSON-LD Proofs: issuance, presentation, and verification.
- [W3C Decentralized Identifiers](https://www.w3.org/TR/did-core/): resolution
  for did-key, did-web, and one layer of did-tezos.

## What does DIDKit include?

DIDKit ships with a [command line tool](/docs/didkit/cli_commands) and [HTTP service](/docs/didkit/http_syntax). The HTTP service aims
to comply with [HTTP-VC-API](https://w3c-ccg.github.io/vc-http-api/).

Through cross-compilation and linking through C ABIs, DIDKit also supports
other platforms through SDKs for:

- [C/Objective-C](https://github.com/spruceid/didkit/tree/main/lib/cbindings) (C
  ABI)
- [Java](https://github.com/spruceid/didkit/tree/main/lib/java) (via JNI, see an
  [example project using Spring Boot](https://github.com/spruceid/didkit/tree/example-java/examples/java-springboot))
- [Android](https://github.com/spruceid/didkit/tree/main/lib/android) (via Java)
- [Flutter](https://github.com/spruceid/didkit/tree/main/lib/flutter) (via Android
  and iOS)
- ([WIP](https://github.com/spruceid/didkit/pull/17)) JavaScript/ES6 (npm-linked
  library)
- ([WIP](https://github.com/spruceid/didkit/pull/15)) WASM (cross-compiled using
  [wasm-pack](https://github.com/rustwasm/wasm-pack))
- (Future) PHP, Python, Ruby/Rails, Go, C#, C++

Although support across different platforms is in its early stages, we will
continue to add new platforms and improve interface ergonomics over time. For
platforms that do not currently have SDK support, the HTTP API and command line
tools are readily integrated.

## Quickstart

In this quickstart, we will build and run the command line tool along with the
HTTP server.

Prerequisites:

- GNU/Linux or MacOS, not yet tested on Windows.
- [Rust nightly](https://www.rust-lang.org/tools/install) (`rustup default nightly`)

Building `didkit` (we are working on crate packaging):

```sh
$ git clone https://github.com/spruceid/ssi --recurse-submodules
$ git clone https://github.com/spruceid/didkit
$ cd didkit/
$ cargo build
```

Using `didkit` CLI ([Github documentation](https://github.com/spruceid/didkit/tree/main/cli)) <br/>
Read more about CLI Commands [here](/docs/didkit/cli_commands)

```sh
$ ./target/debug/didkit -h
$ ./target/debug/didkit generate-ed25519-key > key.jwk
```

Using `didkit` HTTP server ([Github documentation](https://github.com/spruceid/didkit/tree/main/http)) <br/>
Read more about HTTP Commands [here](/docs/didkit/http_syntax)

```sh
$ ./target/debug/didkit-http -k key.jwk
Listening on http://127.0.0.1:51467/
```

Please see the installation instructions for more detailed steps or how to use
containerized builds. The CLI and HTTP related pages in the [examples
section](/docs/didkit/examples) will demonstrate how to issue and verify
Verifiable Credentials and Verifiable Presentations.

## Features

The core featureset of DIDKit is expanding steadily over time and in the open,
so feel free to engage with the repository directly on github. Currently,
DIDKit currently supports the following features:

- Key generation and handling.
- Issuance and presentation of W3C Verifiable Credentials in JSON-LD, signed by
  a local and/or passed key.
- Verification of W3C Verifiable Credentials in JSON-LD.

DID Methods supported so far:

- did-key
- did-web
- did-tezos
- did-ethr (implicit only)
- did-sol

Proof types verifiable so far:

- RSASignature2018
- Ed25519VerificationKeys
- EcdsaSecp256k1Signature2019
- EcdsaSecp256r1Signature2019
- EcdsaSecp256k1RecoverySignature2020
- Eip712Signature2021
- SolanaSignature2021
- JsonWebSignature2020

## Roadmap

The following tools and features are high priority for subsequent releases:

1. Exposing interfaces for JWT-based Verifiable Credential workflows
2. JSON-LD context editor
3. Registration of several new LD signature suites and support for new
   cryptography
4. Further DID method support: did-btcr, did-onion
5. BBS+ signatures
6. DIDComm support
7. Aries interoperability profile support
