---
id: C
title: C & Android
---

## At a Glance

- Of all the interfaces DIDKit exposes, the C library is closest to the Rust original.  
- For a quick function & type reference, you can study the [test.c file](https://github.com/spruceid/didkit/lib/c/test.c). 
- A C header file can be built, but it resides in a separate crate that must be compiled separately after building DIDKit. Instructions can be found [here](https://github.com/spruceid/didkit/lib/cbindings/README.md)
- All the low-level calls that DIDKit exposes for C are documented in the [C-module section](https://rust.didkit.dev/didkit/c/index.html) of the [Rust documentation](https://rust.didkit.dev/didkit). 
- To build manually and just for Android, building from the C wrapper is faster and simpler than going through Flutter; for instructions, see the Android section below.


## Installation

Install Rust and DIDKit [as usual](didkit/install#manual) and then: 

### Build

```sh
# from DIDKit root directory:
$ make -C lib ../target/release/libdidkit.so
```

### Test

```sh
# from DIDKit root directory:
$ make -C lib ../target/test/c.stamp
```

More detailed C tests can be found in the [C
library](https://github.com/spruceid/didkit/blob/main/lib/c/test.c) of the
DIDKit repository on GitHub. This doubles as a comprehensive code snippet
demonstrating key calls and responses in C.

## Android

DIDKit can be exposed to Android projects using the [Android Library (AAR file)][AAR]. This AAR file includes Java class files using [JNI][], and binary shared libraries for Android's supported architectures (x86, armeabi-v7a, arm64-v8a, x86\_64). The AAR can be added to existing Android projects using Android Studio or Gradle.

### Requirements

Android SDK and NDK for Linux x86\_64. The Android SDK is expected to be installed at `~/Android/Sdk`. If it is somewhere else instead, you can specify it with a Make variable, e.g. `make ANDROID_SDK_ROOT=/other/location/android-sdk`. 

Rust Android targets are also required. To install those with `rustup`, run:
```sh
//from root directory of didkit project
$ make -C lib install-rustup-android
```

### Build

```sh
//from root directory of didkit project
$ make -C lib ../target/test/aar.stamp
```

#### Make variables

- `ANDROID_SDK_ROOT` - path to Android SDK. Default: `~/Android/Sdk`
- `ANDROID_TOOLS` - Android tools directory. Default is to pick one matching `$(ANDROID_SDK_ROOT)/build-tools/*`.
- `ANDROID_NDK_HOME` - Android NDK directory. Default is `$(ANDROID_SDK_ROOT)/ndk-bundle)` if exists, or one matching `$(ANDROID_SDK_ROOT)/ndk/*`.

[AAR]: https://developer.android.com/studio/projects/android-library.html#aar-contents
[JNI]: https://en.wikipedia.org/wiki/Java_Native_Interface

## Examples

|Tool|Example|
|---|---|
|C wrapper|[Test file](https://github.com/spruceid/didkit/blob/main/lib/c/test.c)|