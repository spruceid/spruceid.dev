"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[562],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(a),m=i,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||n;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9625:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),l=["components"],d={id:"java",title:"Java"},o={unversionedId:"didkit-interfaces/java",id:"didkit-interfaces/java",isDocsHomePage:!1,title:"Java",description:"[path-packages]//dart.dev/tools/pub/dependencies#path-packages",source:"@site/docs/didkit-interfaces/java.md",sourceDirName:"didkit-interfaces",slug:"/didkit-interfaces/java",permalink:"/docs/didkit-interfaces/java",editUrl:"https://github.com/spruceid/docs/didkit-interfaces/java.md",version:"current",frontMatter:{id:"java",title:"Java"},sidebar:"docs",previous:{title:"C & Android",permalink:"/docs/didkit-interfaces/C"},next:{title:"Python",permalink:"/docs/didkit-interfaces/python"}},s=[{value:"At a Glance",id:"at-a-glance",children:[]},{value:"Installation",id:"installation",children:[{value:"Build",id:"build",children:[]},{value:"Test",id:"test",children:[]},{value:"+ Android",id:"-android",children:[]}]},{value:"Android",id:"android",children:[{value:"Requires",id:"requires",children:[]},{value:"Build",id:"build-1",children:[]}]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function u(e){var t=e.components,a=(0,i.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"at-a-glance"},"At a Glance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DIDKit exposes a straightforward set of Java bindings, using the Java Native Interface (",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Java_Native_Interface"},"JNI"),").  "),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/JAR_(file_format)"},"JAR")," file includes all of DIDKit's Java class files. To use this in an\napplication, you must also include the shared library (",(0,n.kt)("inlineCode",{parentName:"li"},"libdidkit.so"),") in your\napplication in the Java library path"),(0,n.kt)("li",{parentName:"ul"},"For a quick function & type reference, you can study the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/lib/java/test/com/spruceid/DIDKitTest.java"},"DIDKitTest.java\nfile"),". "),(0,n.kt)("li",{parentName:"ul"},"All the low-level calls that the Rust library exposes to JNI are documented in the\n",(0,n.kt)("a",{parentName:"li",href:"https://rust.didkit.dev/didkit/jni/index.html"},"JNI section")," of the ",(0,n.kt)("a",{parentName:"li",href:"https://rust.didkit.dev/didkit"},"Rust\ndocumentation"),". ")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Install Rust and DIDKit ",(0,n.kt)("a",{parentName:"p",href:"/docs/didkit/install.md#manual"},"as usual")," and then: "),(0,n.kt)("h3",{id:"build"},"Build"),(0,n.kt)("p",null,"Run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# from DIDKit root directory:\n$ make -C lib ../target/didkit.jar\n")),(0,n.kt)("p",null,"To build the shared library for your current platform/architecture:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# from DIDKit root directory:\n$ make -C lib ../target/release/libdidkit.so\n")),(0,n.kt)("h3",{id:"test"},"Test"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# from DIDKit root directory:\n$ make -C lib ../target/tests/java.stamp\n")),(0,n.kt)("h3",{id:"-android"},"+ Android"),(0,n.kt)("p",null,"For Android, build the separate ",(0,n.kt)("a",{parentName:"p",href:"#android"},"Android library (AAR file)")," which includes the Java class files and shared libraries for all Android targets."),(0,n.kt)("h2",{id:"android"},"Android"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/projects/android-library.html#aar-contents"},"Android Library (AAR file)")," for DIDKit. The AAR file includes Java class files using ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_Native_Interface"},"JNI"),", and binary shared libraries for Android's supported architectures (x86, armeabi-v7a, arm64-v8a, x86","_","64). The AAR can be added to existing Android projects using Android Studio or Gradle."),(0,n.kt)("h3",{id:"requires"},"Requires"),(0,n.kt)("p",null,"Android SDK and NDK for Linux x86","_","64. The Android SDK is expected to be installed at ",(0,n.kt)("inlineCode",{parentName:"p"},"~/Android/Sdk"),". If it is somewhere else instead, you can specify it with a Make variable, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"make ANDROID_SDK_ROOT=/other/location/android-sdk"),". "),(0,n.kt)("p",null,"Rust Android targets are also required. To install those with ",(0,n.kt)("inlineCode",{parentName:"p"},"rustup"),", run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"//from root directory of didkit project\n$ make -C lib install-rustup-android\n")),(0,n.kt)("h3",{id:"build-1"},"Build"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"//from root directory of didkit project\n$ make -C lib ../target/test/aar.stamp\n")),(0,n.kt)("h4",{id:"make-variables"},"Make variables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ANDROID_SDK_ROOT")," - path to Android SDK. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"~/Android/Sdk")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ANDROID_TOOLS")," - Android tools directory. Default is to pick one matching ",(0,n.kt)("inlineCode",{parentName:"li"},"$(ANDROID_SDK_ROOT)/build-tools/*"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ANDROID_NDK_HOME")," - Android NDK directory. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"$(ANDROID_SDK_ROOT)/ndk-bundle)")," if exists, or one matching ",(0,n.kt)("inlineCode",{parentName:"li"},"$(ANDROID_SDK_ROOT)/ndk/*"),".")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Tool"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Authentication, Tomcat, CHAPI"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/spruceid/didkit/examples/java-jsp/readme.md"},"Github"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Authentication, Maven, MySQL, Redis"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/spruceid/didkit/examples/java-springboot/readme.md"},"Github"))))))}u.isMDXComponent=!0}}]);