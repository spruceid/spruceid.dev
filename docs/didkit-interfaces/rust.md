---
id: rust
title: Rust Crate
hide_title: true
sidebar_label: Rust Crate
---

# Why Rust 

Spruce is very proud to have built these core products to date using
the Rust language, which offers a secure, performant, and memory-safe
alternative to the dominant web development languages of today. 

If you are planning to interact with DIDKit directly in Rust from a broader Rust
project, you may find useful to go directly to our separate [**Rust
Documentation**](https://rust.didkit.dev/), which is updated at each versioned
release through the [crates.io](https://crates.io) package manager. 

## Crates.io

DIDKit can also be downloaded & updated from crates.io, Rust's native package
manager, from inside of other Rust projects. DIDKit (and its underlying ssi
crate) can be called as *library* dependencies inside of a Rust environment, but
they are not targets in crates.io, (and thus, cannot be installed by a simple
`cargo install` call).

Note that many of the DIDKit functions and traits in turn call functions and
traits in [ssi](https://rust.didkit.dev/ssi/), a separate package/crate on which
it depends.  Similarly, each DID method that you want a given DID Kit instance
to implement is also distinct library (rather than simply a trait), so
constraining a specific instance of DIDKit to a specific subset of available DID
Methods is best achieved by modifying the `[dependencies]` section of the
`/lib/Cargo.toml` file.