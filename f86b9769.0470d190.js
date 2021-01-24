(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var i=t(3),a=t(7),r=(t(0),t(94)),o={id:"example--core-functions-in-bash",title:"Bash Script - Core Functions"},s={unversionedId:"didkit/example--core-functions-in-bash",id:"didkit/example--core-functions-in-bash",isDocsHomePage:!1,title:"Bash Script - Core Functions",description:"Introduction",source:"@site/docs/didkit/example--core-functions-in-bash.md",slug:"/didkit/example--core-functions-in-bash",permalink:"/docs/didkit/example--core-functions-in-bash",editUrl:"https://github.com/spruceid/docs/didkit/example--core-functions-in-bash.md",version:"current",sidebar:"docs",previous:{title:"Overview of Examples",permalink:"/docs/didkit/examples"},next:{title:"Bash Script - Batch Generation & Verification",permalink:"/docs/didkit/example--batch-generation"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Start with a keypair",id:"start-with-a-keypair",children:[]},{value:"Generate a DID:Key document",id:"generate-a-didkey-document",children:[]},{value:"Define verificationMethod for keypair.",id:"define-verificationmethod-for-keypair",children:[]},{value:"Prepare credential for issuing.",id:"prepare-credential-for-issuing",children:[]},{value:"Issue the verifiable credential.",id:"issue-the-verifiable-credential",children:[]},{value:"Verify a verifiable credential.",id:"verify-a-verifiable-credential",children:[]},{value:"Create presentation embedding verifiable credential.",id:"create-presentation-embedding-verifiable-credential",children:[]},{value:"Issue verifiable presentation.",id:"issue-verifiable-presentation",children:[]},{value:"Verify verifiable presentation.",id:"verify-verifiable-presentation",children:[]},{value:"Appendix: whole script without comments",id:"appendix-whole-script-without-comments",children:[]}],d={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"This is an example shell script using all the core functions of DIDKit-CLI: key generation, credential/presentation issuance and verification."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note: This script is meant to be in a DIDKit-CLI source directory. See the complete script below for setup details.")),Object(r.b)("h3",{id:"start-with-a-keypair"},"Start with a keypair"),Object(r.b)("p",null,"DIDKit can generate a unique ed25119 keypair from entropy. Alternately, you can provide a static key locally."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"if [ -e issuer_key.jwk ]; then\n    echo 'Using existing keypair.'\nelse\n    didkit generate-ed25519-key > issuer_key.jwk\n    echo 'Generated keypair.'\nfi\n\necho\n")),Object(r.b)("h3",{id:"generate-a-didkey-document"},"Generate a DID:Key document"),Object(r.b)("p",null,"This document gets wrapped around the keypair generated (or passed) in the previous step. For more context on the DID:key method, see the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/did-method-key/"}),"specification"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"did=$(didkit key-to-did-key -k issuer_key.jwk)\nprintf 'DID: %s\\n\\n' \"$did\"\n")),Object(r.b)("h3",{id:"define-verificationmethod-for-keypair"},"Define verificationMethod for keypair."),Object(r.b)("p",null,"This is used to identify the key in linked data proofs. Verifiers of such proofs query a DID found in a credential based on what ","[registered]"," proof type (i.e., what kind of signatures) it needs key material to verify."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"verification_method=$(didkit key-to-verification-method -k issuer_key.jwk)\nprintf 'verificationMethod: %s\\n\\n' \"$verification_method\"\n")),Object(r.b)("h3",{id:"prepare-credential-for-issuing"},"Prepare credential for issuing."),Object(r.b)("p",null,"In this example credential, the issuance date, id, and credential subject id are arbitrary, but in real-world usage these are diverse and critical properties. For more info about what these properties mean, see the Verifiable Credentials Data Model ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://w3c.github.io/vc-data-model/"}),"specification")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'cat > credential-unsigned.jsonld <<EOF\n{\n    "@context": "https://www.w3.org/2018/credentials/v1",\n    "id": "http://example.org/credentials/3731",\n    "type": ["VerifiableCredential"],\n    "issuer": "$did",\n    "issuanceDate": "2020-08-19T21:41:50Z",\n    "credentialSubject": {\n        "id": "did:example:d23dd687a7dc6787646f2eb98d0"\n    }\n}\nEOF\n')),Object(r.b)("h3",{id:"issue-the-verifiable-credential"},"Issue the verifiable credential."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Ask didkit to issue a verifiable credential using the given keypair file, verification method, and proof purpose, passing the unsigned credential on standard input. "),Object(r.b)("li",{parentName:"ol"},"DIDKit creates a linked data proof to add to the credential, and outputs the resulting newly-issued verifiable credential on standard output, which we save to a file.")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"didkit vc-issue-credential \\\n    -k issuer_key.jwk \\\n    -v \"$verification_method\" \\\n    -p assertionMethod \\\n    < credential-unsigned.jsonld \\\n    > credential-signed.jsonld\necho 'Issued verifiable credential:'\nprint_json credential-signed.jsonld\necho\n")),Object(r.b)("h3",{id:"verify-a-verifiable-credential"},"Verify a verifiable credential."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We pass the newly-issued verifiable credential back to didkit for verification using the given verification method and proof purpose. "),Object(r.b)("li",{parentName:"ul"},"DIDKit outputs the verification result as JSON. "),Object(r.b)("li",{parentName:"ul"},"If verification is successful, the command completes successfully (returns exit code 0).")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"if ! didkit vc-verify-credential \\\n    -v \"$verification_method\" \\\n    -p assertionMethod \\\n    < credential-signed.jsonld \\\n    > credential-verify-result.json\nthen\n    echo 'Unable to verify credential:'\n    print_json credential-verify-result.json\n    exit 1\nfi\necho 'Verified verifiable credential:'\nprint_json credential-verify-result.json\necho\n")),Object(r.b)("h3",{id:"create-presentation-embedding-verifiable-credential"},"Create presentation embedding verifiable credential."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Prepare to present the verifiable credential by wrapping it in a Verifiable Presentation. "),Object(r.b)("li",{parentName:"ul"},"The id here is an arbitrary URL for example purposes; VPs are often but not always uniquely identified, whether by identifiers, URLs, or URIs.")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'cat > presentation-unsigned.jsonld <<EOF\n{\n    "@context": ["https://www.w3.org/2018/credentials/v1"],\n    "id": "http://example.org/presentations/3731",\n    "type": ["VerifiablePresentation"],\n    "holder": "$did",\n    "verifiableCredential": $(cat credential-signed.jsonld)\n}\nEOF\n')),Object(r.b)("h3",{id:"issue-verifiable-presentation"},"Issue verifiable presentation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Pass the unsigned verifiable presentation to DIDKit to be issued as a verifiable presentation. * DIDKit signs the presentation with a linked data proof, using the given keypair, verification method and proof type. "),Object(r.b)("li",{parentName:"ul"},"We save the resulting newly created verifiable presentation to a file.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In most use-cases, the ",Object(r.b)("inlineCode",{parentName:"p"},"holder")," field contains a DID or other identifier verifiably linked to the key material signing the presentation, which has some relationship to the credential(s) being presented. The classic example is a fresh and interactive proof of being the ","[human]"," subject identified by a credential, but there are many VP use-cases as well.  This may be a manual, consented, unique and interactive identity assurance operation, but it can also be an assurance of the identity of a machine or a legal entity, operated by an API call or an automation carried out by a fiduciary/trusted piece of software, etc."),Object(r.b)("p",{parentName:"div"},"In these examples, the keys representing the two parties are stored in expressive filenames, 'issuer_key' and 'holder_key'. There are, however, no differences between these keys, and the JWK filenames were chosen simply to clarify the example; there are no restrictions on them."))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"didkit vc-issue-presentation \\\n    -k issuer_key.jwk \\\n    -v \"$verification_method\" \\\n    -p authentication \\\n    < presentation-unsigned.jsonld \\\n    > presentation-signed.jsonld\necho 'Issued verifiable presentation:'\nprint_json presentation-signed.jsonld\necho\n")),Object(r.b)("h3",{id:"verify-verifiable-presentation"},"Verify verifiable presentation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Pass the verifiable presentation back to didkit for verification."),Object(r.b)("li",{parentName:"ul"},"Examine the verification result JSON.")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"if ! didkit vc-verify-presentation \\\n    -v \"$verification_method\" \\\n    -p authentication \\\n    < presentation-signed.jsonld \\\n    > presentation-verify-result.json\nthen\n    echo 'Unable to verify presentation:'\n    print_json presentation-verify-result.json\n    exit 1\nfi\necho 'Verified verifiable presentation:'\nprint_json presentation-verify-result.json\necho\n\necho Done\n")),Object(r.b)("h3",{id:"appendix-whole-script-without-comments"},"Appendix: whole script without comments"),Object(r.b)("p",null,"Also available on Github as\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/spruceid/didkit/blob/main/cli/tests/example.sh"}),"/cli/tests/example.sh")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/sh\n# This is an example shell script using DIDKit for key generation,\n# credential/presentation issuance and verification.\n\nset -e\n\nprint_json() {\n    file=${1?file}\n    if command -v jq >/dev/null 2>&1; then\n        jq . "$file" || cat "$file"\n    elif command -v json_pp >/dev/null 2>&1; then\n        json_pp < "$file" || cat "$file"\n    else\n        cat "$file"\n    fi\n}\n\ncd "$(dirname "$0")"\n\ncargo build -p didkit-cli\n\nexport PATH=$PWD/../../target/debug:$PATH\n\n# check for issuer key and generate verification method to match\n\nif [ -e issuer_key.jwk ]; then\n    echo \'Using existing keypair.\'\nelse\n    didkit generate-ed25519-key > issuer_key.jwk\n    echo \'Generated keypair.\'\nfi\necho\n\ndid=$(didkit key-to-did-key -k issuer_key.jwk)\nprintf \'DID: %s\\n\\n\' "$did"\n\nissuer_verification_method=$(didkit key-to-verification-method -k issuer_key.jwk)\nprintf \'issuer verificationMethod: %s\\n\\n\' "$issuer_verification_method"\n\ncat > credential-unsigned.jsonld <<EOF\n{\n    "@context": "https://www.w3.org/2018/credentials/v1",\n    "id": "http://example.org/credentials/3731",\n    "type": ["VerifiableCredential"],\n    "issuer": "$did",\n    "issuanceDate": "2020-08-19T21:41:50Z",\n    "credentialSubject": {\n        "id": "did:example:d23dd687a7dc6787646f2eb98d0"\n    }\n}\nEOF\n\ndidkit vc-issue-credential \\\n    -k issuer_key.jwk \\\n    -v "$verification_method" \\\n    -p assertionMethod \\\n    < credential-unsigned.jsonld \\\n    > credential-signed.jsonld\necho \'Issued verifiable credential:\'\nprint_json credential-signed.jsonld\necho\n\nif ! didkit vc-verify-credential \\\n    -v "$verification_method" \\\n    -p assertionMethod \\\n    < credential-signed.jsonld \\\n    > credential-verify-result.json\nthen\n    echo \'Unable to verify credential:\'\n    print_json credential-verify-result.json\n    exit 1\nfi\necho \'Verified verifiable credential:\'\nprint_json credential-verify-result.json\necho\n\n# check for holder key and generate verification method to match, \n# for creating verifiable presentation\n\nif [ -e holder_key.jwk ]; then\n    echo \'Using existing keypair.\'\nelse\n    didkit generate-ed25519-key > holder_key.jwk\n    echo \'Generated keypair.\'\nfi\necho\n\n# generate DID of using method DID:key from holder key\n\ndid=$(didkit key-to-did-key -k holder_key.jwk)\nprintf \'DID: %s\\n\\n\' "$did"\n\nholder_verification_method=$(didkit key-to-verification-method -k holder_key.jwk)\nprintf \'holder verificationMethod: %s\\n\\n\' "$holder_verification_method"\n\ncat > presentation-unsigned.jsonld <<EOF\n{\n    "@context": ["https://www.w3.org/2018/credentials/v1"],\n    "id": "http://example.org/presentations/3731",\n    "type": ["VerifiablePresentation"],\n    "holder": "$did",\n    "verifiableCredential": $(cat credential-signed.jsonld)\n}\nEOF\n\ndidkit vc-issue-presentation \\\n    -k holder_key.jwk \\\n    -v "$verification_method" \\\n    -p authentication \\\n    < presentation-unsigned.jsonld \\\n    > presentation-signed.jsonld\necho \'Issued verifiable presentation:\'\nprint_json presentation-signed.jsonld\necho\n\nif ! didkit vc-verify-presentation \\\n    -v "$verification_method" \\\n    -p authentication \\\n    < presentation-signed.jsonld \\\n    > presentation-verify-result.json\nthen\n    echo \'Unable to verify presentation:\'\n    print_json presentation-verify-result.json\n    exit 1\nfi\necho \'Verified verifiable presentation:\'\nprint_json presentation-verify-result.json\necho\n\necho Done\n')))}l.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),l=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),u=i,f=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return t?a.a.createElement(f,s(s({ref:n},d),{},{components:t})):a.a.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);