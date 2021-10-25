---
id: runtime-config
title: Runtime Configuration
---

## Introduction

Balancing flexibility against security can be difficult, and so far in DIDKit's
design process we have erred on the side of build-time configurability.  That
said, there are a few points at which runtime configuration is possible, and
more are coming soon. Feel free to open issues on DIDKit's [github
repo](https://github.com/spruceid/didkit/issues/) if you are experimenting with
DIDKit and have pain-points that would be served by runtime configuration
variables or objects.

## Network configuration

For all outbound HTTP requests, DIDKit relies on the upstream
[`reqwest`](https://docs.rs/reqwest/0.11.6/reqwest/) library. `reqwest` checks
the environmental variables in DIDKit's environment for the variables
`HTTP_PROXY`/`http_proxy` and `HTTPS_PROXY`/`https_proxy` to route http and
https traffic respectively. If you have set up such a proxy, including a
reverse proxy or SOCKS service, you can set the appropriate environmental
variable(s) and assume `reqwest` will route appropriately.  

For more
information about how `reqwest` handles proxies, see the [proxies
section](https://docs.rs/reqwest/0.11.6/reqwest/#proxies) of the `reqwest` docs
on docs.rs, the Rust ecosystem documentation repository.