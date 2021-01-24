---
id: intro
title: Introduction to DIDKit
sidebar_label: Introduction
slug: /didkit/
---

DIDKit is mostly written in Rust and provides Verifiable Credential and
Decentralized Identifier functionality across different platforms. Rust was
picked for its expressive type system, memory safety, and suitability across
different platforms including embedded systems.

It supports the following core use cases, with more to be added shortly:

- W3C Verifiable Credentials with JSON-LD Proofs: issuance, presentation, and
  verification
- W3C Decentralized Identifiers: resolution for did-key, did-web, and one layer
  of did-tezos

DIDKit ships with a command line tool and HTTP service. The HTTP service aims
to comply with [HTTP-VC-API](https://w3c-ccg.github.io/vc-http-api/).

Through cross-compilation and linking through C ABIs, DIDKit supports other
platforms through SDKs written in:

- [C]() (C ABI)
- Objective-C/iOS (C ABI)
- Java (JNI, see an example project using Spring Boot)
- Android (via Java)
- Flutter (via Android and iOS)
- [[WIP](https://github.com/spruceid/didkit/pull/17)] JavaScript/ES6 (npm-linked library)
- [[WIP](https://github.com/spruceid/didkit/pull/15)] WASM (cross-compiled using [wasm-pack](https://github.com/rustwasm/wasm-pack))
- [Future] PHP, Python, Ruby/Rails, Go, C#, C++

While support across different platforms is in its beginning stages, we will
continue to add new platforms and improve interface ergonomics over time. For
platforms that do not currently have SDK support, the HTTP API and command line
tools are readily integrated.

## Specifications and Test Suites

To demonstrate our commitment to standards and interoperability, we have
ensured that our implementation conforms to the following specifications and
aspire to pass their test suites where applicable:

- [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) [Test Suite](https://github.com/w3c/vc-test-suite) (passing, [instructions](https://github.com/spruceid/ssi/tree/main/vc-test))
- [W3C Decentralized Identifiers](https://www.w3.org/TR/did-core/) (test suite pending CR, [syntax support](https://github.com/spruceid/ssi/blob/main/src/did.pest))
- [VC HTTP API Test Suite](https://github.com/w3c-ccg/vc-http-api/tree/master/packages/plugfest-2020) (passing, [instructions](https://github.com/spruceid/vc-http-api/tree/spruce/packages/plugfest-2020/vendors/spruce))
- [RDF Dataset Normalization Test Cases](https://json-ld.github.io/normalization/tests/) (passing, [instructions](#))
- [JSON-LD to RDF Transformation Test Cases](https://w3c.github.io/json-ld-api/tests/toRdf-manifest.html) (440/450 passing, [instructions](#))
- [Linked Data Proofs 1.0](https://w3c-ccg.github.io/ld-proofs/)
- [DID Resolution](https://w3c-ccg.github.io/did-resolution/)
- IETF: [JWT](https://tools.ietf.org/html/rfc7519),
  [JWS](https://tools.ietf.org/html/rfc7515),
  [JWK](https://tools.ietf.org/html/rfc7517),
  [JWA](https://tools.ietf.org/html/rfc7518),
  [CFRG ECDH and Signatures in JOSE](https://tools.ietf.org/html/rfc8037) 

## Cryptography Backends

We strongly prefer tried and tested implementations of cryptographic functions
and believe that it's most responsible to list them out in a forthcoming
manner to any potential users. DIDKit is engineered so that the target platform
and compile-time flags may be used to specify different cryptographic backends,
such as to leverage native hardware capabilities or cross-compile to e.g. WASM.



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
