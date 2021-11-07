---
id: glossary
title: Core DIDKit Glossary
sidebar_label: Glossary
---

*For more detailed explanations and references to core specifications, see the
more comprehensive [developer portal
glossary](https://spruceid.dev/docs/glossary).*

### Verifiable Credentials ("*VCs*")
Verifiable Credentials are document structures that consist of a few key
properties: 
- an `id` (a unique ID, often a UUID with the `urn:uuid:` prefix or a
resolvable URL containing another unique per-credential identifier)
- a `credentialSubject`, in the sense of a data subject, usually identified by a DID or other privacy-preserving indirection or pseudonym)
- one or more `proof` (signature) section, specific to intended verification audience(s)
- a payload, usually structured. 
- VCs also contain semantic references linked by URI, in an array at the
  beginning of the object called `@context`. 
  
*For a more introductory explanation and guidance on understanding the
  specification, see the [glossary
  entry](https://spruceid.dev/docs/glossary#verifiable-credentials-vcs)*

### Wallet
Wallets are specialized pieces of software that store credentials, usually
secured by also holding the cryptographic keys associated with specific
identifiers, accounts, and/or addresses. They may also store other kinds of
credentials as well, such as unsigned credentials, self-attested/self-issued
credentials, or credentials with subjects whose keys the wallet does not
control. Its primary function, however, is managing keys for receiving and
presenting credentials corresponding to those keys. 

DIDKit handles the signatures and verifications of verifiable credentials as
well as the relationship between DIDs and signing keys; Credible is a wallet
with a mobile-native version of the DIDKit library under the hood. Both are
built around Spruce's core `ssi` library. *For a more introductory explanation
and specification, see the [glossary
entry](https://spruceid.dev/docs/glossary#wallet)*

### Decentralized Identifiers ("*DIDs*")
Decentralized Identifiers are stable identifiers which are bound to a
controlling keypair, which is usually rotatable without changing the identifier.
These stable identifiers can be used to query a verifiable data registry to get
a "DID Document" containing the current controlling keypair and other
information for verifying information associated with the DID.  *For a more
introductory explanation and specification, see the [DID glossary
entry](https://spruceid.dev/docs/glossary#decentralized-identifiers-dids) and
the [DID Document glossary
entry](https://spruceid.dev/docs/glossary#did-document)*

### DID Method
A set of interdependent governance, publication, and discovery mechanisms for
DIDs in a given DID namespace, specified by a registered specification. Most DID
methods use blockchains or other publically-readable distributed ledgers as data
registries, but some, such as DID:Web, use other systems of verification, such
as secure DNS resolution. *For a more introductory explanation and
specification, see the [glossary
entry](https://spruceid.dev/docs/glossary#did-method)*

### DID:Key
A special DID Method that generates conformant, offchain DID documents for
local, private, and/or ephemeral resolution from a keypair. This can be helpful
for integrating conventional PKI or signing infrastructure with DID issuance, or
to allow caching or local resolution of DID documents where it is undesirable or
impossible to resolve remote DIDs. *For a more introductory explanation and
specification, see the [glossary
entry](https://spruceid.dev/docs/glossary#didkey)*

### JSON Web Key (JWK)

A JSON Web Key, or a "JWK" for short, is a special class of JSON objects(see
[glossary entry](https://spruceid.dev/docs/glossary#json) ) objects specified
for containing cryptographic key or set of keys. They were
[specified](https://tools.ietf.org/html/rfc7517) in 2015 through the IETF.