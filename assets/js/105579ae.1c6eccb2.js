"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6621],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,y=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1920:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],p={},s="Signing Deploys",l={unversionedId:"developers/dapps/signing-a-deploy",id:"developers/dapps/signing-a-deploy",title:"Signing Deploys",description:"When creating a Deploy to be executed on a Casper network, the account owner, or more accurately, enough authorized signers must sign the deploy using their account's cryptographic key-pair. This key-pair is a combination of the account's secret and public keys. The signatures attached to the Deploy allow the network to verify that it should be executed.",source:"@site/source/docs/casper/developers/dapps/signing-a-deploy.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/signing-a-deploy",permalink:"/developers/dapps/signing-a-deploy",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/signing-a-deploy.md",tags:[],version:"current",lastUpdatedAt:1688995290,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Front-end Template with React",permalink:"/developers/dapps/template-frontend"},next:{title:"Sending Deploys to a Casper network using the Rust Client",permalink:"/developers/dapps/sending-deploys"}},c={},d=[{value:"Public Key Cryptography",id:"public-key-cryptography",level:2}],u={toc:d},h="wrapper";function y(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"signing-deploys"},"Signing Deploys"),(0,o.kt)("p",null,"When creating a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#serialization-standard-deploy"},(0,o.kt)("inlineCode",{parentName:"a"},"Deploy"))," to be executed on a Casper network, the account owner, or more accurately, enough authorized signers must sign the deploy using their account's cryptographic key-pair. This key-pair is a combination of the account's secret and public keys. The signatures attached to the Deploy allow the network to verify that it should be executed."),(0,o.kt)("p",null,"When a signature is attached to a deploy, it is paired with the public key of the signer, and referred to as an ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#approval"},(0,o.kt)("inlineCode",{parentName:"a"},"Approval")),". Every valid deploy has at least one approval."),(0,o.kt)("p",null,"The signature creation process begins with the hashing of the payment and session of the deploy to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"BodyHash"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"BodyHash")," becomes a component of the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#deploy-header"},(0,o.kt)("inlineCode",{parentName:"a"},"DeployHeader"))," as outlined in the serialization standard. From there, the ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployHeader")," can be hashed to create the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#deploy-hash"},(0,o.kt)("inlineCode",{parentName:"a"},"DeployHash")),". As outlined above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployHash")," is then combined with the account's key-pair to create the deploy's signature."),(0,o.kt)("p",null,"As the ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployHash")," contains a hash of the deploy's body within, any variation to any aspect of the deploy or sending account's keys would render the ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployHash")," invalid."),(0,o.kt)("h2",{id:"public-key-cryptography"},"Public Key Cryptography"),(0,o.kt)("p",null,"Casper networks are compatible with both ",(0,o.kt)("inlineCode",{parentName:"p"},"Ed25519")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"secp256k1")," public key cryptography. When ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard"},"serialized"),", public keys and signatures are prefixed with a single byte, used as a tag to denote the applicable algorithm. Ed25519 public keys and signatures are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", whereas secp256k1 are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("p",null,"Casper uses ",(0,o.kt)("inlineCode",{parentName:"p"},"blake2b")," hashing within our ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard"},"serialization"),". However, these hashed values will be hashed once again when they are signed over. The type of hashing depends on the associated keypair algorithm as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ed25519 signs over a SHA-512 digest.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"secp256k1 signs over a SHA-256 digest."))))}y.isMDXComponent=!0}}]);