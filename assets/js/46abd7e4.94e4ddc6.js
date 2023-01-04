"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8808],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?o.createElement(k,a(a({ref:n},c),{},{components:t})):o.createElement(k,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7787:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var o=t(3117),i=t(102),r=(t(7294),t(3905)),a=["components"],l={},s="Staging Files for a New Network",p={unversionedId:"workflow/staging-files-for-new-network",id:"workflow/staging-files-for-new-network",title:"Staging Files for a New Network",description:"Staging files is not needed for already established running networks.",source:"@site/source/docs/casper/workflow/staging-files-for-new-network.md",sourceDirName:"workflow",slug:"/workflow/staging-files-for-new-network",permalink:"/workflow/staging-files-for-new-network",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/staging-files-for-new-network.md",tags:[],version:"current",lastUpdatedAt:1672831886,formattedLastUpdatedAt:"1/4/2023",frontMatter:{},sidebar:"workflow",previous:{title:"Set Up a Private Casper Network",permalink:"/workflow/setup-private-network"},next:{title:"Development Prerequisites",permalink:"/workflow/setup"}},c={},d=[{value:"Hosting Server",id:"hosting-server",level:2},{value:"More on <code>protocol_versions</code>",id:"more-on-protocol_versions",level:3},{value:"Protocol Version",id:"protocol-version",level:2},{value:"Network Configuration File",id:"network-configuration-file",level:2},{value:"Setup Configuration Files",id:"setup-configuration-files",level:2},{value:"chainspec.toml",id:"chainspectoml",level:3},{value:"config-example.toml",id:"config-exampletoml",level:3},{value:"Staging a Protocol Version",id:"staging-a-protocol-version",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"staging-files-for-a-new-network"},"Staging Files for a New Network"),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Staging files is not needed for already established running networks."),(0,r.kt)("p",{parentName:"div"},"Only use these instructions if you are creating a new Casper network and hosting protocol files for this network."))),(0,r.kt)("h2",{id:"hosting-server"},"Hosting Server"),(0,r.kt)("p",null,"Files for staging protocol versions are hosted on a typical HTTP(S) server."),(0,r.kt)("p",null,"Scripts included with the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," have network configurations for Mainnet and Testnet. These scripts point to the server hosting files and network name."),(0,r.kt)("p",null,"Since a given server can be used for multiple networks, a network named directory is used to hold files for that network."),(0,r.kt)("p",null,"This is a description of Mainnet protocol version hosting (with network name: ",(0,r.kt)("inlineCode",{parentName:"p"},"casper"),")."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"genesis.casperlab.io")," is the web server URL with the following directory structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"casper"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"protocol_versions")," - File listing active protocol versions so scripts know what directories to use"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1_0_0")," - Genesis protocol version",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config.tar.gz")," - Configuration files to be expanded into ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/casper/1_0_0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bin.tar.gz")," - Binary files to be expanded into ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/casper/bin/1_0_0")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1_1_0")," - First upgrade",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config.tar.gz")," - Configuration files to be expanded into ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/casper/1_1_0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bin.tar.gz")," - Binary files to be expanded into ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/casper/bin/1_1_0")))),(0,r.kt)("li",{parentName:"ul"},"... (skipping many other protocol versions)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1_4_6")," - A later upgrade",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config.tar.gz")," - Configuration files to be expanded into ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/casper/1_4_6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bin.tar.gz")," - Binary files to be expanded into ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/casper/bin/1_4_6"))))))),(0,r.kt)("h3",{id:"more-on-protocol_versions"},"More on ",(0,r.kt)("inlineCode",{parentName:"h3"},"protocol_versions")),(0,r.kt)("p",null,"At the root of the hosting server directory for a given network, a ",(0,r.kt)("inlineCode",{parentName:"p"},"protocol_versions")," file exists. This holds the valid protocol versions for a network."),(0,r.kt)("p",null,"We can look at this manually on Mainnet using ",(0,r.kt)("em",{parentName:"p"},"curl"),". As of writing this, ",(0,r.kt)("inlineCode",{parentName:"p"},"1.4.6")," is the latest version and the contents of this file will change."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ curl -s genesis.casperlabs.io/casper/protocol_versions\n1_0_0\n1_1_0\n1_1_2\n1_2_0\n1_2_1\n1_3_2\n1_3_4\n1_4_1\n1_4_3\n1_4_4\n1_4_5\n1_4_6\n\n")),(0,r.kt)("p",null,"We should find ",(0,r.kt)("inlineCode",{parentName:"p"},"bin.tar.gz")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config.tar.gz")," in those directories under ",(0,r.kt)("inlineCode",{parentName:"p"},"casper"),"."),(0,r.kt)("h2",{id:"protocol-version"},"Protocol Version"),(0,r.kt)("p",null,"The protocol version of a network is not related to the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," version. In Mainnet, these have often been the same. However, with a new network, you would use the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," version for your ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.0")," protocol."),(0,r.kt)("h2",{id:"network-configuration-file"},"Network Configuration File"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," package is installed, both ",(0,r.kt)("inlineCode",{parentName:"p"},"casper.conf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-test.conf")," are installed in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/casper/network_configs"),". Once a valid config file for a new network is copied to this location, all commands with ",(0,r.kt)("em",{parentName:"p"},"node_util.py")," will work as they do on existing networks."),(0,r.kt)("p",null,"By convention, we name the config file the same as the network. So Mainnet has a network name of ",(0,r.kt)("inlineCode",{parentName:"p"},"casper")," and we use ",(0,r.kt)("inlineCode",{parentName:"p"},"casper.conf")," for the config file."),(0,r.kt)("p",null,"For a new network using server ",(0,r.kt)("inlineCode",{parentName:"p"},"casper.mydomain.com")," to host files for ",(0,r.kt)("inlineCode",{parentName:"p"},"our-network")," network, we would have a ",(0,r.kt)("inlineCode",{parentName:"p"},"our-network.conf")," file that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SOURCE_URL=casper.mydomain.com\nNETWORK_NAME=our-network\n")),(0,r.kt)("p",null,"Host this ",(0,r.kt)("inlineCode",{parentName:"p"},"our-network.conf")," in the root of ",(0,r.kt)("inlineCode",{parentName:"p"},"casper.mydomain.com/our-network")," at the same level as ",(0,r.kt)("inlineCode",{parentName:"p"},"protocol_versions"),"."),(0,r.kt)("p",null,"This allows any node which wants to use the new network to run the following to install this configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/casper/network_configs\nsudo -u casper curl -JLO casper.mydomain.com/our-network/our-network.conf\n")),(0,r.kt)("p",null,"Any command needing a network config from ",(0,r.kt)("inlineCode",{parentName:"p"},"node_util.py")," can use ",(0,r.kt)("inlineCode",{parentName:"p"},"our-network.conf"),"."),(0,r.kt)("p",null,"Staging protocol versions for a new node with this network or staging an upcoming upgrade would just need this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/node_util.py stage_protocols our-network.conf\n")),(0,r.kt)("h2",{id:"setup-configuration-files"},"Setup Configuration Files"),(0,r.kt)("p",null,"For a network to be started, we to build the configuration files for a certain genesis time and with nodes that will be running. These files need to be configured in advanced, so a genesis time should be selected that allows packaging the files, loading onto nodes and starting nodes prior to the genesis time."),(0,r.kt)("h3",{id:"chainspectoml"},"chainspec.toml"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/glossary/C/#chainspec"},"chainspec.toml")," file is configuration for the network and must be exactly the same on all nodes."),(0,r.kt)("p",null,"The name for a network is specified ",(0,r.kt)("inlineCode",{parentName:"p"},"network.name"),"."),(0,r.kt)("p",null,"Each protocol will have a ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"activation_point"),". At genesis this is a date and time in format shown below. For future upgrades it would be an integer of the ",(0,r.kt)("inlineCode",{parentName:"p"},"era_id")," for activation of the upgrade."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[protocol]\nversion = '1.0.0'\nactivation_point = '2022-08-01T10:00:00Z'\n\n[network]\nname = 'mynetwork'\n")),(0,r.kt)("h3",{id:"config-exampletoml"},"config-example.toml"),(0,r.kt)("p",null,"The config-example.toml is used to generate config.toml for a protocol after the node's IP is inserted. The ",(0,r.kt)("inlineCode",{parentName:"p"},"public_address")," is auto-detected with ",(0,r.kt)("inlineCode",{parentName:"p"},"node_util.py stage_protocols"),". If using a NAT environment, the public IP can be specified with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ip")," argument."),(0,r.kt)("p",null,"This file should have ",(0,r.kt)("inlineCode",{parentName:"p"},"known_addresses")," added that are relevant to the network. Nodes that will be genesis validators are added to this list in the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[network]\nknown_addresses = ['<ip 1>:35000','<ip 2>:35000','<ip 3>:35000']\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," can be setup to customized fields for a given node. ",(0,r.kt)("inlineCode",{parentName:"p"},"config-example.toml")," is a default configuration."),(0,r.kt)("h2",{id:"staging-a-protocol-version"},"Staging a Protocol Version"),(0,r.kt)("p",null,"For the initial genesis protocol version or future upgrade protocol versions, you will typically use prebuilt and tested ",(0,r.kt)("inlineCode",{parentName:"p"},"bin.tar.gz")," that have been tested and staged for existing networks. The ",(0,r.kt)("inlineCode",{parentName:"p"},"config.tar.gz")," file must be customized for the specific network with a network name, protocol version and activation point at the very least."),(0,r.kt)("p",null,"These archives should be created with no directory information stored. This is done by using ",(0,r.kt)("inlineCode",{parentName:"p"},"tar")," in the same directory as the files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir config\ncd config\nmv [source of chainspec.toml] ./chainspec.toml\nmv [source of config-example.toml] ./config-example.toml\ntar -czvf ../config.tar.gz .\n")),(0,r.kt)("p",null,"You can test what was compressed with untar'ing the file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir conftest\ncd conftest\ntar -xzvf ../config.tar.gz .\n")),(0,r.kt)("p",null,"This will expand files for verification."),(0,r.kt)("p",null,"For custom ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," builds, the minimum contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"bin.tar.gz")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," executable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir bin\ncd bin\ncp [source of casper-node] ./casper-node\ntar -czvf ../bin.tar.gz .\n")),(0,r.kt)("p",null,"A directory for the protocol_version will be created on the server. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"1_1_0"),"."),(0,r.kt)("p",null,"We will copy ",(0,r.kt)("inlineCode",{parentName:"p"},"bin.tar.gz")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config.tar.gz")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"1_1_0"),". Once this is done, we are safe to update ",(0,r.kt)("inlineCode",{parentName:"p"},"protocol_versions")," by appending ",(0,r.kt)("inlineCode",{parentName:"p"},"1_1_0")," to the end of the file and uploading it into the root of the network directory."),(0,r.kt)("p",null,"Any node that runs the following command will get this new upgrade:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/node_util.py stage_protocols <network.conf>\n")))}m.isMDXComponent=!0}}]);