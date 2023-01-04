"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9481],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=h(n),p=o,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var h=2;h<r;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={},l="The Highway Consensus Protocol",h={unversionedId:"design/highway",id:"design/highway",title:"The Highway Consensus Protocol",description:"What is Consensus?",source:"@site/source/docs/casper/design/highway.md",sourceDirName:"design",slug:"/design/highway",permalink:"/design/highway",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/design/highway.md",tags:[],version:"current",lastUpdatedAt:1672831886,formattedLastUpdatedAt:"1/4/2023",frontMatter:{},sidebar:"design",previous:{title:"Network Communication",permalink:"/design/p2p"},next:{title:"Overview of a Casper Network",permalink:"/design/casper-design"}},c={},d=[{value:"What is Consensus?",id:"what-is-consensus",level:2},{value:"What is Highway Consensus?",id:"what-is-highway-consensus",level:2},{value:"How does the Casper Network use Highway?",id:"how-does-the-casper-network-use-highway",level:3},{value:"Dynamic Round Length",id:"dynamic-round-length",level:3},{value:"Eras",id:"eras",level:3},{value:"Finality",id:"finality",level:3}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-highway-consensus-protocol"},"The Highway Consensus Protocol"),(0,r.kt)("h2",{id:"what-is-consensus"},"What is Consensus?"),(0,r.kt)("p",null,"Consensus is the backbone of any distributed network. The decentralized nature of a blockchain requires a method through which disparate entities can agree on one immutable truth. This involves determining the validity of transactions, resolving conflicts, and finalizing blocks to be added to the chain by the network. A consensus protocol is a set of mechanisms and rules within the distributed network with which all actors must comply."),(0,r.kt)("p",null,"These rules outline the type of messages sent over the network, when they are sent and how to process them. Within the context of a blockchain, the consensus protocol decides which blocks are added to the chain by the network and the order in which they are added. This determines the state of the distributed ledger and ensures that all nodes agree on that state."),(0,r.kt)("p",null,"The consensus mechanism will determine how a blockchain meets the following requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Safety")," - All honest nodes eventually agree on the final value. The system is setup in a way where no two honest nodes will report two different blocks at the same height of the blockchain.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Liveness")," - The system continues running and adds new blocks to the chain indefinitely."))),(0,r.kt)("h2",{id:"what-is-highway-consensus"},"What is Highway Consensus?"),(0,r.kt)("p",null,"Casper networks use a consensus protocol called ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2101.02159.pdf"},"Highway"),", ensuring the Safety and Liveness requirements of these networks. Highway is a Byzantine Fault Tolerant protocol requiring a partially synchronous network."),(0,r.kt)("h3",{id:"how-does-the-casper-network-use-highway"},"How does the Casper Network use Highway?"),(0,r.kt)("p",null,"The Casper Network is a ",(0,r.kt)("a",{parentName:"p",href:"/glossary/P/#proof-of-stake"},"Proof-of-Stake")," network in which the on-chain auction contract determines validators participating in Highway. The protocol uses a decentralized network of ",(0,r.kt)("a",{parentName:"p",href:"/glossary/N/#node"},"nodes"),", either bonded or unbonded. Nodes actively participating in the consensus process must stake CSPR tokens and are known as ",(0,r.kt)("a",{parentName:"p",href:"/glossary/V/#validator"},"Validator Nodes"),". The top 100 bidders are selected through the auction contract every era to act as validators in the era after the next (Current Era + 2). Nodes with a greater stake in the network's success have a greater weight in reaching consensus. Highway does not necessitate a Proof-of-Stake method of choosing validators and could theoretically be used alongside a private network with a different model."),(0,r.kt)("p",null,"These validators run a Casper network that will continue to function so long as the amount of faulty or dishonest nodes does not exceed one-third of the total number of nodes in the network. Nodes that are not faulty are ",(0,r.kt)("em",{parentName:"p"},"honest")," nodes. In most cases, the system can assume that more than two-thirds of all nodes will actively collaborate to achieve consensus. Therefore, stronger-than-average finality guarantees occur during periods when all nodes are acting honestly. A block's fault tolerance increases beyond one-third as the protocol continues. If all validators are honest, it approaches 100%."),(0,r.kt)("h3",{id:"dynamic-round-length"},"Dynamic Round Length"),(0,r.kt)("p",null,"Within the Highway protocol, the length of a round is determined dynamically to ensure a suitable amount of time for nodes to gossip all messages through several round trips with honest validators. This ensures that the system maintains liveness by ensuring that all messages are properly gossiped while maintaining a timely addition of blocks to the chain."),(0,r.kt)("h3",{id:"eras"},"Eras"),(0,r.kt)("p",null,"The concept of ",(0,r.kt)("em",{parentName:"p"},"eras")," allows Highway to reduce the overall operational storage requirements of participating nodes while also rotating validators. A new instance of Highway runs every two hours or approximately 220 blocks, depending on current network metrics. This allows for two benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Data Reduction"),' - Older "metadata" used in finalizing certain blocks is no longer useful and can be removed without compromising the immutability of the data stored on the blockchain.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Banning Equivocators")," - Dishonest nodes caught equivocating in a previous era are banned from participating in new eras. This allows honest nodes to begin a new era in the ",(0,r.kt)("em",{parentName:"p"},"relaxed mode"),", no longer needing to send endorsements due to past equivocations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rotating Validators")," - Bonded nodes bid on validator spots each era, with the top 100 highest bidders becoming validators for the era after next (",(0,r.kt)("inlineCode",{parentName:"p"},"N"),"+2)."))),(0,r.kt)("p",null,"In any given era, node operators will bid to become validators that will participate in the consensus mechanism for the era after next (",(0,r.kt)("inlineCode",{parentName:"p"},"N"),"+2). Each time slot within the era will also determine a lead validator. The lead validator proposes new blocks to be added to the chain, which are then gossiped among the network's nodes. These messages show an implicit preference for the lead validator's block due to the GHOST (Greedy Heaviest Observed Sub-Tree) rule. Once this process reaches critical mass, with a sufficient interconnected pattern of messages, it becomes impossible to switch to another block. The selected block is then considered finalized and added to the chain."),(0,r.kt)("p",null,"The final block of an era is a ",(0,r.kt)("em",{parentName:"p"},"switch block")," and forms the initial state of the next era. A new Highway instance begins with the new era, using information contained within the ",(0,r.kt)("em",{parentName:"p"},"switch block")," and a new potential set of validators. More details on the auction process to determine an era's validators can be found within the ",(0,r.kt)("a",{parentName:"p",href:"/economics/consensus/"},"Consensus Economics")," page."),(0,r.kt)("h3",{id:"finality"},"Finality"),(0,r.kt)("p",null,"Finality occurs when the network can be sure that a block will not be altered, reversed, or canceled after addition to the chain. This occurs via consensus, and as all transactions happen within a block, it allows for confirmation that a transaction cannot be changed. After finality, it would require greater than 1/3 of all validators to double-sign to cause a disparity between nodes. In this event, the network would shut down and require a manual restart."),(0,r.kt)("p",null,"On a Casper network, a transaction finalizes alongside the finalizing of the block in which it is included. Validators that equivocate risk eviction, in which the network removes them from the validator set. Therefore, honest nodes receive rewards for their participation, while equivocating nodes risk loss of revenue for acting maliciously."),(0,r.kt)("p",null,"Highway's criterion for detecting finality is the presence of a pattern of messages called a ",(0,r.kt)("inlineCode",{parentName:"p"},"Summit"),". It is an improvement over previous CBC Casper finality criteria, which were more difficult to attain and computationally more expensive to detect. Summits preserve the advantage of tunable fault tolerance while being detected in polynomial time."))}p.isMDXComponent=!0}}]);