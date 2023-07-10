"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4007],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,h=u["".concat(i,".").concat(f)]||u[f]||d[f]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),s=(n(7294),n(3905)),o=["components"],l={},i="Verifying a Transfer",p={unversionedId:"developers/cli/transfers/verify-transfer",id:"developers/cli/transfers/verify-transfer",title:"Verifying a Transfer",description:"Prerequisites",source:"@site/source/docs/casper/developers/cli/transfers/verify-transfer.md",sourceDirName:"developers/cli/transfers",slug:"/developers/cli/transfers/verify-transfer",permalink:"/developers/cli/transfers/verify-transfer",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/cli/transfers/verify-transfer.md",tags:[],version:"current",lastUpdatedAt:1688995290,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Transferring Tokens using a Multi-sig Deploy",permalink:"/developers/cli/transfers/multisig-deploy-transfer"},next:{title:"Delegating with the Casper Client",permalink:"/developers/cli/delegate"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Query Transfer Details",id:"query-transfer-details",level:2},{value:"The State Root Hash",id:"the-state-root-hash",level:2},{value:"Query Account State",id:"query-account-state",level:2},{value:"Get Purse Balance",id:"get-purse-balance",level:2}],d={toc:u},f="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)(f,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"verifying-a-transfer"},"Verifying a Transfer"),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Before verifying a transfer, make sure you have:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Initiated a ",(0,s.kt)("a",{parentName:"li",href:"/developers/cli/transfers/direct-token-transfer"},"Direct Transfer")," or ",(0,s.kt)("a",{parentName:"li",href:"/developers/cli/transfers/multisig-deploy-transfer"},"Multi-sig Deploy Transfer")),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("em",{parentName:"li"},"deploy_hash")," of the transfer you want to verify"),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("em",{parentName:"li"},"public key")," hex for the source and target accounts")),(0,s.kt)("h2",{id:"query-transfer-details"},"Query Transfer Details"),(0,s.kt)("p",null,"A transfer is a part of a deploy - in a Casper network, deploys can contain multiple transfers. Execution of the deploy includes writing information about each individual transfer to global state. A unique hash known as the ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer-address")," identifies each transfer. The ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer-address")," consists of a formatted string with a ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer-")," prefix."),(0,s.kt)("p",null,"First, we will use the ",(0,s.kt)("em",{parentName:"p"},"deploy_hash")," to identify the corresponding transfer:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy \\\n--node-address http://<node-ip-address>:7777 \\\n[DEPLOY_HASH]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important response fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"result"."execution_results"."result"."Success"."transfers"')," - List of transfers contained in a successful deploy.")),(0,s.kt)("p",null,"After we have obtained the ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer-<hex>")," identifier, we can query transfer details."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n--id 8 \\\n--node-address http://<node-ip-address>:7777 \\\n--state-root-hash <state-root-hash> \\\n--key transfer-<hex>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Request fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - The hex-encoded hash of the state root."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"key")," - The base key for the query. This must be a properly formatted transfer address.")),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Explore the JSON-RPC request and response generated.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 8,\n    "jsonrpc": "2.0",\n    "method": "state_get_item",\n    "params": {\n        "key": "transfer-8d81f4a1411d9481aed9c68cd700c39d870757b0236987bb6b7c2a7d72049c0e",\n        "path": [],\n        "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3"\n    }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 8,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "merkle_proof": "924 chars",\n        "stored_value": {\n            "Transfer": {\n                "amount": "2500000000",\n                "deploy_hash": "ec2d477a532e00b08cfa9447b7841a645a27d34ee12ec55318263617e5740713",\n                "from": "account-hash-b0049301811f23aab30260da66927f96bfae7b99a66eb2727da23bf1427a38f5",\n                "gas": "0",\n                "id": null,\n                "source": "uref-9e90f4bbd8f581816e305eb7ea2250ca84c96e43e8735e6aca133e7563c6f527-007",\n                "target": "uref-6f4026262a505d5e1b0e03b1e3b7ab74a927f8f2868120cf1463813c19acb71e-004",\n                "to": "account-hash-8ae68a6902ff3c029cea32bb67ae76b25d26329219e4c9ceb676745981fd3668"\n            }\n        }\n    }\n}\n'))),(0,s.kt)("p",null,"The query responds with more information about the transfer we conducted: its deploy hash, the account which executed the transfer, the source and target purses, and the target account. We can verify that our transfer processed successfully using this additional information."),(0,s.kt)("h2",{id:"the-state-root-hash"},"The State Root Hash"),(0,s.kt)("p",null,"The state root hash is an identifier of the current network state. It gives a snapshot of the blockchain state at a moment in time. You can use the state root hash to query the network state after deployments."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Sample output of the get-state-root-hash command")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": -550641580167406055,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.4.13",\n        "state_root_hash": "a1f11692c5adc0e8b0a3f83e34d5831593a39ba03c8be73a0ebf7e9d9aadd76b"\n    }\n}\n'))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"After any deploys to the network, you must get the new state root hash to see the new changes reflected. Otherwise, you will be looking at events in the past.")),(0,s.kt)("h2",{id:"query-account-state"},"Query Account State"),(0,s.kt)("p",null,"Here, we will query for information about the ",(0,s.kt)("em",{parentName:"p"},"Source")," account, using the ",(0,s.kt)("inlineCode",{parentName:"p"},"state-root-hash")," of the block containing the transfer:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n--id 4 \\\n--node-address http://<node-ip-address>:7777 \\\n--state-root-hash <state-root-hash> \\\n--key <hex-encoded-source-account-public-key>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Request fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the network state"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"key")," - The base key for the query. This must be a properly formatted public key, account hash, contract address hash, URef, transfer hash, or deploy-info hash.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important response fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"result"."stored_value"."Account"."main_purse"')," - the address of the main purse containing the sender's tokens. In this example, this purse is the source of the tokens transferred")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 4,\n    "jsonrpc": "2.0",\n    "method": "state_get_item",\n    "params": {\n        "key": "account-hash-b0049301811f23aab30260da66927f96bfae7b99a66eb2727da23bf1427a38f5",\n        "path": [],\n        "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3"\n    }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 4,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "merkle_proof": "2228 chars",\n        "stored_value": {\n            "Account": {\n                "account_hash": "account-hash-b0049301811f23aab30260da66927f96bfae7b99a66eb2727da23bf1427a38f5",\n                "action_thresholds": {\n                    "deployment": 1,\n                    "key_management": 1\n                },\n                "associated_keys": [\n                    {\n                        "account_hash": "account-hash-b0049301811f23aab30260da66927f96bfae7b99a66eb2727da23bf1427a38f5",\n                        "weight": 1\n                    }\n                ],\n                "main_purse": "uref-9e90f4bbd8f581816e305eb7ea2250ca84c96e43e8735e6aca133e7563c6f527-007",\n                "named_keys": []\n            }\n        }\n    }\n}\n'))),(0,s.kt)("p",null,"We can repeat the same step to query information about the ",(0,s.kt)("em",{parentName:"p"},"Target")," account:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n--id 5 \\\n--node-address http://<node-ip-address>:7777 \\\n--state-root-hash <state-root-hash> \\\n--key <hex-encoded-target-account-public-key>\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 5,\n    "jsonrpc": "2.0",\n    "method": "state_get_item",\n    "params": {\n        "key": "account-hash-8ae68a6902ff3c029cea32bb67ae76b25d26329219e4c9ceb676745981fd3668",\n        "path": [],\n        "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3"\n    }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 5,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "merkle_proof": "2228 chars",\n        "stored_value": {\n            "Account": {\n                "account_hash": "account-hash-8ae68a6902ff3c029cea32bb67ae76b25d26329219e4c9ceb676745981fd3668",\n                "action_thresholds": {\n                    "deployment": 1,\n                    "key_management": 1\n                },\n                "associated_keys": [\n                    {\n                        "account_hash": "account-hash-8ae68a6902ff3c029cea32bb67ae76b25d26329219e4c9ceb676745981fd3668",\n                        "weight": 1\n                    }\n                ],\n                "main_purse": "uref-6f4026262a505d5e1b0e03b1e3b7ab74a927f8f2868120cf1463813c19acb71e-007",\n                "named_keys": []\n            }\n        }\n    }\n}\n'))),(0,s.kt)("h2",{id:"get-purse-balance"},"Get Purse Balance"),(0,s.kt)("p",null,"All accounts on a Casper network have a purse associated with the Casper system mint, which we call the ",(0,s.kt)("em",{parentName:"p"},"main purse"),". The balance associated with a given purse is recorded in global state, and the value can be queried using the ",(0,s.kt)("inlineCode",{parentName:"p"},"URef")," associated with the purse."),(0,s.kt)("p",null,"Now that we have the source purse address, we can verify its balance using the ",(0,s.kt)("inlineCode",{parentName:"p"},"get-balance")," command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-balance \\\n--id 6 \\\n--node-address http://<node-ip-address>:7777 \\\n--state-root-hash <state-root-hash> \\\n--purse-uref <source-account-purse-uref>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Request fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the state root"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"purse-uref"),' - The URef under which the purse is stored, following the format "uref-<hex_value>".')),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 6,\n    "jsonrpc": "2.0",\n    "method": "state_get_balance",\n    "params": {\n        "purse_uref": "uref-6f4026262a505d5e1b0e03b1e3b7ab74a927f8f2868120cf1463813c19acb71e-007",\n        "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3"\n    }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 6,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "balance_value": "5000000000",\n        "merkle_proof": "2502 chars"\n    }\n}\n'))),(0,s.kt)("p",null,"Similarly, we have the address of the target purse, so we can get its balance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-balance \\\n--id 7 \\\n--node-address http://<node-ip-address>:7777 \\\n--state-root-hash <state-root-hash> \\\n--purse-uref <target-account-purse-uref>\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 7,\n    "jsonrpc": "2.0",\n    "method": "state_get_balance",\n    "params": {\n        "purse_uref": "uref-6f4026262a505d5e1b0e03b1e3b7ab74a927f8f2868120cf1463813c19acb71e-007",\n        "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3"\n    }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 7,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "balance_value": "5000000000",\n        "merkle_proof": "2502 chars"\n    }\n}\n'))))}h.isMDXComponent=!0}}]);