---
id: node
title: Javascript
sidebar_title: JavaScript
---

## At a Glance

- Two slightly different versions of the DIDKit binary can be installed via `npm`, all under the organization "@spruceid":
<!---  - **[didkit-neon](https://www.npmjs.com/package/@spruceid/didkit)** is optimized for Node.JS environments, with bindings generated with **[neon](https://github.com/neon-bindings/neon)** Removed this entry as I could not get didkit-neon to install via npm --->
  - **[didkit-wasm](https://www.npmjs.com/package/@spruceid/didkit-wasm)** is packed to operate in the browser and blockchain contexts via **[wasm-pack](https://github.com/rustwasm/wasm-pack/)**
  - **[didkit-wasm-node](https://www.npmjs.com/package/@spruceid/didkit-wasm)** is packed to operate in Node.JS and blockchain contexts via **[wasm-pack](https://github.com/rustwasm/wasm-pack/)**
- For a quick function & type reference, you can check out the [Issuing a Credential](https://github.com/spruceid/didkit/lib/node/README.md#Issuing-a-Credential) and [Options](https://github.com/spruceid/didkit/lib/node/README.md#Options) sections of the `/lib/node/README.md` file in the DIDKit repo. Better yet, install it and run the commands yourself!
- To test your installation or just to see examples of calls and returns with valid DID-key test vectors, see the provided [test script](https://github.com/spruceid/didkit/blob/main/lib/node/test/index.spec.js) 

## Installation

Installation over node package managers is quite simple. For example, 'npm install @spruceid/didkit-wasm-node' will install the Node.js version.

Once installed, this Javascript program can be run to display the didkit version number and confirm the proper operation of the basic functions:
```js
console.log("Testing didkit");
// Import the module
const DIDKit = require('@spruceid/didkit-wasm-node');

console.log("DIDKit version = " + DIDKit.getVersion());

// To issue credentials and presentations, you need a key.
// The library provides a function to generate one.
const key = DIDKit.generateEd25519Key();
console.log("Key = " + key);

// There are two helpful functions to obtain a DID and the `did:key`
// `verificationMethod` from the key.
const did = DIDKit.keyToDID('key', key);
console.log("DID = " + did);
// Note keyToVerificationMethod returns a JavaScript Promise that must be handled
const verificationMethodPromise = DIDKit.keyToVerificationMethod('key', key);
verificationMethodPromise.then (
	function(verificationMethod) {console.log("Verification method = " + verificationMethod)},
	function(vmError) {console.log(vmError)}
);
```

## Examples

|Components|Example|
|---|---|
|Wasm, Blockchain Indexer|[JS Code](https://github.com/spruceid/tzprofiles/blob/main/api/service/index.js)|
|Web Application, dApp|[JS Code](https://github.com/spruceid/tzprofiles/tree/main/dapp)|

## Code

- [WASM](https://github.com/spruceid/didkit/tree/main/lib/web)
- [WASM-node](https://github.com/spruceid/didkit/tree/main/lib/node)
