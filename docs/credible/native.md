---
id: native
title: Native Software Development Kit
sidebar_label: Native SDK
---
[install_android_dependencies.sh]: https://github.com/spruceid/credible/blob/main/install_android_dependencies.sh

## Context

Mobile development is mainly separated into two models, native and cross
platform. Native mobile applications are generally built using Kotlin/Java on
Android and Swift/Objective-C on iOS. And for cross platform development, there
are Flutter and React Native as the leaders of this model. Spruce's primary
development pattern has been to architect Credible as a Flutter application that
integrates DIDKit as a C library through the Dart FFI. When a client wants to
integrate Credible into their own application, the easiest way to do so is if
the client’s relying application is itself also built in Flutter.

It is also possible, however, to decouple a Credible SDK from the Credible
application and distribute it for use in native-only development. A developer
that already has a native solution and wants to integrate Credible's lower-level
libraries would be averse to taking on a dependency to the entire Flutter SDK
just for what might otherwise be a much smaller native library used only to
handle the Verifiable-Credential specific cryptography and other mechanics. 

For this development context, our native SDK is made by re-implementing sections
of the Credible codebase in Swift for native iOS development and Kotlin for
native Android development. As this development tooling is still under
development, these have to be built from source for now, and instructions for
doing so can be found in the repos (see below). At a later stage of maturity, we
expect to distribute binaries through the respective package managers.

![diagram of native versus cross-platform development dependencies](/assets/credible_native_sdk.png)

## Installation

Swift developers can find instructions for building DIDKit as a Swift dependency in the [/lib/ios folder of the didkit repo](https://github.com/spruceid/didkit/tree/main/lib/ios#didkit-swift-wrapper).

Kotlin developers can find a DIDKit package for maven in the [packages section of the didkit repo](https://github.com/spruceid/didkit/packages/924246).

## References

For reference documentation on how to interact with a C library from Kotlin FFI,
see [this section](https://kotlinlang.org/docs/native-c-interop.html) of the
official Kotlin documentation. For the equivalent in Swift, see [this
section](https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis/using_imported_c_functions_in_swift)
of the official Swift documentation.