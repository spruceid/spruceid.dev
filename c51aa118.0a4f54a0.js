(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{121:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/didkit-core-components-7abba2778ffe8dde24997f305e706bd8.png"},148:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/didkithead-52d41d35622b77d7662965794aa33eff.png"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var i=a(3),n=a(7),r=(a(0),a(97)),s={id:"intro",title:"Introducing DIDKit",hide_title:!0,sidebar_label:"Introduction",slug:"/didkit/"},c={unversionedId:"didkit/intro",id:"didkit/intro",isDocsHomePage:!1,title:"Introducing DIDKit",description:"DIDKit header",source:"@site/docs\\didkit\\intro.md",slug:"/didkit/",permalink:"/docs/didkit/",editUrl:"https://github.com/spruceid/docs/didkit/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Decentralized Identity Primer",permalink:"/docs/primer"},next:{title:"Terminology",permalink:"/docs/didkit/terminology"}},o=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Specifications and Test Suites",id:"specifications-and-test-suites",children:[]},{value:"Cryptography Backends",id:"cryptography-backends",children:[]},{value:"Features",id:"features",children:[]},{value:"Roadmap",id:"roadmap",children:[]}],l={toc:o};function b(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"DIDKit header",src:a(148).default})),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.docker.com/"}),Object(r.b)("img",Object(i.a)({parentName:"a"},{src:"https://img.shields.io/badge/Docker-19.03.x-blue",alt:null})))," ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.rust-lang.org/"}),Object(r.b)("img",Object(i.a)({parentName:"a"},{src:"https://img.shields.io/badge/Rust-v1.49.0-orange",alt:null})))," ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.github.com/spruceid/ssi"}),Object(r.b)("img",Object(i.a)({parentName:"a"},{src:"https://img.shields.io/badge/ssi-v0.1-green",alt:null})))," ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/spruceid/didkit/blob/main/LICENSE"}),Object(r.b)("img",Object(i.a)({parentName:"a"},{src:"https://img.shields.io/badge/License-Apache--2.0-green",alt:null})))," ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://twitter.com/sprucesystems"}),Object(r.b)("img",Object(i.a)({parentName:"a"},{src:"https://img.shields.io/twitter/follow/sprucesystems?label=Follow&style=social",alt:null})))," "),Object(r.b)("p",null,"DIDKit provides Verifiable Credential and Decentralized Identifier\nfunctionality across different platforms. It was written primarily in Rust due\nto Rust's expressive type system, memory safety, simple dependency web, and\nsuitability across different platforms including embedded systems."),Object(r.b)("p",null,Object(r.b)("img",{alt:"core components of ssi and didkit",src:a(121).default})),Object(r.b)("p",null,"It supports the following high level use cases, with more to be added shortly:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.w3.org/TR/vc-data-model/"}),"W3C Verifiable Credentials")," with\nJSON-LD Proofs: issuance, presentation, and verification."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.w3.org/TR/did-core/"}),"W3C Decentralized Identifiers"),": resolution\nfor did-key, did-web, and one layer of did-tezos.")),Object(r.b)("p",null,"DIDKit ships with a command line tool and HTTP service. The HTTP service aims\nto comply with ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/"}),"HTTP-VC-API"),"."),Object(r.b)("p",null,"Through cross-compilation and linking through C ABIs, DIDKit also supports\nother platforms through SDKs for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/spruceid/didkit/tree/main/lib/cbindings"}),"C/Objective-C")," (C\nABI)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/spruceid/didkit/tree/main/lib/java"}),"Java")," (via JNI, see an\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/spruceid/didkit/tree/example-java/examples/java-springboot"}),"example project using Spring Boot"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/spruceid/didkit/tree/main/lib/android"}),"Android")," (via Java)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/spruceid/didkit/tree/main/lib/flutter"}),"Flutter")," (via Android\nand iOS)"),Object(r.b)("li",{parentName:"ul"},"(",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/spruceid/didkit/pull/17"}),"WIP"),") JavaScript/ES6 (npm-linked\nlibrary)"),Object(r.b)("li",{parentName:"ul"},"(",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/spruceid/didkit/pull/15"}),"WIP"),") WASM (cross-compiled using\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/rustwasm/wasm-pack"}),"wasm-pack"),")"),Object(r.b)("li",{parentName:"ul"},"(Future) PHP, Python, Ruby/Rails, Go, C#, C++")),Object(r.b)("p",null,"Although support across different platforms is in its early stages, we will\ncontinue to add new platforms and improve interface ergonomics over time. For\nplatforms that do not currently have SDK support, the HTTP API and command line\ntools are readily integrated."),Object(r.b)("h2",{id:"quickstart"},"Quickstart"),Object(r.b)("p",null,"In this quickstart, we will build and run the command line tool along with the\nHTTP server."),Object(r.b)("p",null,"Prerequisites:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"GNU/Linux or MacOS, not yet tested on Windows."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.rust-lang.org/tools/install"}),"Rust nightly")," (",Object(r.b)("inlineCode",{parentName:"li"},"rustup default\nnightly"),")")),Object(r.b)("p",null,"Building ",Object(r.b)("inlineCode",{parentName:"p"},"didkit")," (we are working on crate packaging):"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"$ git clone https://github.com/spruceid/ssi\n$ git clone https://github.com/spruceid/didkit\n$ cd didkit/\n$ cargo build\n")),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"didkit")," CLI\n(",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/spruceid/didkit/tree/main/cli"}),"documentation"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"$ ./target/debug/didkit -h\n$ ./target/debug/didkit generate-ed25519-key > key.jwk\n")),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"didkit")," HTTP server\n(",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/spruceid/didkit/tree/main/http"}),"documentation"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"$ ./target/debug/didkit-http -k key.jwk\nListening on http://127.0.0.1:51467/\n")),Object(r.b)("p",null,"Please see the installation instructions for more detailed steps or how to use\ncontainerized builds. The CLI and HTTP related pages in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/didkit/examples"}),"examples\nsection")," will demonstrate how to issue and verify\nVerifiable Credentials and Verifiable Presentations."),Object(r.b)("h2",{id:"specifications-and-test-suites"},"Specifications and Test Suites"),Object(r.b)("p",null,"To demonstrate our commitment to standards and interoperability, we have\nensured that our implementation conforms to the following specifications and\naspire to pass their test suites where applicable:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.w3.org/TR/vc-data-model/"}),"W3C Verifiable Credentials"),Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/w3c/vc-test-suite"}),"Test Suite")," (passing,\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/spruceid/ssi/tree/main/vc-test"}),"instructions"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.w3.org/TR/did-core/"}),"W3C Decentralized Identifiers"),"\n(test suite pending CR, ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/spruceid/ssi/blob/main/src/did.pest"}),"syntax support"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/w3c-ccg/vc-http-api/tree/master/packages/plugfest-2020"}),"VC HTTP API Test Suite v0.0.1"),"\n(passing, ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/spruceid/vc-http-api/tree/spruce/packages/plugfest-2020/vendors/spruce"}),"instructions"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://json-ld.github.io/normalization/tests/"}),"RDF Dataset Normalization Test Cases")," (passing, ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#"}),"instructions"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://w3c.github.io/json-ld-api/tests/toRdf-manifest.html"}),"JSON-LD to RDF Transformation Test Cases"),"\n(440/450 passing, ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#"}),"instructions"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/ld-proofs/"}),"Linked Data Proofs 1.0")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/did-resolution/"}),"DID Resolution")),Object(r.b)("li",{parentName:"ul"},"IETF: ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7519"}),"JWT"),",\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7515"}),"JWS"),",\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7517"}),"JWK"),",\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7518"}),"JWA"),",\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc8037"}),"CFRG ECDH and Signatures in JOSE")," ")),Object(r.b)("h2",{id:"cryptography-backends"},"Cryptography Backends"),Object(r.b)("p",null,"We strongly prefer tried and tested implementations of cryptographic functions\nand believe that it's most responsible to list them out in a forthcoming manner\nto any potential users. DIDKit is engineered so that the target platform and\ncompile-time flags may be used to specify different cryptographic backends,\nsuch as to leverage native hardware capabilities, cross-compile to e.g. WASM,\nor to give advanced users the option to only use libraries that they trust."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.rs/ring/0.16.19/ring/"}),Object(r.b)("inlineCode",{parentName:"a"},"ring"),", v0.16"),": default for hashes, ed25519\nfunctions, RSA, and randomness. The ed25519 functions here cannot currently\ncompile to WASM."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.rs/rsa/0.3.0/rsa/"}),Object(r.b)("inlineCode",{parentName:"a"},"rsa"),", v0.3"),": optionally for RSA."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.rs/ed25519-dalek/1.0.1/ed25519_dalek"}),Object(r.b)("inlineCode",{parentName:"a"},"ed25519-dalek"),", v1"),":\noptionally for ed25519. Compiles to WASM."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.rs/rand/0.7.3/rand/"}),Object(r.b)("inlineCode",{parentName:"a"},"rand"),", v0.7"),": optionally for randomness."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.rs/sha2/0.9.2/sha2/"}),Object(r.b)("inlineCode",{parentName:"a"},"sha2"),", v0.9"),": optionally for sha256\nhashes.")),Object(r.b)("p",null,"If you have constructive opinions about the set of cryptographic libraries that\nshould be supported, please ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/spruceid/ssi"}),"open an issue"),"."),Object(r.b)("h2",{id:"features"},"Features"),Object(r.b)("p",null,"The core featureset of DIDKit is expanding steadily over time and in the open,\nso feel free to engage with the repository directly on github. Currently,\nDIDKit currently supports the following features:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Key generation and handling."),Object(r.b)("li",{parentName:"ul"},"Issuance and presentation of W3C Verifiable Credentials in JSON-LD, signed by\na local and/or passed key."),Object(r.b)("li",{parentName:"ul"},"Verification of W3C Verifiable Credentials in JSON-LD.")),Object(r.b)("p",null,"DID Methods supported so far: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"did-key"),Object(r.b)("li",{parentName:"ul"},"did-web"),Object(r.b)("li",{parentName:"ul"},"did-tezos (tz1 and resolution layer 1)")),Object(r.b)("p",null,"Proof types verifiable so far:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"RSASignature2018"),Object(r.b)("li",{parentName:"ul"},"Ed25519VerificationKeys")),Object(r.b)("h2",{id:"roadmap"},"Roadmap"),Object(r.b)("p",null,"The following tools and features are high priority for subsequent releases:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Exposing interfaces for JWT-based Verifiable Credential workflows"),Object(r.b)("li",{parentName:"ol"},"JSON-LD context editor"),Object(r.b)("li",{parentName:"ol"},"Registration of several new LD signature suites and support for new\ncryptography"),Object(r.b)("li",{parentName:"ol"},"Further DID method support: did-tezos (tz2/tz3 and resolution layers 2 and\n3), did-btcr, did-onion"),Object(r.b)("li",{parentName:"ol"},"BBS+ signatures"),Object(r.b)("li",{parentName:"ol"},"DIDComm support"),Object(r.b)("li",{parentName:"ol"},"Aries interoperability profile support")))}b.isMDXComponent=!0},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=b(a),u=i,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return a?n.a.createElement(m,c(c({ref:t},l),{},{components:a})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var l=2;l<r;l++)s[l]=a[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);