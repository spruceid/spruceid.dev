"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[464],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7116:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"native",title:"Native Software Development Kit",sidebar_label:"Native SDK"},c={unversionedId:"credible/native",id:"credible/native",isDocsHomePage:!1,title:"Native Software Development Kit",description:"[installandroiddependencies.sh]//github.com/spruceid/credible/blob/main/installandroiddependencies.sh",source:"@site/docs/credible/native.md",sourceDirName:"credible",slug:"/credible/native",permalink:"/docs/credible/native",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/credible/native.md",version:"current",sidebar_label:"Native SDK",frontMatter:{id:"native",title:"Native Software Development Kit",sidebar_label:"Native SDK"},sidebar:"docs",previous:{title:"Core Concepts",permalink:"/docs/credible/concepts"},next:{title:"Authenticating to other services",permalink:"/docs/credible/authn"}},s=[{value:"Context",id:"context",children:[]},{value:"Installation",id:"installation",children:[]},{value:"References",id:"references",children:[]}],d={toc:s};function p(e){var t=e.components,l=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Mobile development is mainly separated into two models, native and cross\nplatform. Native mobile applications are generally built using Kotlin/Java on\nAndroid and Swift/Objective-C on iOS. And for cross platform development, there\nare Flutter and React Native as the leaders of this model. Spruce's primary\ndevelopment pattern has been to architect Credible as a Flutter application that\nintegrates DIDKit as a C library through the Dart FFI. When a client wants to\nintegrate Credible into their own application, the easiest way to do so is if\nthe client\u2019s relying application is itself also built in Flutter."),(0,o.kt)("p",null,"It is also possible, however, to decouple a Credible SDK from the Credible\napplication and distribute it for use in native-only development. A developer\nthat already has a native solution and wants to integrate Credible's lower-level\nlibraries would be averse to taking on a dependency to the entire Flutter SDK\njust for what might otherwise be a much smaller native library used only to\nhandle the Verifiable-Credential specific cryptography and other mechanics. "),(0,o.kt)("p",null,"For this development context, our native SDK is made by re-implementing sections\nof the Credible codebase in Swift for native iOS development and Kotlin for\nnative Android development. As this development tooling is still under\ndevelopment, these have to be built from source for now, and instructions for\ndoing so can be found in the repos (see below). At a later stage of maturity, we\nexpect to distribute binaries through the respective package managers."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"diagram of native versus cross-platform development dependencies",src:n(5332).Z})),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Swift developers can find instructions for building DIDKit as a Swift dependency in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/tree/main/lib/ios#didkit-swift-wrapper"},"/lib/ios folder of the didkit repo"),"."),(0,o.kt)("p",null,"Kotlin developers can find a DIDKit package for maven in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/packages/924246"},"packages section of the didkit repo"),"."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"For reference documentation on how to interact with a C library from Kotlin FFI,\nsee ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/native-c-interop.html"},"this section")," of the\nofficial Kotlin documentation. For the equivalent in Swift, see ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis/using_imported_c_functions_in_swift"},"this\nsection"),"\nof the official Swift documentation."))}p.isMDXComponent=!0},5332:function(e,t,n){t.Z=n.p+"assets/images/credible_native_sdk-edf8031c0753594f16a6b94a885ff2da.png"}}]);