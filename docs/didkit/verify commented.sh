#!/bin/sh

# Exit if any command in this script fails.
set -e

if [ ! -e key.jwk ]; then
	echo 'Missing keypair.' >&2
	exit 1
fi

issuer_vm=$(didkit key-to-verification-method -k key.jwk)
printf 'Issuer verification method: %s\n' "$issuer_vm"

verify_credential() {
	if ! out=$(didkit vc-verify-credential \
		-v "$issuer_vm" \
		-p assertionMethod)
	then
		printf "verify failed: %s" "$out" >&2
		return 1
	fi
}

creds_file=creds
printf 'Reading from file "%s"\n' "$creds_file"

i=1
jq -c . "$creds_file" | while read line; do
	printf '\rVerifying credentials... %d' $i
	printf "%s" "$line" | verify_credential 
	: $((i = i+1))
done
printf '\nDone\n'
