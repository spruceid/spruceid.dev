---
id: authn
title: Authenticating to other services
---

Credible's current authentication model is simple: services request a verifiable
credential issued to the wallet-holder at each authentication, and an
interactive presentation is used to initiate a session. Future extensions and
alternatives are roadmapped.

## VP-Authentication

The presentation request formulated by a "relying party" (i.e., the service
relying on credible to authenticate its user) currently comes in only three
forms: 

1. **Unspecified VP Request for enrollment**: any wallet holding 1 or more VCs
   can pass this verification to create an account keyed to the presenting
   identifier.
2. **Unspecified VP Request for authentication**: if the relying party wants to
   allow any enrolled party to sign in, they can simply request a presentation
   of any credential and check the received credential's presenter identifier
   against  records of enrolled users from above. Anyone who has previously been
   enrolled using the above mechanism can be authenticated by this mechanism.
3. **Specified VP Request for authentication**: if the relying party retained
   the wallet-identifier/credential-identifer pair used in an interactive
   enrolment, they can simply specify the same identifier in a VP request-- only
   that identifier and a valid VP signature from it will pass.

It is presently only possible to verify that a verifiable presentation is valid,
i.e. that the signature is valid and corresponds to the public key & identifier
(DID) passed with it. For this reason, the passed DID may be used as a unique,
stable user identifier between sessions on the basis that a valid VC-holding
wallet will consistently prove the same private key for the life of the
wallet/identifier combination. Please note that in the current release, **no
validation or verification of the presented *credentials* within the
presentation is yet supported**.

See also the code snippets provided in the [CHAPI
example](/docs/didkit-examples/svelte-chapi/) for how Credible can authenticate
to another service.

## Extensibility

We tried hard to make Credible easy to extend, while also staying within our
narrow scope. It is up to developers to add their use case's *business logic*
for constraints like validation of a subject DID, or a subject DID type (by
method), or a date range of issuance, or an issuer, etc etc. Without such
specification against which to validate a authenticating presentation,
Credible's authentication should be considered "for testing purposes only" and
**not** used to authenticate users to real-world systems.

Spruce is watching closely as the standards around OIDC evolve, as well as the
DIDComm protocol incubated across the DIF and Aries communities. Both of these
are promising to deliver much in the way of recyclable and adaptable patterns
for slotting SSI wallets into real-world value flows and ecosystems.