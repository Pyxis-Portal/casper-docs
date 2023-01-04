"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1337],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9221:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],p={},s="Testing Smart Contracts with NCTL",l={unversionedId:"dapp-dev-guide/building-dapps/nctl-test",id:"dapp-dev-guide/building-dapps/nctl-test",title:"Testing Smart Contracts with NCTL",description:"NCTL effectively simulates a live Casper network. The process for sending a Deploy to an NCTL-based network is therefore similar to doing so on a live network.",source:"@site/source/docs/casper/dapp-dev-guide/building-dapps/nctl-test.md",sourceDirName:"dapp-dev-guide/building-dapps",slug:"/dapp-dev-guide/building-dapps/nctl-test",permalink:"/dapp-dev-guide/building-dapps/nctl-test",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/building-dapps/nctl-test.md",tags:[],version:"current",lastUpdatedAt:1672831886,formattedLastUpdatedAt:"1/4/2023",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Setting up a Local Network with NCTL",permalink:"/dapp-dev-guide/building-dapps/setup-nctl"},next:{title:"Monitoring and Consuming Events",permalink:"/dapp-dev-guide/building-dapps/monitoring-events"}},d={},c=[{value:"Getting Started with NCTL",id:"getting-started-with-nctl",level:2},{value:"NCTL Verification Prior to Testing",id:"nctl-verification-prior-to-testing",level:2},{value:"Installing the Smart Contract",id:"installing-the-smart-contract",level:2},{value:"Verifying Deploy Execution",id:"verifying-deploy-execution",level:2},{value:"Interacting with the Installed Contract",id:"interacting-with-the-installed-contract",level:2},{value:"Verifying Correct Contract Behavior",id:"verifying-correct-contract-behavior",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-smart-contracts-with-nctl"},"Testing Smart Contracts with NCTL"),(0,r.kt)("p",null,"NCTL effectively simulates a live Casper network. The process for sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," to an NCTL-based network is therefore similar to doing so on a live network."),(0,r.kt)("p",null,"Testing ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploys")," prior to sending them to a Casper network ensures that they operate as intended. When working in an environment that requires payment for execution, errors and inefficiencies quickly add up. To this end, Casper provides several layers of testing to identify and rectify any errors. After ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/rust-contracts"},"writing your smart contract")," and testing it ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/testing-contracts"},"using the provided framework"),", NCTL serves as the next step in the process. While testing is entirely optional, it should be considered a best practice to avoid paying for the execution of faulty code."),(0,r.kt)("h2",{id:"getting-started-with-nctl"},"Getting Started with NCTL"),(0,r.kt)("p",null,"Prior to testing a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," through NCTL, you should have the following steps accomplished:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/rust-contracts"},"Completed writing a Deploy"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/testing-contracts"},"Tested the Deploy")," using the Casper testing framework")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/setup-nctl"},"Setup NCTL")," on your system"))),(0,r.kt)("h2",{id:"nctl-verification-prior-to-testing"},"NCTL Verification Prior to Testing"),(0,r.kt)("p",null,"Prior to attempting an NCTL test, you must verify that your local NCTL instance started correctly. Run the following command to view your current node status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nctl-status\n")),(0,r.kt)("p",null,"You should see five nodes ",(0,r.kt)("inlineCode",{parentName:"p"},"RUNNING")," and five ",(0,r.kt)("inlineCode",{parentName:"p"},"STOPPED"),". Further, verify that the node and user information propagated within the ",(0,r.kt)("em",{parentName:"p"},"casper-node/utils/assets")," directory. Each node and user should have the associated ",(0,r.kt)("inlineCode",{parentName:"p"},"Keys")," necessary to interact with the network. Run the following command to view first user details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nctl-view-user-account user=1\n")),(0,r.kt)("h2",{id:"installing-the-smart-contract"},"Installing the Smart Contract"),(0,r.kt)("p",null,"This document assumes that you setup your NCTL network using the standard settings in a directory called ",(0,r.kt)("em",{parentName:"p"},"/casper/"),"."),(0,r.kt)("p",null,"You will need the following information to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"put-deploy")," command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"chain name"),", in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-net-1"),". This will appear in our example put-deploy as ",(0,r.kt)("inlineCode",{parentName:"p"},'--chain-name "casper-net-1"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"secret key")," of the account sending the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy"),". For this example, we are using node-1 as the sender. The secret key file can be found at ",(0,r.kt)("em",{parentName:"p"},"casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem"),". In our example put-deploy, this will appear as ",(0,r.kt)("inlineCode",{parentName:"p"},"--secret-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem"),". If your Deploy is more complex and requires multiple accounts, NCTL also establishes multiple users for testing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"payment amount")," in motes, which should be sufficient to avoid an 'Out of Gas' error. The payment amount will appear in our example put-deploy as ",(0,r.kt)("inlineCode",{parentName:"p"},"--payment-amount 2500000000"),". ",(0,r.kt)("strong",{parentName:"p"},"NCTL tests are not an accurate representation of potential gas costs on a live network. Please see our ",(0,r.kt)("a",{parentName:"strong",href:"/dapp-dev-guide/building-dapps/sending-deploys/#a-note-about-gas-price"},"note about gas prices"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"path")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," that you wish to send to the NCTL network. This will appear in our example put-deploy as ",(0,r.kt)("inlineCode",{parentName:"p"},"--session-path <PATH>")," and will require you to define the path to your specific ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," Wasm.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"node address")," for a node on your NCTL network. In this example, we are using the node at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:11101/rpc"),". On the Casper Mainnet or Testnet, nodes will use port ",(0,r.kt)("inlineCode",{parentName:"p"},"7777"),". This will appear in our example put-deploy as ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-address http://localhost:11101/rpc"),"."))),(0,r.kt)("p",null,"The command to send your ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," should look similar to the following code snippet:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"$(get_path_to_client)")," command assumes that you are operating in an activated NCTL envrionment."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$(get_path_to_client) put-deploy \\\n--chain-name "casper-net-1" \\\n--secret-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--payment-amount 2500000000 \\\n--session-path <PATH> \\\n--node-address http://localhost:11101/rpc\n')),(0,r.kt)("p",null,"The response will return something similar to the following information. Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy_hash"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "id": 4824893960188648146,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "deploy_hash": "8e6309cc37bc58d8fedc1094ee1bd264a636d39fc0e05b5e1d72d98f7b6faf13"\n    }\n}\n')),(0,r.kt)("h2",{id:"verifying-deploy-execution"},"Verifying Deploy Execution"),(0,r.kt)("p",null,"The previous command sent the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," to the NCTL network, but we recommend verifying deploy execution before continuing. The ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy_hash")," received in the response allows you to query the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy"),"'s status."),(0,r.kt)("p",null,"To query the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy"),"'s status, you will pass both the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy_hash")," and the same ",(0,r.kt)("inlineCode",{parentName:"p"},"node-address")," from above using the following command. This will return either an error message in the event of failure or the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," details if it succeeds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$(get_path_to_client) get-deploy 8e6309cc37bc58d8fedc1094ee1bd264a636d39fc0e05b5e1d72d98f7b6faf13 -n http://localhost:11101/rpc\n")),(0,r.kt)("h2",{id:"interacting-with-the-installed-contract"},"Interacting with the Installed Contract"),(0,r.kt)("p",null,"Once your NCTL network executes your ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy"),", you can test the functionality of the installed contract. To do so, you will first need to identify any arguments to pass to the contract, starting with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractHash")," itself. This hash identifies the contract and allows you to target the included entry points. As we used the pre-established node-1 account to ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/sending-deploys"},"send the ",(0,r.kt)("inlineCode",{parentName:"a"},"Deploy")),", we can retrieve the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractHash")," from the node-1 account information. To do so, we will use the following command with a node address and the ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey")," of the node in question."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$(get_path_to_client) get-account-info \\\n--node-address http://localhost:11101/rpc \\\n--public-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/public_key.pem\n")),(0,r.kt)("p",null,"This command will return information pertaining to the account, including the ",(0,r.kt)("inlineCode",{parentName:"p"},"NamedKeys"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractHash")," of the contract to be tested will appear here. The process of calling the contract is similar to that of installing it, as they are both accomplished through sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy"),". In this instance, you will need the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"node address"),", entered in this instance using ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-address http://localhost:11101/rpc"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"chain name"),", entered in this instance using ",(0,r.kt)("inlineCode",{parentName:"p"},'--chain-name "casper-net-1"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"payment amount")," for this ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," in motes, which may need to be adjusted depending on cost. In this instance, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"--payment-amount 500000000"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"session path"),", defining the location of the Wasm bearing file for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy"),". It appears in our example as ",(0,r.kt)("inlineCode",{parentName:"p"},"--session-path <PATH>")," but you must define the path to your specific file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Any ",(0,r.kt)("strong",{parentName:"p"},"session arguments")," specific to the contract that you are testing. Multiple instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"--session-arg")," may be used as necessary to provide values to the contract, including the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractHash")," you acquired above. In the example below, you will see a demonstration of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractHash")," as a session argument as ",(0,r.kt)("inlineCode",{parentName:"p"},"--session-arg \"contract_key:key='hash-8c13aaeef50ae7f447ee21276965c31cfa45c4ea3abb03d35d078cdd6a40e4a'\"")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$(get_path_to_client) put-deploy \\\n--node-address http://localhost:11101/rpc \\\n--chain-name "casper-net-1" \\\n--payment-amount 500000000 \\\n--session-path <PATH> \\\n--session-arg "contract_key:key=\'hash-8c13aaeef50ae7f447ee21276965c31cfa45c4ea3abb03d35d078cdd6a40e4a\'"\n')),(0,r.kt)("h2",{id:"verifying-correct-contract-behavior"},"Verifying Correct Contract Behavior"),(0,r.kt)("p",null,"After calling your installed contract, you can verify that the contract behaved as expected by observing the associated change in ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/installing-contracts/#querying-global-state"},"global state"),". Depending on how your contract functions, this can have different meanings and results. If we use our donation contract from the ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/rust-contracts"},"basic smart contract tutorial"),", the NCTL process would have the following flow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Send a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy"),' to install the "Donation" smart contract.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the execution of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Interact with the installed contract using an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," that calls one or several of the entry points. For example, calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"donate")," entry point to donate an amount to the fundraising purse.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the associated change in global state. Namely, an increase in the balance of the fundraising purse."))))}m.isMDXComponent=!0}}]);