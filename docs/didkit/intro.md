---
id: intro
title: Introduction to DIDKit
sidebar_label: Introduction
slug: /didkit/
---

DIDKit is written in Rust at the core and provides Verifiable Credential and
Decentralized Identifier functionality across different platforms. Rust was
picked for its expressive type system, memory safety, and suitability across
different platforms including embedded systems.

It supports the following use cases, growing over time:

- W3C Verifiable Credentials with JSON-LD Proofs: issuance, presentation, and
  verification
- W3C Decentralized Identifiers: resolution for did-key, did-web, and one layer
  of did-tezos

DIDKit ships with a command line tool and HTTP service. The HTTP service aims
to comply with [HTTP-VC-API](https://w3c-ccg.github.io/vc-http-api/).

Through cross-compilation and linking through C ABIs, DIDKit supports other
platforms through SDKs written in:

- C (C ABI)
- Objective-C/iOS (C ABI)
- Java (JNI, see an example project using Spring Boot)
- Android (via Java)
- Flutter (via Android and iOS)
- JavaScript/ES6 (npm-linked library)
- WASM (cross-compiled using ...)

Support across different platforms is in its beginning stages, and we will
continue to add new platforms and improve interface ergonomics over time. For
platforms that do not have SDK support, the HTTP API and command line tools are
readily integrated.

## Specifications and Test Suites

To demonstrate our commitment to standards and interoperability, we have
ensured that our implementation conforms to the following test suites.

- JSON-LD
- vc-test-suite
- VC-HTTP-API
- ...

## Cryptography Libraries

## Features

The core featureset of DIDKit is expanding steadily over time and in the open, so feel free to engage with the repository directly on github. Currently, DID-Kit supports the following features:

1. Generating keys
2. Wrapping keys in a DID:Key 
3. Issuing W3C specification-compliant, JSON-LD verifiable credentials, signed by a local and/or passed key
4. Verifying W3C specification-compliant, JSON-LD verifiable credentials

DID Methods supported so far: 
* did:tezos1

Proof types verifiable so far:
* RSASignature2018
* Ed25519VerificationKeys

Libraries binding all of the above functionality for the following development languages:
* C
* Java
* Android
* Flutter


## Coming soon

The following features have been tentatively roadmapped for the next major release:
1. JSON Schema editor
2. Built-in validation for JSON-LD Schema
