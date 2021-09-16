---
id: java
title: Java & Android
sidebar_title: JVM
---

[path-packages]: https://dart.dev/tools/pub/dependencies#path-packages
[packages-plugins]: https://flutter.dev/developing-packages/
[JAR]: https://en.wikipedia.org/wiki/JAR_(file_format)
[JNI]: https://en.wikipedia.org/wiki/Java_Native_Interface

Both Java and Android developers access DIDKit through the Java bindings.

## At a Glance

- DIDKit exposes a straightforward set of Java bindings, using the Java Native Interface ([JNI][]).  
- The [JAR][] file includes all of DIDKit's Java class files. To use this in an
  application, you must also include the shared library (`libdidkit.so`) in your
  application in the Java library path
- For a quick function & type reference, you can study the [DIDKitTest.java
  file](https://github.com/spruceid/didkit/lib/java/test/com/spruceid/DIDKitTest.java). 
- All the low-level calls that the Rust library exposes to JNI are documented in the
  [JNI section](https://rust.didkit.dev/didkit/jni/index.html) of the [Rust
  documentation](https://rust.didkit.dev/didkit). 


## Installation

Install Rust and DIDKit [as usual](/docs/didkit/install/#manual) and then: 

### Build

Run:
```sh
# from DIDKit root directory:
$ make -C lib ../target/didkit.jar
```

To build the shared library for your current platform/architecture:
```sh
# from DIDKit root directory:
$ make -C lib ../target/release/libdidkit.so
```

### Test

```sh
# from DIDKit root directory:
$ make -C lib ../target/tests/java.stamp
```

### + Android

For Android, build the separate [Android library (AAR file)](#android) which includes the Java class files and shared libraries for all Android targets.

## Android

[Android Library (AAR file)][AAR] for DIDKit. The AAR file includes Java class files using [JNI][], and binary shared libraries for Android's supported architectures (x86, armeabi-v7a, arm64-v8a, x86\_64). The AAR can be added to existing Android projects using Android Studio or Gradle.

### Requires

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
|Authentication, Tomcat, CHAPI|[Github](https://github.com/spruceid/didkit/examples/java-jsp/readme.md)|
|Authentication, Maven, MySQL, Redis|[Github](https://github.com/spruceid/didkit/examples/java-springboot/readme.md)|