---
id: install
title: Installation
---

## App stores

Links and qR codes for app stores coming soon (future releases).

## Manual Assembly (Android)

A manual build of this project has the following dependencies:

* A nightly build of the rust compiler, most easily obtained using
  [rustup](https://www.rust-lang.org/tools/install). Once installed, nightly can
  be enabled globally using:

```bash
$ rustup default nightly 
```

Or on a per-project level by running the following in the root of the targeted
cargo project:

```bash
$ rustup override set nightly
```

* Java 7 or higher

* [Flutter](https://flutter.dev/docs/get-started/install) set to the dev channel. 
  This is done on *nix type systems after installation by running:

```bash
$ flutter channel dev
$ flutter upgrade
```

* [Android Studio](https://developer.android.com/studio/install) which must be
  installed, then opened for the first time to allow further dependencies to be
  installed.

This project also depends on two other Spruce projects:
[DIDKit](https://github.com/spruceid/didkit), which in turn depends on
[ssi](https://github.com/spruceid/ssi).

For now it's required to build DIDKit on the side before building this project.
For more detailed instructions on how to set it up, please see the [DIDKit
Installation Manual Installation](/docs/didkit/install#manual) and the [DIDKit
Android Bindings](/docs/didkit/ffis#android) Sections.

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
commands from the root of this repository:

```bash
$ flutter build apk             # Android APK
$ flutter build appbundle       # Android Appbundle
```

Then [Android Studio](https://developer.android.com/studio/run/emulator) can be
used to run the built application.

Alternatively, the command

```bash
$ flutter run
```

Will work as well with a running emulator.

## Setup & Testing

Coming soon.

## Seed Recovery

Coming soon.