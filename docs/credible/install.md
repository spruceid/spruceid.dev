---
id: install
title: Installation
---

## App stores

Links and qR codes for app stores coming soon (future releases).

## Manual Build (iOS or Android)
Regardless of target platform manual build of this project has the 
following dependencies:

* A nightly build of the rust compiler, most easily obtained using
  [rustup](https://www.rust-lang.org/tools/install). Once installed, 
  nightly can be enabled globally using:

```bash
$ rustup default nightly 
```

Or on a per-project level by running the following in the root of the 
targeted cargo project:

```bash
$ rustup override set nightly
```
* Java 7 or higher

* [Flutter](https://flutter.dev/docs/get-started/install) set to the 
  dev channel. This is done on *nix type systems after installation 
  by running:
```bash
$ flutter channel dev
$ flutter upgrade
```

This project also depends on two other Spruce projects:
[DIDKit](https://github.com/spruceid/didkit), which in turn depends on
[ssi](https://github.com/spruceid/ssi). The default assumption is that 
these three repos (`credible`, `didkit`, and `ssi`) are in the same
directory, though instructions for override are provided below.

### Android Specific Instructions: 
Android builds have the additional requirement of:

[Android Studio](https://developer.android.com/studio/install) which must be
installed, then opened for the first time to allow further dependencies to be
installed. Addiontally, requires the installation of Android NDK in Android 
Studio by going to Settings > Appearance & Behavior > System Settings > 
Android SDK. Select and install the NDK (Side by Side).

After that, the following will need to be run from the root of `didkit`:
(Note, this may take some time as it runs several builds for different targets)
```bash
$ export ANDROID_SDK_ROOT=/path/to/Android/sdk
$ make -C lib install-rustup-android
$ make -C lib ../target/test/java.stamp
$ make -C lib ../target/test/aar.stamp
$ make -C lib ../target/test/flutter.stamp
$ cargo build
```

### iOS Specific Instructions:
iOS builds have the additional requirement of cocoapods, which can 
be installed on MacOS using `brew`:
```bash
$ brew install cocoapods
```

If building for iOS, the following will need to be run from the root of `didkit`:
(Note, this may take some time as it runs several builds for different targets)
```bash
$ make -C lib install-rustup-ios 
$ make -C lib ../target/test/ios.stamp
$ cargo build
```

### Platform agnostic final steps:
Regardless of platform, run the following:
```bash
$ flutter doctor
```
If any issues are detected, please resolve them before proceeding.

If all of the Spruce dependencies are in the same directory, they will correctly
resolve using relative paths, and the next two steps can be skipped. Otherwise,
point `didkit` to `ssi` by editing the didkit/lib/Cargo.toml:

```toml
[dependencies]
ssi = { path = "path/to/ssi", default-features = false }
did-key = { path = "path/to/ssi/did-key" }
did-tezos = { path = "path/to/ssi/did-tezos" }
did-web = { path = "path/to/ssi/did-web", optional = true }
```

And point `Credible` to `didkit` in the credible/pubspec.yaml:

```yaml
dependencies:
  didkit:
    path: path/to/didkit/lib/flutter
```

Then, to build the flutter artifacts, run one of the following
commands from the root of the `credible` repository to either build
or run the app on an emulator/connected dev-device:

```bash
$ flutter build apk                     # Android APK
$ flutter build appbundle               # Android Appbundle
$ flutter build ios                     # iOS
$ flutter build ipa                     # iOS
$ flutter run  --no-sound-null-safety   # Run on emulator
```

If any errors are encountered, the first thing to try is running
```bash
$ flutter clean
```
From the root of `credible` then retrying the build or run.

## Setup & Testing

Coming soon.

## Seed Recovery

Coming soon.