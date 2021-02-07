---
id: specs-and-deps
title: Specifications and Dependencies
hide_title: true
sidebar_label: Specifications & Dependencies
slug: /didkit/
---

# Specifications and Dependencies

At Spruce, we consider it essential to be very explicit and up-front about
our definition of standards compliance, our evidence to back that up, and
the open-source dependencies and libraries which power our security and 
trust guarantees.  To this end, we maintain both lists here, and think that
both are as important as our changelogs.

## Specifications and Test Suites

To demonstrate our commitment to standards and interoperability, we have
ensured that our implementation conforms to the following specifications and
aspire to pass their test suites where applicable:

- [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) 
[Test Suite](https://github.com/w3c/vc-test-suite) (passing, 
[instructions](https://github.com/spruceid/ssi/tree/main/vc-test))
- [W3C Decentralized Identifiers](https://www.w3.org/TR/did-core/) 
(test suite pending CR, [syntax support](
https://github.com/spruceid/ssi/blob/main/src/did.pest))
- [VC HTTP API Test Suite v0.0.1](
https://github.com/w3c-ccg/vc-http-api/tree/master/packages/plugfest-2020)
(passing, [instructions](
https://github.com/spruceid/vc-http-api/tree/spruce/packages/plugfest-2020/vendors/spruce))
- [RDF Dataset Normalization Test Cases](
https://json-ld.github.io/normalization/tests/) (passing, [instructions](#))
- [JSON-LD to RDF Transformation Test Cases](
https://w3c.github.io/json-ld-api/tests/toRdf-manifest.html) 
(440/450 passing, [instructions](#))
- [Linked Data Proofs 1.0](https://w3c-ccg.github.io/ld-proofs/)
- [DID Resolution](https://w3c-ccg.github.io/did-resolution/)
- IETF: [JWT](https://tools.ietf.org/html/rfc7519),
  [JWS](https://tools.ietf.org/html/rfc7515),
  [JWK](https://tools.ietf.org/html/rfc7517),
  [JWA](https://tools.ietf.org/html/rfc7518),
  [CFRG ECDH and Signatures in JOSE](https://tools.ietf.org/html/rfc8037) 

## Cryptography Backends

We strongly prefer tried and tested implementations of cryptographic functions
and believe that it's most responsible to list them out in a forthcoming manner
to any potential users. DIDKit is engineered so that the target platform and
compile-time flags may be used to specify different cryptographic backends,
such as to leverage native hardware capabilities, cross-compile to e.g. WASM,
or to give advanced users the option to only use libraries that they trust.

- [`ring`, v0.16](https://docs.rs/ring/0.16.19/ring/): default for hashes, ed25519
  functions, RSA, and randomness. The ed25519 functions here cannot currently
  compile to WASM.
- [`rsa`, v0.3](https://docs.rs/rsa/0.3.0/rsa/): optionally for RSA.
- [`ed25519-dalek`, v1](https://docs.rs/ed25519-dalek/1.0.1/ed25519_dalek):
  optionally for ed25519. Compiles to WASM.
- [`rand`, v0.7](https://docs.rs/rand/0.7.3/rand/): optionally for randomness.
- [`sha2`, v0.9](https://docs.rs/sha2/0.9.2/sha2/): optionally for sha256
  hashes.
- [`native-tls`](https://docs.rs/native-tls/0.2.7/native_tls/) ([`openssl`](https://docs.rs/openssl/0.10.32/openssl/), [`security_framework`](https://docs.rs/security-framework/2.0.0/security_framework/), or [`schannel`](https://docs.rs/schannel/0.1.19/schannel/); via [`hyper-tls`](https://docs.rs/hyper-tls/0.5.0/hyper_tls/)): optionally for HTTPS.

If you have constructive opinions about the set of cryptographic libraries that
should be supported, please [open an issue](https://github.com/spruceid/ssi).
