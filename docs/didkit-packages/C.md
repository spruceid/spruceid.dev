---
id: C
sidebar_title: C
title: C Interface
---

## At a Glance

- Of all the interfaces DIDKit exposes, the C library is closest to the Rust original.  
- For a quick function & type reference, you can study the [test.c file](https://github.com/spruceid/didkit/lib/c/test.c). 
- A C header file can be built, but it resides in a separate crate that must be compiled separately after building DIDKit. Instructions can be found [here](https://github.com/spruceid/didkit/lib/cbindings/README.md)
- All the low-level calls that DIDKit exposes for C are documented in the [C-module section](https://rust.didkit.dev/didkit/c/index.html) of the [Rust documentation](https://rust.didkit.dev/didkit). 
- To build manually and just for Android, building from the C wrapper is faster and simpler than going through Flutter; for instructions, see the Android section below.


## Installation

Install Rust and DIDKit [as usual](/docs/didkit/install/#manual) and then: 

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

## Examples

|Tool|Example|
|---|---|
|C wrapper|[Test file](https://github.com/spruceid/didkit/blob/main/lib/c/test.c)|