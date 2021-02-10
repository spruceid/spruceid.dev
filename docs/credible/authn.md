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
   the wallet/identifier pair used in an interactive enrolment, they can simply
   specify the same identifier in a VP request-- only that identifier and a
   valid VP signature from it will pass.

It is presently only possible to verify that a verifiable presentation is valid,
i.e. that the signature is valid and corresponds to the public key & identifier
(DID) passed with it. For this reason, the passed DID may be used as a unique,
stable user identifier between sessions on the basis that a valid VC-holding
wallet will consistently prove the same private key for the life of the
wallet/identifier combination. Please note that in the current release, **no
verification based on the *content* of the presented credential is yet
supported**.

See also the code snippets provided below of a Credible VP flow used to authenticate to another service.

*Future versions will be able to apply business logic to specify a subject DID,
or a subject DID type (by method), or a date range of issuance, or an issuer,
etc etc. Without such specification against which to validate a authenticating
presentation, Credible's authentication should be considered "for testing
purposes only" and not used to authenticate users to real-world systems.*

:::note

## OIDC Considerations
* v0.2? 
  
:::