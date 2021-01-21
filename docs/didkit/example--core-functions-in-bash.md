---
id: script1
title: Bash Script - Core Functions
---

### Introduction

This is an example shell script using all the core functions of DIDKit-CLI: key generation, credential/presentation issuance and verification.

```bash
#!/bin/sh

# Exit if any command in the script fails.
set -e

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

```
### This script is meant to be in a DIDKit-CLI source directory
```bash
cd "$(dirname "$0")"

# Build the didkit CLI program
cargo build -p didkit-cli

# Adjust $PATH to include the didkit executable.
export PATH=$PWD/../../target/debug:$PATH

```

### Start with a keypair
DIDKit can generate a unique ed25119 keypair from entropy. Alternately, you can provide a static key locally.

```bash
if [ -e key.jwk ]; then
	echo 'Using existing keypair.'
else
	didkit generate-ed25519-key > key.jwk
	echo 'Generated keypair.'
fi

echo
```
### Generate a DID:Key document 
This document gets wrapped around the keypair generated (or passed) in the previous step. For more context on the DID:key method, see the [specification](https://w3c-ccg.github.io/did-method-key/).

```bash
did=$(didkit key-to-did-key -k key.jwk)
printf 'DID: %s\n\n' "$did"
```

### Define verificationMethod for keypair.
This is used to identify the key in linked data proofs. Verifiers of such proofs query a DID found in a credential based on what [registered] proof type (i.e., what kind of signatures) it needs key material to verify.

```bash
verification_method=$(didkit key-to-verification-method -k key.jwk)
printf 'verificationMethod: %s\n\n' "$verification_method"
```

### Prepare credential for issuing.
In this example credential, the issuance date, id, and credential subject id are arbitrary, but in real-world usage these are diverse and critical properties. For more info about what these properties mean, see the Verifiable Credentials Data Model [specification](https://w3c.github.io/vc-data-model/)

```bash
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
```

### Issue the verifiable credential.
1. Ask didkit to issue a verifiable credential using the given keypair file, verification method, and proof purpose, passing the unsigned credential on standard input. 
2. DIDKit creates a linked data proof to add to the credential, and outputs the resulting newly-issued verifiable credential on standard output, which we save to a file.

```bash
didkit vc-issue-credential \
	-k key.jwk \
	-v "$verification_method" \
	-p assertionMethod \
	< credential-unsigned.jsonld \
	> credential-signed.jsonld
echo 'Issued verifiable credential:'
print_json credential-signed.jsonld
echo
```

### Verify a verifiable credential.
* We pass the newly-issued verifiable credential back to didkit for verification using the given verification method and proof purpose. 
* DIDKit outputs the verification result as JSON. 
* If verification is successful, the command completes successfully (returns exit code 0).

```bash
if ! didkit vc-verify-credential \
	-v "$verification_method" \
	-p assertionMethod \
	< credential-signed.jsonld \
	> credential-verify-result.json
then
	echo 'Unable to verify credential:'
	print_json credential-verify-result.json
	exit 1
fi
echo 'Verified verifiable credential:'
print_json credential-verify-result.json
echo
```

### Create presentation embedding verifiable credential.
* Prepare to present the verifiable credential by wrapping it in a Verifiable Presentation. 
* The id here is an arbitrary URL for example purposes; VPs are often but not always uniquely identified, whether by identifiers, URLs, or URIs.

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
* Pass the unsigned verifiable presentation to DIDKit to be issued as a verifiable presentation. * DIDKit signs the presentation with a linked data proof, using the given keypair, verification method and proof type. 
* We save the resulting newly created verifiable presentation to a file.

:::note 
In most use-cases, the `holder` field contains a DID or other identifier verifiably linked to the key material signing the presentation, which has some relationship to the credential(s) being presented. The classic example is a fresh and interactive proof of being the [human] subject identified by a credential, but there are many VP use-cases as well.  This may be a manual, consented, unique and interactive identity assurance operation, but it can also be an assurance of the identity of a machine or a legal entity, operated by an API call or an automation carried out by a fiduciary/trusted piece of software, etc.

In these cases, the JWK would be different from that used to sign the credentials with key material verifiably linked to their issuing entity.
:::

```bash
didkit vc-issue-presentation \
	-k key.jwk \
	-v "$verification_method" \
	-p authentication \
	< presentation-unsigned.jsonld \
	> presentation-signed.jsonld
echo 'Issued verifiable presentation:'
print_json presentation-signed.jsonld
echo
```

### Verify verifiable presentation.
* Pass the verifiable presentation back to didkit for verification.
* Examine the verification result JSON.

```bash
if ! didkit vc-verify-presentation \
	-v "$verification_method" \
	-p authentication \
	< presentation-signed.jsonld \
	> presentation-verify-result.json
then
	echo 'Unable to verify presentation:'
	print_json presentation-verify-result.json
	exit 1
fi
echo 'Verified verifiable presentation:'
print_json presentation-verify-result.json
echo

echo Done
````

### Appendix: whole script without comments

Also available on Github as
[/cli/tests/example.sh](https://github.com/spruceid/didkit/blob/main/cli/tests/example.sh)

```bash
#!/bin/sh
# This is an example shell script using DIDKit for key generation,
# credential/presentation issuance and verification.

set -e

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

cd "$(dirname "$0")"

cargo build -p didkit-cli

export PATH=$PWD/../../target/debug:$PATH

if [ -e key.jwk ]; then
	echo 'Using existing keypair.'
else
	didkit generate-ed25519-key > key.jwk
	echo 'Generated keypair.'
fi
echo

did=$(didkit key-to-did-key -k key.jwk)
printf 'DID: %s\n\n' "$did"

verification_method=$(didkit key-to-verification-method -k key.jwk)
printf 'verificationMethod: %s\n\n' "$verification_method"

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

didkit vc-issue-credential \
	-k key.jwk \
	-v "$verification_method" \
	-p assertionMethod \
	< credential-unsigned.jsonld \
	> credential-signed.jsonld
echo 'Issued verifiable credential:'
print_json credential-signed.jsonld
echo

if ! didkit vc-verify-credential \
	-v "$verification_method" \
	-p assertionMethod \
	< credential-signed.jsonld \
	> credential-verify-result.json
then
	echo 'Unable to verify credential:'
	print_json credential-verify-result.json
	exit 1
fi
echo 'Verified verifiable credential:'
print_json credential-verify-result.json
echo

cat > presentation-unsigned.jsonld <<EOF
{
	"@context": ["https://www.w3.org/2018/credentials/v1"],
	"id": "http://example.org/presentations/3731",
	"type": ["VerifiablePresentation"],
	"holder": "$did",
	"verifiableCredential": $(cat credential-signed.jsonld)
}
EOF

didkit vc-issue-presentation \
	-k key.jwk \
	-v "$verification_method" \
	-p authentication \
	< presentation-unsigned.jsonld \
	> presentation-signed.jsonld
echo 'Issued verifiable presentation:'
print_json presentation-signed.jsonld
echo

if ! didkit vc-verify-presentation \
	-v "$verification_method" \
	-p authentication \
	< presentation-signed.jsonld \
	> presentation-verify-result.json
then
	echo 'Unable to verify presentation:'
	print_json presentation-verify-result.json
	exit 1
fi
echo 'Verified verifiable presentation:'
print_json presentation-verify-result.json
echo

echo Done
```