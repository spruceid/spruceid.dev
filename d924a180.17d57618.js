(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{105:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return m}));var r=i(0),a=i.n(r);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},b=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(i),u=r,m=b["".concat(l,".").concat(u)]||b[u]||p[u]||n;return i?a.a.createElement(m,o(o({ref:t},s),{},{components:i})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,l=new Array(n);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<n;s++)l[s]=i[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},155:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/didkithead-52d41d35622b77d7662965794aa33eff.png"},93:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return c})),i.d(t,"toc",(function(){return s})),i.d(t,"default",(function(){return b}));var r=i(3),a=i(7),n=(i(0),i(105)),l=["components"],o={id:"intro",title:"Introducing DIDKit",hide_title:!0,sidebar_label:"Introduction",slug:"/didkit/"},c={unversionedId:"didkit/intro",id:"didkit/intro",isDocsHomePage:!1,title:"Introducing DIDKit",description:"DIDKit header",source:"@site/docs/didkit/intro.md",slug:"/didkit/",permalink:"/docs/didkit/",editUrl:"https://github.com/spruceid/docs/didkit/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Code of Conduct",permalink:"/docs/code-of-conduct"},next:{title:"Terminology",permalink:"/docs/didkit/terminology"}},s=[{value:"What is DIDKit?",id:"what-is-didkit",children:[]},{value:"What does DIDKit include?",id:"what-does-didkit-include",children:[]},{value:"Quickstart",id:"quickstart",children:[]},{value:"Features",id:"features",children:[]},{value:"Roadmap",id:"roadmap",children:[]}],d={toc:s};function b(e){var t=e.components,o=Object(a.a)(e,l);return Object(n.b)("wrapper",Object(r.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("img",{alt:"DIDKit header",src:i(155).default})),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://www.docker.com/"},Object(n.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Docker-19.03.x-blue",alt:null}))," ",Object(n.b)("a",{parentName:"p",href:"https://www.rust-lang.org/"},Object(n.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Rust-v1.51.0-orange",alt:null}))," ",Object(n.b)("a",{parentName:"p",href:"https://www.github.com/spruceid/ssi"},Object(n.b)("img",{parentName:"a",src:"https://img.shields.io/badge/ssi-v0.1-green",alt:null}))," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/blob/main/LICENSE"},Object(n.b)("img",{parentName:"a",src:"https://img.shields.io/badge/License-Apache--2.0-green",alt:null}))," ",Object(n.b)("a",{parentName:"p",href:"https://twitter.com/sprucesystems"},Object(n.b)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/sprucesystems?label=Follow&style=social",alt:null}))),Object(n.b)("h2",{id:"what-is-didkit"},"What is DIDKit?"),Object(n.b)("p",null,"DIDKit provides Verifiable Credential and Decentralized Identifier\nfunctionality across different platforms. It's written primarily in Rust due\nto Rust's expressive type system, memory safety, simple dependency web, and\nsuitability across different platforms including embedded systems."),Object(n.b)("p",null,"DIDKit supports the following high level use cases, with more to be added shortly:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/"},"W3C Verifiable Credentials")," with\nJSON-LD Proofs: issuance, presentation, and verification."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/"},"W3C Decentralized Identifiers"),": resolution\nfor did-key, did-web, and one layer of did-tezos.")),Object(n.b)("h2",{id:"what-does-didkit-include"},"What does DIDKit include?"),Object(n.b)("p",null,"DIDKit ships with a ",Object(n.b)("a",{parentName:"p",href:"/docs/didkit/cli_commands"},"command line tool")," and ",Object(n.b)("a",{parentName:"p",href:"/docs/didkit/http_syntax"},"HTTP service"),". The HTTP service aims\nto comply with ",Object(n.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-http-api/"},"HTTP-VC-API"),"."),Object(n.b)("p",null,"Through cross-compilation and linking through C ABIs, DIDKit also supports\nother platforms through SDKs for:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/tree/main/lib/cbindings"},"C/Objective-C")," (C\nABI)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/tree/main/lib/java"},"Java")," (via JNI, see an\n",Object(n.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/tree/example-java/examples/java-springboot"},"example project using Spring Boot"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/tree/main/lib/android"},"Android")," (via Java)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/tree/main/lib/flutter"},"Flutter")," (via Android\nand iOS)"),Object(n.b)("li",{parentName:"ul"},"(",Object(n.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/pull/17"},"WIP"),") JavaScript/ES6 (npm-linked\nlibrary)"),Object(n.b)("li",{parentName:"ul"},"(",Object(n.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/pull/15"},"WIP"),") WASM (cross-compiled using\n",Object(n.b)("a",{parentName:"li",href:"https://github.com/rustwasm/wasm-pack"},"wasm-pack"),")"),Object(n.b)("li",{parentName:"ul"},"(Future) PHP, Python, Ruby/Rails, Go, C#, C++")),Object(n.b)("p",null,"Although support across different platforms is in its early stages, we will\ncontinue to add new platforms and improve interface ergonomics over time. For\nplatforms that do not currently have SDK support, the HTTP API and command line\ntools are readily integrated."),Object(n.b)("h2",{id:"quickstart"},"Quickstart"),Object(n.b)("p",null,"In this quickstart, we will build and run the command line tool along with the\nHTTP server."),Object(n.b)("p",null,"Prerequisites:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GNU/Linux or MacOS, not yet tested on Windows."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust nightly")," (",Object(n.b)("inlineCode",{parentName:"li"},"rustup default nightly"),")")),Object(n.b)("p",null,"Building ",Object(n.b)("inlineCode",{parentName:"p"},"didkit")," (we are working on crate packaging):"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/spruceid/ssi --recurse-submodules\n$ git clone https://github.com/spruceid/didkit\n$ cd didkit/\n$ cargo build\n")),Object(n.b)("p",null,"Using ",Object(n.b)("inlineCode",{parentName:"p"},"didkit")," CLI (",Object(n.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/tree/main/cli"},"Github documentation"),") ",Object(n.b)("br",null),"\nRead more about CLI Commands ",Object(n.b)("a",{parentName:"p",href:"/docs/didkit/cli_commands"},"here")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"$ ./target/debug/didkit -h\n$ ./target/debug/didkit generate-ed25519-key > key.jwk\n")),Object(n.b)("p",null,"Using ",Object(n.b)("inlineCode",{parentName:"p"},"didkit")," HTTP server (",Object(n.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/tree/main/http"},"Github documentation"),") ",Object(n.b)("br",null),"\nRead more about HTTP Commands ",Object(n.b)("a",{parentName:"p",href:"/docs/didkit/http_syntax"},"here")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"$ ./target/debug/didkit-http -k key.jwk\nListening on http://127.0.0.1:51467/\n")),Object(n.b)("p",null,"Please see the installation instructions for more detailed steps or how to use\ncontainerized builds. The CLI and HTTP related pages in the ",Object(n.b)("a",{parentName:"p",href:"/docs/didkit/examples"},"examples\nsection")," will demonstrate how to issue and verify\nVerifiable Credentials and Verifiable Presentations."),Object(n.b)("h2",{id:"features"},"Features"),Object(n.b)("p",null,"The core featureset of DIDKit is expanding steadily over time and in the open,\nso feel free to engage with the repository directly on github. Currently,\nDIDKit currently supports the following features:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Key generation and handling."),Object(n.b)("li",{parentName:"ul"},"Issuance and presentation of W3C Verifiable Credentials in JSON-LD, signed by\na local and/or passed key."),Object(n.b)("li",{parentName:"ul"},"Verification of W3C Verifiable Credentials in JSON-LD.")),Object(n.b)("p",null,"DID Methods supported so far:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"did-key"),Object(n.b)("li",{parentName:"ul"},"did-web"),Object(n.b)("li",{parentName:"ul"},"did-tezos"),Object(n.b)("li",{parentName:"ul"},"did-ethr (implicit only)"),Object(n.b)("li",{parentName:"ul"},"did-sol")),Object(n.b)("p",null,"Proof types verifiable so far:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"RSASignature2018"),Object(n.b)("li",{parentName:"ul"},"Ed25519VerificationKeys"),Object(n.b)("li",{parentName:"ul"},"EcdsaSecp256k1Signature2019"),Object(n.b)("li",{parentName:"ul"},"EcdsaSecp256r1Signature2019"),Object(n.b)("li",{parentName:"ul"},"EcdsaSecp256k1RecoverySignature2020"),Object(n.b)("li",{parentName:"ul"},"Eip712Signature2021"),Object(n.b)("li",{parentName:"ul"},"SolanaSignature2021"),Object(n.b)("li",{parentName:"ul"},"JsonWebSignature2020")),Object(n.b)("h2",{id:"roadmap"},"Roadmap"),Object(n.b)("p",null,"The following tools and features are high priority for subsequent releases:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Exposing interfaces for JWT-based Verifiable Credential workflows"),Object(n.b)("li",{parentName:"ol"},"JSON-LD context editor"),Object(n.b)("li",{parentName:"ol"},"Registration of several new LD signature suites and support for new\ncryptography"),Object(n.b)("li",{parentName:"ol"},"Further DID method support: did-btcr, did-onion"),Object(n.b)("li",{parentName:"ol"},"BBS+ signatures"),Object(n.b)("li",{parentName:"ol"},"DIDComm support"),Object(n.b)("li",{parentName:"ol"},"Aries interoperability profile support")))}b.isMDXComponent=!0}}]);