---
id: runtime-config
title: Runtime Configuration
---

## Introduction

For major re-configurations or variations from the default behavior of DIDKit,
modifying the code and compiling your own binaries is required.  For a short but
growing list of minor options, however, run-time configuration of DIDKit
behavior and security policies is possible. Feel free to open issues on DIDKit's
[github repo](https://github.com/spruceid/didkit/issues/) if you are
experimenting with DIDKit and have pain-points that would be served by
additional runtime configuration options.

## Network configuration

For all network requests, DIDKit relies on the upstream
[`reqwest`](https://docs.rs/reqwest/0.11.6/reqwest/) library. `reqwest` checks
the environmental variables in DIDKit's environment for the variables
`HTTP_PROXY` and `HTTPS_PROXY` to route http and
https trafffic respectively.  If you have set up such a proxy, including a
reverse proxy or SOCKS service, you can set the appropriate environmental
variable(s) and assume `reqwest` will route appropriately. Note: this proxying
is unavailable in the npm package `didkit-wasm` to date. 

For more information about how `reqwest` handles proxies, see the [proxies
section](https://docs.rs/reqwest/0.11.6/reqwest/#proxies) of the `reqwest` docs
on docs.rs, the Rust ecosystem documentation repository.