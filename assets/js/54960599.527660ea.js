"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[399],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8930:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var a=t(7462),i=t(3366),l=(t(7294),t(3905)),r=["components"],o={id:"install",title:"Installation"},s={unversionedId:"credible/install",id:"credible/install",isDocsHomePage:!1,title:"Installation",description:"[installandroiddependencies.sh]//github.com/spruceid/credible/blob/main/installandroiddependencies.sh",source:"@site/docs/credible/install.md",sourceDirName:"credible",slug:"/credible/install",permalink:"/docs/credible/install",editUrl:"https://github.com/spruceid/docs/credible/install.md",version:"current",frontMatter:{id:"install",title:"Installation"},sidebar:"docs",previous:{title:"Introducing the Credible Wallet",permalink:"/docs/credible/"},next:{title:"Core Concepts",permalink:"/docs/credible/concepts"}},d=[{value:"App stores",id:"app-stores",children:[]},{value:"Common Dependencies",id:"common-dependencies",children:[{value:"Rust",id:"rust",children:[]},{value:"Java",id:"java",children:[]},{value:"Flutter",id:"flutter",children:[]},{value:"<code>wasm-pack</code> (Required for both WEB targets)",id:"wasm-pack-required-for-both-web-targets",children:[]},{value:"<code>binaryen</code>",id:"binaryen",children:[]},{value:"DIDKit and SSI",id:"didkit-and-ssi",children:[]}]},{value:"Target-Specific Dependencies",id:"target-specific-dependencies",children:[{value:"Android Dependencies",id:"android-dependencies",children:[]},{value:"iOS Dependencies",id:"ios-dependencies",children:[]},{value:"Web Dependencies",id:"web-dependencies",children:[]}]},{value:"Building DIDKit for different targets",id:"building-didkit-for-different-targets",children:[{value:"Android",id:"android",children:[]},{value:"Android APK",id:"android-apk",children:[]},{value:"Android App Bundle",id:"android-app-bundle",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Web <em>using WASM</em>",id:"web-using-wasm",children:[]},{value:"Web <em>using ASM.js</em>",id:"web-using-asmjs",children:[]}]},{value:"Building Credible",id:"building-credible",children:[{value:"Run on emulator",id:"run-on-emulator",children:[]},{value:"Run on browser",id:"run-on-browser",children:[]},{value:"iOS .app for Simulator",id:"ios-app-for-simulator",children:[]},{value:"iOS .app for Devices",id:"ios-app-for-devices",children:[]},{value:"iOS IPA",id:"ios-ipa",children:[]},{value:"Web",id:"web",children:[]},{value:"Note about <code>nullsafety</code>",id:"note-about-nullsafety",children:[]},{value:"Note about <code>canvaskit</code>",id:"note-about-canvaskit",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Build Environment Problems",id:"build-environment-problems",children:[]},{value:"Opaque Makefile error messages",id:"opaque-makefile-error-messages",children:[]}]}],u={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"app-stores"},"App stores"),(0,l.kt)("p",null,"We are also in the process of listing Credible on the iOS TestFlight and Android\nPlay Beta programs, and eventually their respective app marketplaces plus\nF-Droid."),(0,l.kt)("h2",{id:"common-dependencies"},"Common Dependencies"),(0,l.kt)("p",null,"To manually build Credible for either Android or iOS, you will need to install\nthe following dependencies (instructions follow):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rust"),(0,l.kt)("li",{parentName:"ul"},"Java 7 or higher"),(0,l.kt)("li",{parentName:"ul"},"Flutter (",(0,l.kt)("inlineCode",{parentName:"li"},"dev")," channel)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/spruceid/didkit"},"DIDKit"),"/",(0,l.kt)("a",{parentName:"li",href:"https://github.com/spruceid/ssi"},"SSI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wasm-pack")," (WEB)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"binaryen")," (WEB and targeting ASM.js)")),(0,l.kt)("h3",{id:"rust"},"Rust"),(0,l.kt)("p",null,"It is recommended to use ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"rustup")," to\nmanage your Rust installation."),(0,l.kt)("h3",{id:"java"},"Java"),(0,l.kt)("p",null,"On Ubuntu you could run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# apt update\n# apt install openjdk-8-jdk\n")),(0,l.kt)("p",null,"For more information, please refer to the documentation of your favorite flavour\nof Java and your operating system/package manager."),(0,l.kt)("h3",{id:"flutter"},"Flutter"),(0,l.kt)("p",null,"Please follow the official instalation instructions available\n",(0,l.kt)("a",{parentName:"p",href:"https://flutter.dev/docs/get-started/install"},"here")," to install Flutter,\ndon't forget to also install the build dependencies for the platform you\nwill be building (Android SDK/NDK, Xcode, etc)."),(0,l.kt)("p",null,"We currently only support build this project using the ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," channel of Flutter."),(0,l.kt)("p",null,"To change your installation to the ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," channel, please execute the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter channel dev\n$ flutter upgrade\n")),(0,l.kt)("p",null,"To confirm that everything is setup correctly, please run the following command\nand resolve any issues that arise before proceeding to the next steps."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter doctor\n")),(0,l.kt)("h3",{id:"wasm-pack-required-for-both-web-targets"},(0,l.kt)("inlineCode",{parentName:"h3"},"wasm-pack")," (Required for both WEB targets)"),(0,l.kt)("p",null,"The wasm-pack cannot yet be compiled from crates.io. For now, to build the WASM\ntarget you will need ",(0,l.kt)("inlineCode",{parentName:"p"},"wasm-pack"),", the fastest way is to fetch the script from\ngithub and run it in the credible root directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh\n")),(0,l.kt)("h3",{id:"binaryen"},(0,l.kt)("inlineCode",{parentName:"h3"},"binaryen")),(0,l.kt)("p",null,"To build Credible for WEB using ASM.js you will need\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/binaryen"},"binaryen"),", which allows the conversion\nof DIDKit WASM to ASM.js. This is necessary in context where WASM support is not\navailable and DIDKit needs to run in pure Javascript. More detailed instructions\non how to build ",(0,l.kt)("inlineCode",{parentName:"p"},"binaryen")," can be found\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/binaryen"},"here"),"."),(0,l.kt)("p",null,"If you are in a UNIX-like distribution you just have to clone the repo and build,\nwe recommend cloning into your ",(0,l.kt)("inlineCode",{parentName:"p"},"${HOME}"),", to avoid having to specify the\n",(0,l.kt)("inlineCode",{parentName:"p"},"${BINARYEN_ROOT}")," variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/WebAssembly/binaryen ~/binaryen\n$ cd ~/binaryen\n$ cmake . && make\n")),(0,l.kt)("p",null,"Not that binaryen support for OS X and Windows is still limited, so it is highly\nrecommended to build it in a linux shell on OS X and on WSL2 in Windows. For\ninstructions on building it natively in Windows, see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/binaryen#faq"},"the binaryen\nFAQ")," on github."),(0,l.kt)("h3",{id:"didkit-and-ssi"},"DIDKit and SSI"),(0,l.kt)("p",null,"This project also depends on two other Spruce projects,\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/spruceid/didkit"},(0,l.kt)("inlineCode",{parentName:"a"},"DIDKit"))," and\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/spruceid/ssi"},(0,l.kt)("inlineCode",{parentName:"a"},"SSI")),". "),(0,l.kt)("p",null,"These projects are all configured to work with relative paths by default, so it\nis recommended to clone them all as subdirectories of the same root directory,\nfor example\n",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/spruceid/didkit\n$HOME/spruceid/ssi\n$HOME/spruceid/credible\n$HOME/spruceid/treehouse\netc")),(0,l.kt)("h2",{id:"target-specific-dependencies"},"Target-Specific Dependencies"),(0,l.kt)("h3",{id:"android-dependencies"},"Android Dependencies"),(0,l.kt)("p",null,"To build Credible for Android, you will require both the Android SDK and NDK."),(0,l.kt)("p",null,"These two dependencies can be easily obtained with ",(0,l.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/install"},"Android\nStudio"),', which install further\ndependencies upon first being opened after installation. Installing the\nappropriate Android NDK (often not the newest) in Android Studio can be\naccomplished by going to Settings > Appearance & Behavior > System Settings >\nAndroid SDK and selecting to install the "NDK (Side by Side)". An alternative\nmethod of installing SDK and NDK without Android Studio can be found in the\noptional\n',(0,l.kt)("a",{parentName:"p",href:"https://github.com/spruceid/credible/blob/main/install_android_dependencies.sh"},"install_android_dependencies.sh"),"\nscript included here."),(0,l.kt)("p",null,"If your Android SDK doesn't live at ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/Android/Sdk")," you will need to set\n",(0,l.kt)("inlineCode",{parentName:"p"},"ANDROID_SDK_ROOT")," like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ export ANDROID_SDK_ROOT=/path/to/Android/Sdk\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: Some users have experienced difficulties with expected cross-compilation\nartefacts missing from the newest NDK, which is downloaded by default in the\ninstallation process.  If you experience errors of this kind, you may have to\nmanually downgrade or install multiple NDK versions as ","[shown\nhere]",")(img/ndk_downgrade.png) in the Android Studio installer (screengrabbed\nfrom an Ubuntu installation). Alternately, running all or parts of the\n",(0,l.kt)("a",{parentName:"em",href:"https://github.com/spruceid/credible/blob/main/install_android_dependencies.sh"},"install_android_dependencies.sh")," script may be\nhelpful.")),(0,l.kt)("p",null,"If your ",(0,l.kt)("inlineCode",{parentName:"p"},"build-tools")," and/or ",(0,l.kt)("inlineCode",{parentName:"p"},"NDK"),"  live in different locations than the default ones inside /SDK/, or if you want to specify a specific NDK or build-tools version, you can manually configure the following two environment variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ export ANDROID_TOOLS=/path/to/SDK/build-tools/XX.X.X/\n$ export ANDROID_NDK_HOME=/path/to/SDK/ndk/XX.X.XXXXX/\n")),(0,l.kt)("p",null,"::: "),(0,l.kt)("h3",{id:"ios-dependencies"},"iOS Dependencies"),(0,l.kt)("p",null,"To build Credible for iOS you will need to install CocoaPods, which can be done\nwith Homebrew on MacOS, WSL2, or Linux-based systems. You will also need\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/xcode/"},"XCode"),", which is not available for WSL2 or\nLinux systems; it is currently possible but not recommended to install XCode\nin those build environments."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install linuxbrew-wrapper\n$ brew install cocoapods\n")),(0,l.kt)("h3",{id:"web-dependencies"},"Web Dependencies"),(0,l.kt)("p",null,"To build Credible for WASM, you will need the Node.JS and its package manager,\n",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," to be installed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install nodejs\n$ sudo apt install npm\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: in some environments, such as Ubuntu 18.04, npm may not automatically\ninstall a new enough version for our makefile to execute succesfully; overriding\nit with ",(0,l.kt)("inlineCode",{parentName:"em"},"npm"),"'s ",(0,l.kt)("a",{parentName:"em",href:"https://github.com/npm/cli/issues/681#issuecomment-793916156"},"internal\ncommands")," may be\nnecessary.")),(0,l.kt)("h2",{id:"building-didkit-for-different-targets"},"Building DIDKit for different targets"),(0,l.kt)("h3",{id:"android"},"Android"),(0,l.kt)("p",null,"To build ",(0,l.kt)("inlineCode",{parentName:"p"},"DIDKit")," for the Android targets, you will go to the root of ",(0,l.kt)("inlineCode",{parentName:"p"},"DIDKit"),"\nand run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ make -C lib install-rustup-android\n$ make -C lib ../target/test/java.stamp\n$ make -C lib ../target/test/aar.stamp\n$ make -C lib ../target/test/flutter.stamp\n$ cargo build\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"This may take some time as it compiles the entire project for multiple targets")),(0,l.kt)("h3",{id:"android-apk"},"Android APK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter build apk --no-sound-null-safety\n")),(0,l.kt)("h3",{id:"android-app-bundle"},"Android App Bundle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter build appbundle --no-sound-null-safety\n")),(0,l.kt)("h3",{id:"ios"},"iOS"),(0,l.kt)("p",null,"To build DIDKit for the iOS targets, you wGo to the root of ",(0,l.kt)("inlineCode",{parentName:"p"},"DIDKit")," and run\n: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ make -C lib install-rustup-ios \n$ make -C lib ../target/test/ios.stamp\n$ cargo build\n")),(0,l.kt)("h3",{id:"web-using-wasm"},"Web ",(0,l.kt)("em",{parentName:"h3"},"using WASM")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ make -C lib ../target/test/wasm.stamp\n")),(0,l.kt)("h3",{id:"web-using-asmjs"},"Web ",(0,l.kt)("em",{parentName:"h3"},"using ASM.js")),(0,l.kt)("p",null,"If you have installed ",(0,l.kt)("inlineCode",{parentName:"p"},"bynarien")," somewhere other than $HOME, you will have to\nset ",(0,l.kt)("inlineCode",{parentName:"p"},"BYNARIEN_ROOT")," as shown below, otherwise, just run the ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ export BINARYEN_ROOT=/path/to/binaryen\n$ make -C lib ../target/test/asmjs.stamp\n")),(0,l.kt)("h2",{id:"building-credible"},"Building Credible"),(0,l.kt)("p",null,"You are now ready to build or run Credible."),(0,l.kt)("h3",{id:"run-on-emulator"},"Run on emulator"),(0,l.kt)("p",null,"If you want to run the project on your connected device, you can use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter run --no-sound-null-safety\n")),(0,l.kt)("h3",{id:"run-on-browser"},"Run on browser"),(0,l.kt)("p",null,"If you want to run the project on your browser, you can use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter run --no-sound-null-safety -d chrome --csp --release\n")),(0,l.kt)("p",null,"Otherwise, Flutter allows us to build many artifacts for Android, iOS and WEB,\nbelow you can find the most common and useful commands, all of which you should\nrun from the root of Credible."),(0,l.kt)("h3",{id:"ios-app-for-simulator"},"iOS .app for Simulator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter build ios --no-sound-null-safety --no-codesign --simulator\n")),(0,l.kt)("h3",{id:"ios-app-for-devices"},"iOS .app for Devices"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter build ios --no-sound-null-safety --no-codesign\n")),(0,l.kt)("h3",{id:"ios-ipa"},"iOS IPA"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter build ipa --no-sound-null-safety\n")),(0,l.kt)("h3",{id:"web"},"Web"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter build web \\\n  --no-sound-null-safety \\\n  --csp \\\n  --release\n")),(0,l.kt)("p",null,"If you don't have support for WASM, you'll probably need to provide your own\n",(0,l.kt)("inlineCode",{parentName:"p"},"canvaskit")," dependency without WASM as well as DIDKit, to do that you need to\nspecify the ",(0,l.kt)("inlineCode",{parentName:"p"},"FLUTTER_WEB_CANVASKIT_URL")," in the build command like below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter build web \\\n  --no-sound-null-safety \\\n  --csp \\\n  --dart-define=FLUTTER_WEB_CANVASKIT_URL=vendor/ \\\n  --release\n")),(0,l.kt)("p",null,"For more details about any of these commands you can run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter build $SUBCOMMAND --help\n")),(0,l.kt)("h3",{id:"note-about-nullsafety"},"Note about ",(0,l.kt)("inlineCode",{parentName:"h3"},"nullsafety")),(0,l.kt)("p",null,"While we are ready to migrate to Dart with nullsafety, a couple of the\ndependencies of the project are still lagging behind, so we need to add ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-sound-null-safely")," to both run and build commands for the time being."),(0,l.kt)("h3",{id:"note-about-canvaskit"},"Note about ",(0,l.kt)("inlineCode",{parentName:"h3"},"canvaskit")),(0,l.kt)("p",null,"Since by default ",(0,l.kt)("inlineCode",{parentName:"p"},"canvaskit")," comes in a ",(0,l.kt)("inlineCode",{parentName:"p"},"WASM")," build, in order to the ",(0,l.kt)("inlineCode",{parentName:"p"},"ASM.js"),"\nbe fully supported ",(0,l.kt)("inlineCode",{parentName:"p"},"canvaskit")," was manually built for this target."),(0,l.kt)("p",null,"A prebuilt ",(0,l.kt)("inlineCode",{parentName:"p"},"canvaskit")," is already included in the Credible web folder.\nIf you want to build it by yourself, however, follow these steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://emscripten.org/docs/getting_started/downloads.html"},(0,l.kt)("inlineCode",{parentName:"a"},"emscripten"))),(0,l.kt)("li",{parentName:"ul"},"Clone ",(0,l.kt)("a",{parentName:"li",href:"https://skia.org/user/download"},"Skia")," repository and pull its dependencies")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://skia.googlesource.com/skia.git --depth 1 --branch canvaskit/0.22.0\ncd skia\npython2 tools/git-sync-deps\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Modify build script ",(0,l.kt)("inlineCode",{parentName:"li"},"modules/canvaskit/compile.sh"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"diff --git a/modules/canvaskit/compile.sh b/modules/canvaskit/compile.sh\nindex 6ba58bfae9..51f0297eb6 100755\n--- a/modules/canvaskit/compile.sh\n+++ b/modules/canvaskit/compile.sh\n@@ -397,6 +397,7 @@ EMCC_DEBUG=1 ${EMCXX} \\\n     -s MODULARIZE=1 \\\n     -s NO_EXIT_RUNTIME=1 \\\n     -s INITIAL_MEMORY=128MB \\\n-    -s WASM=1 \\\n+    -s WASM=0 \\\n+    -s NO_DYNAMIC_EXECUTION=1 \\\n     $STRICTNESS \\\n     -o $BUILD_DIR/canvaskit.js\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Build ",(0,l.kt)("inlineCode",{parentName:"li"},"canvaskit"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd modules/canvaskit\n$ make debug\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Replace this line on ",(0,l.kt)("inlineCode",{parentName:"li"},"$SKIA/modules/canvaskit/canvaskit/bin/canvaskit.js"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-git"},"618c618\n< var isNode = !(new Function('try {return this===window;}catch(e){ return false;}')());\n---\n> var isNode = false;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Copy ",(0,l.kt)("inlineCode",{parentName:"p"},"$SKIA/modules/canvaskit/canvaskit/bin/canvaskit.js")," to\n",(0,l.kt)("inlineCode",{parentName:"p"},"$CREDIBLE/web/vendor/"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Build Credible as described above."))),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("h3",{id:"build-environment-problems"},"Build Environment Problems"),(0,l.kt)("p",null,"If you encounter any errors in the build process described here, please first try\nclean builds of the projects listed."),(0,l.kt)("p",null,"For instance, on Flutter, you can delete build files to start over by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter clean\n")),(0,l.kt)("p",null,"Also, reviewing the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/spruceid/credible/blob/main/install_android_dependencies.sh"},"install_android_dependencies.sh")," script line\nby line or even rerunning it line by line may be helpful."),(0,l.kt)("h3",{id:"opaque-makefile-error-messages"},"Opaque Makefile error messages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NPM may through an opaque error when compiling to WASM or ASM.js if ",(0,l.kt)("inlineCode",{parentName:"li"},"apt\ninstall")," has installed too old of a version of ",(0,l.kt)("inlineCode",{parentName:"li"},"npm")," based on your operating\nsystem kernel. This can be manually overridden from ",(0,l.kt)("inlineCode",{parentName:"li"},"npm"),"'s ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/npm/cli/issues/681#issuecomment-793916156"},"internal\ncommands"))))}p.isMDXComponent=!0}}]);