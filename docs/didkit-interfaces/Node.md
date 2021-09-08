---
id: node
title: Node.JS
---

## At a Glance

- Two slightly different versions of the DIDKit binary can be installed via `npm install`, both vendored under the heading "@spruceid":
  - **[didkit-node](https://www.npmjs.com/package/@spruceid/didkit)** is optimized for Javascript/Node.JS environments, with bindings generated with **[neon](https://github.com/neon-bindings/neon)**
  - **[didkit-wasm](https://www.npmjs.com/package/didkit-wasm)** is packed to operate in browser and blockchain contexts via **[wasm-pack](https://github.com/rustwasm/wasm-pack/)**
- For a quick function & type reference, you can check out the [Issuing a Credential](https://github.com/spruceid/didkit/lib/node/README.md#Issuing-a-Credential) and [Options](https://github.com/spruceid/didkit/lib/node/README.md#Options) sections of the `/lib/node/README.md` file in the DIDKit repo. Better yet, install it and run the commands yourself!
- To test your installation or just to see examples of calls and returns with valid DID-key test vectors, see the provided [test script](https://github.com/spruceid/didkit/lib/node/test/index.spec.js) 
- An experimental ASM.JS implementation is [provided for reference](https://www.npmjs.com/package/didkit-wasm#ASM-target) but not maintained or recommended for the casual developer.

## Installation

Installation over node package managers is quite simple. Run this command to confirm version number and proper operation of basic functions:

```js
// Import the module
const DIDKit = require('didkit');

console.log(DIDKit.getVersion());

// To issue credentials and presentations, you need a key.
// The library provides a function to generate one.
const key = DIDKit.generateEd25519Key();

// There are two helpful functions to obtain a DID and the `did:key`
// `verificationMethod` from the key.
const did = DIDKit.keyToDID('key', key);
const verificationMethod = DIDKit.keyToVerificationMethod('key', key);
```

## Examples

|Components|Example|
|---|---|
|Wasm, Blockchain Indexer|[JS Code](https://github.com/spruceid/tzprofiles/blob/main/api/service/index.js)|
|Web Application, dApp|[JS Code](https://github.com/spruceid/tzprofiles/tree/main/dapp)|