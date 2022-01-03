---
id: install
title: Installation
---

[Rust]: https://www.rust-lang.org/
[rustup]: https://rustup.rs/
[Cargo]: https://doc.rust-lang.org/cargo/
[ssi]: https://github.com/spruceid/ssi
[installing-rust]: https://rust-lang.github.io/rustup/installation/index.html



DIDKit can be installed as a package via [cargo](#cargo-install),
[manually](#manual) from source, or in [containerized](#container) form.

## Cargo install

1. To install the DIDKit command line program on GNU/Linux, MacOS, or
   Windows+WSL, first install
   [cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html). 
2. Install `libssl-dev`, as well as `pkg-config`,`build-essential`, or 
   equivalent core toolsets if they aren't already installed. 
3. Then simply run `cargo install` for the given target package: 
`didkit-cli | didkit-http`.  
For example, for DIDKit CLI, run:

```
cargo install didkit-cli
```

This will add the binary didkit to your Cargo installation (typically
~/.cargo/bin), which can be added to your system's PATH for ease of use.


## Manual

DIDKit is written in [Rust][]. To get Rust, you can use [Rustup][].

We do not depend on any Rust nightly features, so our installation instructions
assume `stable` versions; be sure to [switch the installation
defaults][installing-rust] to `nightly` if the calling application or forked
source-code does depend on them.

Spruce's [ssi][] library must be cloned alongside the `didkit` repository in a
parallel directory between downloading didkit and building it.

```sh
mkdir didkit
git clone https://github.com/spruceid/didkit && cd didkit
git clone https://github.com/spruceid/ssi ../ssi --recurse-submodules
```

Build DIDKit using [Cargo][], from root directory of DIDKit project:

```sh
cargo build
```

This will give you the DIDKit CLI and HTTP server executables located at
`target/debug/didkit` and `target/debug/didkit-http`, respectively. You can also
build and install DIDKit's components separately. Building the FFI libraries
will require additional dependencies. See the corresponding readmes linked below
for more info.

## Container

Both the CLI and HTTP server are containerised and available under
`ghcr.io/spruceid/didkit-(cli|http)`.

The image is private for now, so a [Personal Access
Token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)
is required. Once created you can login like so:
```bash
$ docker login ghcr.io -u USERNAME --password-stdin
```

You can use the images like CLIs:
```bash
$ docker run ghcr.io/spruceid/didkit-cli:latest --help
$ docker run --init -p 8080 ghcr.io/spruceid/didkit-http:latest --port 8080
```

> Note: You can pass JWKs either by sharing a volume with `docker run --volume`,
> or by passing the JWK directly with `docker run -e JWK=$MY_JWK` or `docker run
> didkit-http --jwk $MY_JWK`.

### Build Images

The Dockerfiles rely on having [ssi][] in the root of `didkit` (a symbolic link
will not work, unfortunately).

Then the images can be built with:
```bash
$ docker build -f Dockerfile-cli . -t didkit-cli
$ docker build -f Dockerfile-http . -t didkit-http
```

And to use them, replace `ghcr.io/spruceid/didkit-(cli|http):latest` with
`didkit-(cli|http)`.

### Building Interfaces

While many of the DIDKit interfaces can be installed as libraries via each
language's dedicated package manager, they can also be built manually.  For
instructions, see the "Installation" section of each interface's dedicated page
in the section to the left.
