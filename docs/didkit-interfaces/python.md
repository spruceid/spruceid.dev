---
id: python
title: Python
hide_title: true
sidebar_label: Python
---

# Installation

Make sure you have the latest versions of pip and PyPA’s build installed:

```bash
sudo apt install -y python3-pip python3-virtualenv
python3 -m pip install --upgrade pip build
```

Build DIDKit (latest release):
```bash
cargo build --release
```

Build the package
```bash
python3 -m build
```

Install the package using the provided [**setup.cfg file**](https://github.com/spruceid/didkit/blob/main/lib/python/setup.cfg):
```bash
python3 -m pip install dist/didkit-`cat setup.cfg | grep version | cut -d' ' -f3`-*.whl
```

# Syntax

To use DIDKit in Python, import the didkit library and manipulate the `didkit`
object as you would any other.  It contains all the same methods and properties
as the didkit object in Rust, so you can refer to the [Rust
docs](https://rust.didkit.dev/didkit/) for an overview of the core structure of
DIDKit as a library.  

The method `issueCredential`, for example, takes all the properties you would
expect, as strings (mind the escape quotes!) and returns a credential as a JSON
object that the user then `.dumps` or `.loads`. See this example from the [Python-Flask example
project](https://github.com/spruceid/didkit/blob/main/examples/python-flask/issue_credential.py#L43-L47):

```python
    credential = didkit.issueCredential(
        credential.__str__().replace("'", '"'),
        didkit_options.__str__().replace("'", '"'),
        key)
    return json.loads(credential)
```

## Examples

|Tool|Example|
|---|---|
|DIDKit-Python, [Django web framework](https://www.djangoproject.com/)|[example in GitHub](https://github.com/spruceid/didkit/tree/main/examples/python_django)|
|DIDKit-Python, [Flask web microframework](https://flask.palletsprojects.com/en/2.0.x/)|[example in GitHub](https://github.com/spruceid/didkit/tree/main/examples/python-flask/)|