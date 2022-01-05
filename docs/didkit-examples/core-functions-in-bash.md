---
id: core-functions-in-bash
title: Core Functions (CLI)
---

## Introduction

This is an example shell script using all the core functions of DIDKit-CLI: key
generation, credential/presentation issuance and verification.

### Setup

_Note: This script is meant to be run in the directory where DIDKit-CLI is
built, regardless of installation method. See the complete script below for
setup details._

1. These instructions assume Ubuntu, and have been tested on Linux, MacOS, and
   WSL2.
1. See DIDKit installation page instructions for dependencies and install options.
1. `jq` is recommended but not required for testing purposes. It can be
   installed by running the command `sudo apt-get install jq`.

### Start with a keypair

DIDKit can generate a unique ed25119 keypair from entropy. Alternately, you can
provide a static key locally.

```bash
if [ -e issuer_key.jwk ]; then
	echo 'Using existing keypair.'
else
	didkit generate-ed25519-key > issuer_key.jwk
	echo 'Generated keypair.'
fi

echo
```

### Generate a DID:Key document

This document gets wrapped around the keypair generated (or passed) in the
previous step. For more context on the DID:key method, see the
[specification](https://w3c-ccg.github.io/did-method-key/). For more info on the
parameters and flags for the `key-to-did` function, run `didkit help
key-to-did`.

```bash
did=$(didkit key-to-did key -k issuer_key.jwk)
printf 'DID: %s\n\n' "$did"
```

### Define verificationMethod for keypair.

This is used to identify the key in linked data proofs. Verifiers of such proofs
query a DID found in a credential based on what [registered] proof type (i.e.,
what kind of signatures) it needs key material to verify.

```bash
issuer_verification_method=$(didkit key-to-verification-method key -k issuer_key.jwk)
printf 'verificationMethod: %s\n\n' "$issuer_verification_method"
```

### Prepare credential for issuing.

Here, we'll issue an example credential (unsigned) and save it to a file. In
this credential, the issuance date, id, and credential subject id are arbitrary,
but in real-world usage these are diverse and critical properties. For more info
about what these properties mean, see the Verifiable Credentials Data Model
[specification](https://w3c.github.io/vc-data-model/).  Note that SUBJECTDID and
ISSUERDID fields need to be URIs, so if you are using non-DID identifiers such
as certificates or UUIDs, they need to be prefixed with the approriate [URN
prefix](https://www.iana.org/assignments/urn-namespaces/urn-namespaces.xhtml),
i.e., "urn:uuid:", etc.

```bash
SUBJECTDID='did:example:d23dd687a7dc6787646f2eb98d0'
ISSUERDID=$did
DATE=`date --utc +%FT%TZ`
CREDID="urn:uuid:"`uuidgen`

cat > credential-unsigned.jsonld <<EOF
{
	"@context": "https://www.w3.org/2018/credentials/v1",
	"id": "$CREDID",
	"type": ["VerifiableCredential"],
	"issuer": "$ISSUERDID",
	"issuanceDate": "$DATE",
	"credentialSubject": {
		"id": "$SUBJECTDID"
	}
}
EOF
```

### Issue the verifiable credential.

- We ask DIDKit to issue a verifiable credential using the given keypair file, verification method, and proof purpose, passing the unsigned credential on standard input.

- DIDKit creates a linked data proof to add to the unsigned credential, and outputs the resulting newly-issued (signed) verifiable credential on standard output, which we save to a file.

```bash
didkit vc-issue-credential \
	-k issuer_key.jwk \
	-v "$issuer_verification_method" \
	-p assertionMethod \
	< credential-unsigned.jsonld \
	> credential-signed.jsonld
echo 'Issued verifiable credential:'
cat credential-signed.jsonld | jq .
```

### Verify a verifiable credential.

- We pass the newly-issued signed verifiable credential back to didkit for verification using the given verification method and proof purpose.

- DIDKit then outputs the verification result as JSON and saves it. If verification is successful, the command completes successfully (returns exit code 0).

```bash
if ! didkit vc-verify-credential \
	-v "$issuer_verification_method" \
	-p assertionMethod \
	< credential-signed.jsonld \
	> credential-verify-result.json
then
	echo 'Unable to verify credential:'
	print_json credential-verify-result.json
	exit 1
fi
echo 'Verified verifiable credential:'
cat credential-verify-result.json | jq .
```

### Create a verifiable presentation that embeds the verifiable credential.

- Prepare to present the verifiable credential by wrapping it in a verifiable presentation (VP).

- The id here is an arbitrary URL for example purposes; VPs are often but not always uniquely identified, whether by identifiers, URLs, or URIs.

```bash
cat > presentation-unsigned.jsonld <<EOF
{
	"@context": ["https://www.w3.org/2018/credentials/v1"],
	"id": "http://example.org/presentations/3731",
	"type": ["VerifiablePresentation"],
	"holder": "$did",
	"verifiableCredential": $(cat credential-signed.jsonld)
}
EOF
```

### Issue verifiable presentation.

- Pass the unsigned verifiable presentation to DIDKit to be issued as a verifiable presentation. \* DIDKit signs the presentation with a linked data proof, using the given keypair, verification method and proof type.
- We save the resulting newly created verifiable presentation to a file.

:::note
In most use-cases, the `holder` field contains a DID or other identifier verifiably linked to the key material signing the presentation, which has some relationship to the credential(s) being presented. The classic example is a fresh and interactive proof of being the [human] subject identified by a credential, but there are many VP use-cases as well. This may be a manual, consented, unique and interactive identity assurance operation, but it can also be an assurance of the identity of a machine or a legal entity, operated by an API call or an automation carried out by a fiduciary/trusted piece of software, etc.

In these examples, the keys representing the two parties are stored in expressive filenames, 'issuer_key' and 'holder_key'. There are, however, no differences between these keys, and the JWK filenames were chosen simply to clarify the example; there are no restrictions on them.
:::

```bash
didkit vc-issue-presentation \
	-k issuer_key.jwk \
	-v "$verification_method" \
	-p authentication \
	< presentation-unsigned.jsonld \
	> presentation-signed.jsonld
echo 'Issued verifiable presentation:'
cat presentation-signed.jsonld | jq .
```

### Verify the verifiable presentation.

- We pass the verifiable presentation we created back to DIDKit for verification, and save the results in a JSON.

```bash
if ! didkit vc-verify-presentation \
	-v "$issuer_verification_method" \
	-p authentication \
	< presentation-signed.jsonld \
	> presentation-verify-result.json
then
	echo 'Unable to verify presentation:'
	print_json presentation-verify-result.json
	exit 1
fi
echo 'Verified verifiable presentation:'
cat presentation-verify-result.json | jq .

echo Done
```

### Appendix: whole script without commentary

The following is a stand-alone version of all of the above, also available on
Github as
[/cli/tests/example.sh](https://github.com/spruceid/didkit/blob/main/cli/tests/example.sh)

```bash
#!/bin/sh
# This is an example shell script using DIDKit for key generation,
# credential/presentation issuance and verification.

# Exit if any command in the script fails.
set -e

# Allow issuing using a DID method other than did:key
did_method=${DID_METHOD:-key}
# More info about did:key: https://w3c-ccg.github.io/did-method-key/

# Allow setting proof format using environmental variables.
proof_format=${PROOF_FORMAT:-ldp}
vc_proof_format=${VC_PROOF_FORMAT:-$proof_format}
vp_proof_format=${VP_PROOF_FORMAT:-$proof_format}

# Pretty-print JSON using jq or json_pp if available.
print_json() {
	file=${1?file}
	if command -v jq >/dev/null 2>&1; then
		jq . "$file" || cat "$file"
	elif command -v json_pp >/dev/null 2>&1; then
		json_pp < "$file" || cat "$file"
	else
		cat "$file"
	fi
}

# Run the rest of this script in its source directory.
cd "$(dirname "$0")"

# Build the didkit CLI program
cargo build -p didkit-cli

# Adjust $PATH to include the didkit executable.
export PATH="$PWD/../../target/debug:$PATH"

# Create a ed25119 keypair if needed.
if [ -e key.jwk ]; then
	echo 'Using existing keypair.'
else
	didkit generate-ed25519-key > key.jwk
	echo 'Generated keypair.'
fi
echo

# Get the keypair's DID.
did=$(didkit key-to-did "$did_method" -k key.jwk)
printf 'DID: %s\n\n' "$did"

# Get verificationMethod for keypair.
# This is used to identify the key in linked data proofs.
verification_method=$(didkit key-to-verification-method "$did_method" -k key.jwk)
printf 'verificationMethod: %s\n\n' "$verification_method"

# Prepare credential for issuing.
# In this example credential, the issuance date, id, and credential subject id
# are arbitrary. For more info about what these properties mean, see the
# Verifiable Credentials Data Model: https://w3c.github.io/vc-data-model/
cat > credential-unsigned.jsonld <<EOF
{
	"@context": "https://www.w3.org/2018/credentials/v1",
	"id": "http://example.org/credentials/3731",
	"type": ["VerifiableCredential"],
	"issuer": "$did",
	"issuanceDate": "2020-08-19T21:41:50Z",
	"credentialSubject": {
		"id": "did:example:d23dd687a7dc6787646f2eb98d0"
	}
}
EOF

# Issue the verifiable credential.
# Ask didkit to issue a verifiable credential using the given keypair file,
# verification method, and proof purpose, passing the unsigned credential on
# standard input. DIDKit creates a linked data proof to add to the credential,
# and outputs the resulting newly-issued verifiable credential on standard
# output, which we save to a file.
didkit vc-issue-credential \
	-k key.jwk \
	-v "$verification_method" \
	-p assertionMethod \
	-f "$vc_proof_format" \
	< credential-unsigned.jsonld \
	> credential-signed
echo 'Issued verifiable credential:'
if [ "$vc_proof_format" = jwt ]; then
	cat credential-signed
else
	print_json credential-signed
fi
echo

# Verify verifiable credential.
# We pass the newly-issued verifiable credential back to didkit for
# verification using the given verification method and proof purpose. DIDKit
# outputs the verification result as JSON. If verification is successful, the
# command completes successfully (returns exit code 0).
if ! didkit vc-verify-credential \
	-v "$verification_method" \
	-p assertionMethod \
	-f "$vc_proof_format" \
	< credential-signed \
	> credential-verify-result.json
then
	echo 'Unable to verify credential:'
	print_json credential-verify-result.json
	exit 1
fi
echo 'Verified verifiable credential:'
print_json credential-verify-result.json
echo

# Encode credential as JSON for presenting.
if [ "$vc_proof_format" = jwt ]; then
	echo -n '"'
	cat credential-signed
	echo -n '"'
else
	cat credential-signed
fi > credential-signed.json

# Create presentation embedding verifiable credential.
# Prepare to present the verifiable credential by wrapping it in a
# Verifiable Presentation. The id here is an arbitrary URL for example purposes.
cat > presentation-unsigned.jsonld <<EOF
{
	"@context": ["https://www.w3.org/2018/credentials/v1"],
	"id": "http://example.org/presentations/3731",
	"type": ["VerifiablePresentation"],
	"holder": "$did",
	"verifiableCredential": $(cat credential-signed.json)
}
EOF

# Issue verifiable presentation.
# Pass the unsigned verifiable presentation to didkit to be issued as a
# verifiable presentation. DIDKit signs the presentation with a linked data
# proof, using the given keypair, verification method and proof type. We save
# the resulting newly created verifiable presentation to a file.
didkit vc-issue-presentation \
	-k key.jwk \
	-v "$verification_method" \
	-p authentication \
	-f "$vp_proof_format" \
	< presentation-unsigned.jsonld \
	> presentation-signed
echo 'Issued verifiable presentation:'
if [ "$vp_proof_format" = jwt ]; then
	cat presentation-signed
else
	print_json presentation-signed
fi
echo

# Verify verifiable presentation.
# Pass the verifiable presentation back to didkit for verification.
# Examine the verification result JSON.
if ! didkit vc-verify-presentation \
	-v "$verification_method" \
	-p authentication \
	-f "$vp_proof_format" \
	< presentation-signed \
	> presentation-verify-result.json
then
	echo 'Unable to verify presentation:'
	print_json presentation-verify-result.json
	exit 1
fi
echo 'Verified verifiable presentation:'
print_json presentation-verify-result.json
echo

# Resolve a DID.
if ! didkit did-resolve "$did" > did.json
then
	echo 'Unable to resolve DID.'
	exit 1
fi
echo 'Resolved DID to DID document:'
print_json did.json

# Dereference a DID URL
if ! didkit did-dereference "$verification_method" > vm.json
then
	echo 'Unable to dereference DID URL.'
	exit 1
fi
echo 'Dereferenced DID URL for verification method:'
print_json vm.json

# Authenticate with a DID
if ! challenge=$(awk 'BEGIN { srand(); print rand() }')
then
	echo 'Unable to create challenge.'
	exit 1
fi
if ! didkit did-auth \
	-k key.jwk \
	-h "$did" \
	-p authentication \
	-C "$challenge" \
	-v "$verification_method" \
	-f "$vp_proof_format" \
	> auth
then
	echo 'Unable to create DIDAuth response'
	exit 1
fi

echo 'Generated DIDAuth verifiable presentation:'
if [ "$vp_proof_format" = jwt ]; then
	cat auth
else
	print_json auth
fi
echo

# Verify DID auth
if ! didkit vc-verify-presentation \
	-p authentication \
	-C "$challenge" \
	-f "$vp_proof_format" \
	< auth \
	> auth-verify-result.json
then
	echo 'Unable to verify DIDAuth presentation:'
	print_json auth-verify-result.json
	exit 1
fi
echo 'Verified DIDAuth verifiable presentation:'
print_json auth-verify-result.json
echo

# Convert VP to Canonicalized RDF
if [ "$vp_proof_format" = ldp ]; then
	if ! didkit to-rdf-urdna2015 < auth > auth.nq
	then
		echo 'Unable to convert/canonicalize document:' >&2
		exit 1
	fi
	echo 'Converted verifiable presentation to canonicalized N-Quads:'
	cat auth.nq
fi
echo

echo Done
```
