---
id: python
title: Python
sidebar_label: Python
---

[![PyPI version](https://badge.fury.io/py/didkit.svg)](https://badge.fury.io/py/didkit)

## Installation

DIDKit is available [on PyPI](https://pypi.org/project/didkit/).

> `asyncio` is required, meaning you will need Python 3.7 or above.

You can install it globally with:
```bash
pip install -U didkit
```

For further information you may refer to the [repository](https://github.com/spruceid/didkit-python).

## Syntax

To use DIDKit in Python, import the `didkit` library and manipulate the `didkit`
module as you would any other.  It contains all the same functions as the other
bindings, so you can refer to the [Rust docs](https://rust.didkit.dev/didkit/)
for an overview of the core structure of DIDKit as a library.

The method `issueCredential`, for example, takes all the properties you would
expect, as JSON strings and returns a credential as a JSON string that the user
then `.loads` to access individual fields. See the following example.

```python
import asyncio
import didkit
import json

jwk = didkit.generate_ed25519_key()
did = didkit.key_to_did("key", jwk)
credential = {
    "@context": "https://www.w3.org/2018/credentials/v1",
    "id": "http://example.org/credentials/3731",
    "type": ["VerifiableCredential"],
    "issuer": did,
    "issuanceDate": "2020-08-19T21:41:50Z",
    "credentialSubject": {
        "id": "did:example:d23dd687a7dc6787646f2eb98d0",
    },
}

async def main():
    signed_credential = await didkit.issue_credential(
        json.dumps(credential),
        json.dumps({}),
        jwk)
    print(json.loads(signed_credential))

asyncio.run(main())
```

## Examples

|Framework|Example|
|---|---|
|`pytest`|[On Github](https://github.com/spruceid/didkit-python/tree/main/pydidkit_tests)|
|[Django web framework](https://www.djangoproject.com/)|[example in GitHub](https://github.com/spruceid/didkit/tree/main/examples/python_django)|
|[Flask web microframework](https://flask.palletsprojects.com/en/2.0.x/)|[example in GitHub](https://github.com/spruceid/didkit/tree/main/examples/python-flask/)|

## Migration

### 0.2 to 0.3
Functions have kept the same signatures, but some have become asynchronous. You
will need to start using
[`asyncio`](https://docs.python.org/3/library/asyncio.html) if it is not already
the case.