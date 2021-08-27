---
id: document-loading
title: Document Loading
---

## Introduction
#### *URLs that point to documents*

One of the trickiest things about Verifiable Credentials, for people without
JSON-LD or Semantic Web experience, is the referencing of external (linked)
documents, represented in Verifiable Credentials and other Linked-Data documents
by URLs. Thinking of them as URLs is deceptive, however, as fetching each from
the open web at the time of verification of a credential bears many risks to
both security and privacy-- although represented as URLs, they are best "cached"
or stored locally, to be checked at time of verification.

## Document types 

The most common Linked-Data documents used to make Verifiable Contexts more
portable are "context files", which are linked in the mandatory `@Context` field
of all verifiable credentials.  These contain all the additional the vocabulary
references needed to [semantically disambiguate](concepts#semantics) the keys
and values that make up a credential. I say "additional" because there is a
[core vocabulary](https://www.w3.org/2018/credentials/v1) in the core context
file maintained by the Verifiable Credentials working group, which must be
referenced by all conformant VCs to anchor all mandatory terms defined by the VC
specification. There are also some additional core vocabularies that cover a lot
of common semantics, like the [schema.org](https://schema.org/) project central
to the Semantic Web community, and VC-specific extensions to the core context
maintained by the W3C-CCG community, such as the [security
vocabulary](https://w3c-ccg.github.io/security-vocab/) for anchoring
cryptographic terms and proof-object properties and the [traceability
vocabulary](https://w3c-ccg.github.io/traceability-vocab/) for anchoring terms
common across major supply chain use cases.  It is common practice, when
establishing anything from a small use-case to a vast ecosystem, to establish
one context file (or more) to anchor all the VCs involved.

In addition to context files, there are other kinds of Linked-Data/JSON-LD
documents that you might need to publish/host or resolve.  For example, the
[RevocationList2020](https://w3c-ccg.github.io/vc-status-rl-2020/) and
[StatusList2021](https://w3c-ccg.github.io/vc-status-list-2021/) specifications
rely on "status lists" to be published to and queried over the open web in much
the same was as context files. These lists are the linked-data equivalent of the
[OCSP](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol) status
lists so central to the certificate-authority PKI networks that power HTTPS/TLS
and other basic cybersecurity infrastructure. Like those, they may need to be
propagated and cached, with latency built into systems relying on them. See
below for details on how to handle that on both publisher and verifier sides of
the interaction.

## Different modes of document loading

In a nutshell, there are three options for loading contexts into an
issuer/verifier, i.e., four different ways an instance of DIDKit can dereference
a URL pointing to a document. Technically, these are "resources" in the
classical sense, but DIDKit is configured to build and maintain a local
reference table to avoid fetching remote resources, which is disabled by
default.

Ranked by their simplicity and security, the four ways of loading a document for
issuance or verification purposes are:

1. Package a resource into DIDKit at build time.
2. Load a context resource locally at run time. (Coming soon)
3. Periodically reload a context resource "remotely" from a remote trusted
   source. (Coming soon)
4. Load a context resource remotely at time of verification (*Strongly
   discouraged and not supported or endorsed by Spruce*)

The security advantages of 1 over 2 and 2 over 3 should be clear, but it is also
worth mentioning that option #4 has major privacy/data-leakage implications
which make it categorically deprecated.  Option #3 is not completely free from
the complications and risks of option #4, so it is strongly recommended that 1
and 2 be ruled out categorically before finding an optimal balance of
mitigations and performance for implementing #3.

## Pre-loading a document resource at build time

Any context file can be added to the directory, `ssi/contexts/`, which DIDKit
queries for contexts.  A few considerations, though:

1. Context files are intellectual property, and as such should be covered by
   licenses if upstreamed or otherwise distributed. Add licensing information
   about any new context file to `ssi/contexts/LICENSES.md` and
   `ssi/contexts/README.md` as needed.
   - If it's a W3C context file you are adding, simply add the name and URL in
     `ssi/contexts/README.md` with the other W3C documents (they are already
     covered by W3C license statements).
   - If the new context is covered by neither W3C's license, or an Apache-2.0 or
     CC-BY-SA-3.0 license, you will also need to update the license property in
     `ssi/contexts/Cargo.toml`.
2. Add a line in `contexts/src/lib.rs` using `include_str` to load the JSON-LD
   file and export it as a **constant variable**.
   - Optionally, you may want to add the URL in a rustdoc comment.
3. In `ssi/src/jsonld.rs`:
  - Declare and export a constant for the context file's canonical URL.
  - In the `lazy_static` block, define the context document as a
    `RemoteDocument`, referencing the context file variable defined in
    contexts/src/lib.rs and the constant defined for the URL.
  - In `StaticLoader`, match the context file's URL(s) to the context document.

After that, you are ready to follow the steps in didkit to build didkit-cli or
didkit-http, using the locally-modified ssi repo.

## Loading a document resource locally at run-time

Coming soon!

## Caching remote documents at run-time

Coming soon!

## Loading remote document at run-time

Coming never! See above for reasons why we do not support this feature out of
the box.  Builder beware!