---
id: rust
title: Rust Crate
sidebar_label: Rust Crate
---

## At a Glance

- Our core libraries are built in [Rust](#Why-Rust) and we are active members of the growing Rust community.
- Our code comments inside the core libraries auto-generate an authoritative and
  comprehensive [**Rust Documentation site**](https://rust.didkit.dev/) at each
  versioned release through the [crates.io](https://crates.io) package manager. 
- Installation via the [crates.io](https://crates.io) package manager is the easiest way to get started.
- Instructions for building manually can be found on the main [Installation page](/docs/didkit/install)

# Why Rust 

Spruce is very proud to have built these core products to date using
the Rust language, which offers a secure, performant, and memory-safe
alternative to the dominant web development languages of today. 

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