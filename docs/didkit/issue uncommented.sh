#!/bin/sh

# Exit if any command in this script fails.
set -e

if [ -e key.jwk ]; then
	echo 'Using existing keypair.'
else
	didkit generate-ed25519-key > key.jwk
	echo 'Generated keypair.'
fi
issuer=$(didkit key-to-did-key -k key.jwk)
printf 'Issuer DID: %s\n' "$issuer"
issuer_vm=$(didkit key-to-verification-method -k key.jwk)
printf 'Issuer verification method: %s\n' "$issuer_vm"

# Generate a new dummy credential
generate_credential() {
	didkit vc-issue-credential \
		-k key.jwk \
		-v "$issuer_vm" \
		-p assertionMethod <<-EOF
	{
		"@context": "https://www.w3.org/2018/credentials/v1",
		"id": "uuid:$(uuidgen)",
		"type": ["VerifiableCredential"],
		"issuer": "$issuer",
		"issuanceDate": "$(date -u +'%FT%TZ')",
		"credentialSubject": {
			"id": "uuid:$(uuidgen)"
		}
	}
	EOF
}

# Generate a bunch of verifiable credentials
creds_file=creds
printf 'Writing to file "%s"\n' "$creds_file"
touch "$creds_file"

i=1
count=100
while [ $i -le $count ]; do
	printf '\rGenerating credentials... %d/%d' $i $count >&2
	generate_credential
	: $((i = i+1))
done > "$creds_file"
printf '\nDone\n'
