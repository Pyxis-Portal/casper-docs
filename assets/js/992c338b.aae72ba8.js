"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1073],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4246:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={},c="Staking Concepts",p={unversionedId:"concepts/economics/concepts",id:"concepts/economics/concepts",title:"Staking Concepts",description:"The Casper network is a Proof-of-Stake blockchain that allows validators to stake the Casper native token CSPR on the network. Validators receive CSPR as an incentive for continuing to maintain and secure the network. CSPR rewards are distributed as blocks are validated into existence and organized into eras.",source:"@site/source/docs/casper/concepts/economics/concepts.md",sourceDirName:"concepts/economics",slug:"/concepts/economics/concepts",permalink:"/concepts/economics/concepts",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/economics/concepts.md",tags:[],version:"current",lastUpdatedAt:1688995290,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{},sidebar:"concepts",previous:{title:"Gas and the Casper Blockchain",permalink:"/concepts/economics/gas-concepts"},next:{title:"Staking",permalink:"/staking"}},l={},u=[],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"staking-concepts"},"Staking Concepts"),(0,a.kt)("p",null,"The Casper network is a Proof-of-Stake blockchain that allows validators to stake the Casper native token CSPR on the network. Validators receive CSPR as an incentive for continuing to maintain and secure the network. CSPR rewards are distributed as blocks are validated into existence and organized into eras."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Consensus mechanism:")," Casper operates using a Proof-of-Stake consensus mechanism per the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casper-network/highway"},"Highway Protocol"),", a specification of Correct-by-Construction Casper (CBC Casper)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Number of validators:")," The Casper Mainnet supports up to 100 validators on the network. This number is chosen to strike a balance between performance and decentralization. This platform parameter can be increased through upgrades as development continues and performance improves. In addition, validators can stake on the Casper Mainnet through a process of permission-less bonding by participating in an auction for the validator slot."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permission-less bonding:")," For validators to begin staking and earning rewards, they must win a staking auction by competing with current and prospective validators to supply one of the forthcoming top stakes for a given era. This process is permission-less, meaning validators can join and leave the auction without restrictions, except for a waiting period to unlock staked tokens."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Unbonding:")," To detach from a Casper network, it takes seven eras for both validators and delegators. Neither validators nor delegators receive rewards during the seven eras required for unbonding, as they are not actively contributing to the network's security during that time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Eras and block times:")," An era on Casper is roughly 2 hours long. Casper's Highway protocol allows validators to propose blocks as quickly as network conditions allow, subject to a platform-wide limit that may be adjusted with upgrades. We anticipate block times to last between thirty seconds and eight minutes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Block rewards:")," Block time is orthogonal to rewards, so there is no precise reward per block. Instead, the number of rewards is split proportionally among stakes and reduced for failure to participate in the protocol promptly."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reward cycle:")," Rewards are distributed to validators and delegators once per era."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Token supply and inflation:")," Mainnet launched with ten billion CSPR at the time of genesis. The target annual supply growth rate is 8%."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Annual reward percentage:")," Validators on the Casper Mainnet earn between 10% and 20% of their staked CSPR in the first year of the Mainnet operation, with regular participation under expected network conditions. The growth of individual stakes is dependent on total active stake, as only a fixed number of tokens is created per era."),(0,a.kt)("p",null,"Please visit the ",(0,a.kt)("a",{parentName:"p",href:"/staking"},"Staking Guide")," for further details on the staking mechanism."))}f.isMDXComponent=!0}}]);