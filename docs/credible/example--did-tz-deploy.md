---
id: example--did-tz-deploy
title: Deploying a DID:tz to Tezos Mainnet
---

## Introduction

By default, Credible does not generate "on-chain" DIDs that publish their DID
document to the main-net.  Instead, people who install DIDKit (whether from the
App Store or a build generated from our open-source code) will instead be
prompted to generate an
["implicit"](https://did-tezos.spruceid.com/#implied-did-document) DID,  which
can be used to hold credentials anonymously or to participate in small, local
networks where users register themselves and "discover" one another locally.

Given the intricacies of privacy law and the consequences of putting
personally-associated identifiers into immutable, publicly-readable storage, we
do not recommend on-chain DIDs for general use, and this is why they are
disabled by default in our demonstrator app.  Legal entities that are
bootstrapping an existing strong public presence on web2 (i.e., companies with
major websites and infrastructure access to them) are encouraged to use
[did:web](https://w3c-ccg.github.io/did-method-web/), which is implemented
out-of-the-box in [DIDKit](https://github.com/spruceid/ssi/tree/main/did-web)
and can be resolved by Credible verification.

There are, however, other use-cases. A DID may need to be publicly resolvable,
and if it's not being used in public and correlated, publishing its DID Document
to a blockchain might be an appropriate way of doing so. An independent artist
selling NFTs or e-books might want to publish a DID Document and be "resolvable"
to allow direct communications and to "hang a shingle" for their micro-business,
as it were. A large enterprise might want to provision its employees with mobile
phones that handle signatures and authentication functions on a private network,
or even a "private blockchain".  A Credible wallet can receive and present
credentials of which an inanimate object is the subject.  All of these could
require a private key generated on a web-wallet, a phone, or a virtual/emulated
phone to register its DID Document on a distributed ledger.

For these use-cases, we are including the following step-by-step instructions-- how these fit into a proof-of-concept or production project will, of course, take some further research.

## Setup

Before deploying smart contracts *en masse* or building smart-contract
capability into a custom build of Credible, you should get to know the [Tezos
DID Manager](https://github.com/spruceid/did-tezos/tree/main/contract/taquito).
To do so, use the node package manager to install the Taquito virtual machine
interface from the `contract/taquito` folder of a [DIDKit
environment](https://github.com/spruceid/did-tezos/tree/main/contract/taquito).
This will turn your local sandbox into a Tezos-connected local sandbox.

As you can see in the [readme
file](https://github.com/spruceid/did-tezos/tree/main/contract/taquito#usage)
for the smart contract, the default target for DID Manager smart contracts is
the Tezos main-net, but this can be overriden with the -u / --url flag. 

## Know your smart contract (practice makes perfect)

Florencenet is the best test-net to use, as it runs the current stable code and
is actively maintained. There are, however, [various
options](https://tezos.gitlab.io/introduction/test_networks.html) which might be
more appropriate to your use-case or project.

There is also a [faucet interface](https://faucet.tzalpha.net/) for manually
generating test-accounts (one at a time) that works on Florencenet or on another
testnets. 

Download a faucet file to your local /contract/taquito folder and then use it to
test the RPC calls and returns outlined in our [contracts/taquito folder
readme](https://github.com/spruceid/did-tezos/tree/main/contract/taquito).

For example, if you take a JSON file from the faucet and copy it into your
DIDKit DID manager folder as "faucet.json", you can run this command from the
same folder:

```
node did_manager.js originate -u https://api.tez.ie/rpc/florencenet -f faucet.json -e https://example.com
```

And it will create a smart contract on florencenet that resolves to a DID
Document with [service block](https://w3c.github.io/did-core/#services) that
looks like this (except with a valid tz1 address instead of tz1...)

```
"service": [{
   "id": "did:tz:florencenet:tz1...",
   "type": "TezosDiscoveryService",
   "serviceEndpoint": "https://example.com"
}]
```

When you run this command over the RPC interface, it will return the name of the
smart contract (`KT1...`), which you can then see querying a florencenet block
explorer like [better-call.dev](https://better-call.dev/), and which yields a stable web URL that looks like this:

```
`https://better-call.dev/florencenet/KT1...`
```

Playing around with the options (on a testnet) is a good way to get comfortable with your options-- without paying any transaction fees or worrying about anyone's privacy.

## Smart contracts (and externalities) at scale

If you would like to build on-chain registration into a custom build of
Credible, you will have to build RPC calls into your application based on what
you learned experimenting above. Similarly, "off-chain registration" or local
registration of keypairs into a more gated or permissions network is also
possible, but out of scope for the Credible SDK.  

When architecting such a system though, we strongly recommend thinking about the
correlation, privacy, and context-preservating risks involved in publishing
identifiers of any kind: what information can be gleaned and correlated to other
data by crawlers of various kinds? What deletion or tombstoning options are
available for "pruning" or removing those publications from the crawlable public
record? What historical query capabilities are offered by that record system or
ledger, after a takedown/deletion request has been executed? 