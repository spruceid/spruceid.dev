---
id: intro
title: Introduction to DIDKit
sidebar_label: Introduction
slug: /didkit/
---

DIDKit is a lightweight set of libraries containing a command-line interface and an HTTP interface. Both interfaces expose the core Verifiable Credential functionality of Spruce’s core “ssi” library. This means that shell scripts, sysadmins, cross-application automations, and even web servers can log events, store data, and communicate between themselves in signed and verifiable W3C-compliant JSON-LD credentials rather than simple clear-text JSON objects.

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