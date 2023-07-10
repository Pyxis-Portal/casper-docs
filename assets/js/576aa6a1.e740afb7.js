"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1268],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2227:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={},p="Prerequisites",l={unversionedId:"developers/dapps/prerequisites",id:"developers/dapps/prerequisites",title:"Prerequisites",description:"Before trying your hand at dApp development on a Casper network, there are a few things you should do first:",source:"@site/source/docs/casper/developers/dapps/prerequisites.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/prerequisites",permalink:"/developers/dapps/prerequisites",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/prerequisites.md",tags:[],version:"current",lastUpdatedAt:1688995290,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Overview",permalink:"/developers/dapps/"},next:{title:"SDK Client Libraries",permalink:"/sdk"}},u={},d=[{value:"Development Considerations",id:"development-considerations",level:2}],c={toc:d},f="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before trying your hand at dApp development on a Casper network, there are a few things you should do first:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Be sure you understand the language(s) you are developing in."),(0,o.kt)("p",{parentName:"li"},"Before beginning with one or more of the SDKs, ensure that you are familiar with the underlying language itself. There are many guides and tutorials available online to help you."),(0,o.kt)("p",{parentName:"li"},"The preferred stack for building on Casper is JavaScript using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-js-sdk"},"Casper JS SDK"),", however there are many more SDKs available for a variety of different programming languages. Read about and examine the other available SDKs in the ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"Introduction to SDKs"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Familiarize yourself with the fundamentals of Casper networks."),(0,o.kt)("p",{parentName:"li"},"Casper networks are Proof-of-Stake smart contract blockchains written in Rust. Their architecture, from how they validates transactions to how they reach consensus, should be well understood before developing dApps that interact with them. Read up on Casper network design principles in the ",(0,o.kt)("a",{parentName:"p",href:"/design"},"design section"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Read the documentation or source code of your chosen SDK."),(0,o.kt)("p",{parentName:"li"},"Many of the Casper SDKs have documentation available to help you get a full grasp of their functions and methods. In some cases, documentation is written in the source files and rendered using a markup language. Check the repository of your preferred SDK(s) for links to documentation. There are also universal guides to teach you how to perform different functionalities using any of the available SDKs, see ",(0,o.kt)("a",{parentName:"p",href:"/developers/dapps/sdk/client-library-usage"},"Client Library Usage"),"."))),(0,o.kt)("h2",{id:"development-considerations"},"Development Considerations"),(0,o.kt)("p",null,"When developing a public dApp for a Casper network, it is important to keep security in mind and write your smart contract(s) and interface(s) with caution and care, especially if your dApp interacts with tokens of value."),(0,o.kt)("p",null,"To ensure the highest level of security, consider the following practices:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Code review and auditing: Have your smart contracts and interfaces thoroughly reviewed and audited by experienced professionals. This will help identify any vulnerabilities, bugs, or potential exploits in your code."),(0,o.kt)("li",{parentName:"ol"},"Implement best practices: Adhere to industry best practices in smart contract and dApp development. This includes following established design patterns, using secure coding techniques, and staying updated on the latest vulnerabilities and attack vectors."),(0,o.kt)("li",{parentName:"ol"},"Testing and simulation: Conduct rigorous testing and simulation of your smart contracts and interfaces. This will help uncover any potential issues or weaknesses before deploying them on the mainnet."),(0,o.kt)("li",{parentName:"ol"},"Plan for upgrades and bug fixes: Design your smart contracts to take advantage of Casper's support for smart contract upgradability. By doing so, you can ensure that your dApp remains secure and adaptable as the Casper ecosystem evolves, enabling seamless integration of future upgrades and bug fixes."),(0,o.kt)("li",{parentName:"ol"},"Monitor and maintain: Regularly monitor your dApp's performance and security once it is deployed. This will help you quickly identify and address any potential threats or vulnerabilities."),(0,o.kt)("li",{parentName:"ol"},"Educate users: Provide clear documentation and guidance to your dApp users, helping them understand how to use your application securely and effectively.")),(0,o.kt)("p",null,"By taking these precautions and focusing on security throughout the development process, you can minimize risks and build a more robust and reliable dApp for the Casper Network."))}m.isMDXComponent=!0}}]);