---
id: install
title: Installation
---

## App stores

Links and qR codes for app stores coming soon (future releases).

## Manual Build (iOS or Android)
Regardless of target platform manual build of this project has the 
following dependencies:


* Two other Spruce projects, `didkit` and `ssi`.
  [DIDKit](https://github.com/spruceid/didkit) depends on
  [ssi](https://github.com/spruceid/ssi), so clone and build install the latter
  first. To work with build scripts depending on relative paths, created a
  directory named something like `spruceid` and clone `credible`, `didkit`, and
  `ssi` next to eachother. thereafter, work from the `credible` directory.

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

Then, to build the flutter artifacts, run one of the following
commands from the root of the `credible` repository to either build
or run the app on an emulator/connected dev-device:

```bash
$ flutter build apk --no-sound-null-safety                            # Android APK
$ flutter build appbundle --no-sound-null-safety                      # Android Appbundle
$ flutter build ios --no-sound-null-safety --no-codesign --simulator  # iOS for simulator
$ flutter run  --no-sound-null-safety                                 # Run on emulator
```

(NOTE: While our implmentation does not require `--no-sound-null-safely` flag, some 
dependencies currently do not)

If any errors are encountered, the first thing to try is running
```bash
$ flutter clean
```
From the root of `credible` then retrying the build or run.

## Setup & Testing

Coming soon.

## Seed Recovery

Coming soon.