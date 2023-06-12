"use strict";(self.webpackChunksaber_book=self.webpackChunksaber_book||[]).push([[569],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="DEX",s={unversionedId:"our-projects/test/dex",id:"our-projects/test/dex",title:"DEX",description:"Overview",source:"@site/docs/our-projects/test/dex.md",sourceDirName:"our-projects/test",slug:"/our-projects/test/dex",permalink:"/saber-book/docs/our-projects/test/dex",draft:!1,editUrl:"https://github.com/SCB-Innovation-Lab/saber-book/tree/master/docs/our-projects/test/dex.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"What is Balancer?",id:"what-is-balancer",level:3},{value:"Frontend",id:"frontend",level:2},{value:"Backend",id:"backend",level:2},{value:"Indexer",id:"indexer",level:2},{value:"Smart Contract",id:"smart-contract",level:2},{value:"Staking",id:"staking",level:2},{value:"Maths",id:"maths",level:2},{value:"AMM",id:"amm",level:2},{value:"Nest.js",id:"nestjs",level:2},{value:"Next.JS",id:"nextjs",level:2},{value:"Smart order router",id:"smart-order-router",level:2},{value:"User Manual",id:"user-manual",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dex"},"DEX"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"A Decentralized Exchange (DEX) typically consists of a series of interconnected smart contracts. In the case of the Balancer Decentralized Finance (DeFi) Application V1, the BFactory and BPool smart contracts play crucial roles in the creation of new pools, liquidity management, and token swapping within the pools."),(0,r.kt)("h3",{id:"what-is-balancer"},"What is Balancer?"),(0,r.kt)("p",null,"Balancer is a decentralized automated market maker (AMM) protocol built on Ethereum that represents a flexible building block for programmable liquidity."),(0,r.kt)("p",null,"By separating the AMM curve logic and math from the core swapping functionality, Balancer becomes an extensible AMM that can incorporate any number of swap curves and pool types. This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Traditional 50/50\xa0\xa0weighted pools"),(0,r.kt)("li",{parentName:"ul"},"Custom weights like 80/20 for controlled exposure"),(0,r.kt)("li",{parentName:"ul"},"Stable swap curves"),(0,r.kt)("li",{parentName:"ul"},"Nested pools (ex:\xa0",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.balancer.fi/concepts/pools/boosted"},"Boosted Pools")),")"),(0,r.kt)("li",{parentName:"ul"},"Pools with changing weights (ex:\xa0",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.balancer.fi/concepts/pools/liquidity-bootstrapping"},"Liquidity Bootstrapping Pools")),")"),(0,r.kt)("li",{parentName:"ul"},"Concentrated liquidity pools"),(0,r.kt)("li",{parentName:"ul"},"Managed pools that allow customizable parameters"),(0,r.kt)("li",{parentName:"ul"},"Entire protocols to be built on top (ex: Gyroscope)")),(0,r.kt)("p",null,"All of the aggregate liquidity is then easily accessilbe for swappers, aggregators, and arbitraugers. The Balancer\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.balancer.fi/concepts/vault"},"Vault")),"\xa0optimizes batching and path logic so that gas costs and capital requirements remain extremely low. Each individual pool and project built on top benefits from the global liquidity within Balancer that brings deep liquidity for base assets and opens up swap paths."),(0,r.kt)("h1",{id:"components"},"Components"),(0,r.kt)("h2",{id:"frontend"},"Frontend"),(0,r.kt)("p",null,"Frontend development for a decentralized exchange (DEX) using Next.js involves building the user interface (UI) and user experience (UX) components for the exchange platform. Next.js is a popular React framework that enables server-side rendering and offers various features to enhance the development process."),(0,r.kt)("p",null,"Remember that building a decentralized exchange involves complex backend processes, including smart contract development, liquidity management, and order matching. The frontend interacts with the backend components through APIs, so collaboration with backend developers is essential to ensure a seamless and secure DEX experience for users."),(0,r.kt)("h2",{id:"backend"},"Backend"),(0,r.kt)("p",null,"Building the backend for a decentralized exchange (DEX) using Nest.js involves implementing the server-side logic and APIs required to handle user requests, interact with the blockchain network, manage liquidity, and execute trades. Nest.js is a powerful TypeScript framework based on Node.js that provides a structured and scalable architecture for building server-side applications."),(0,r.kt)("h2",{id:"indexer"},"Indexer"),(0,r.kt)("p",null,"The BPool and BFactory smart contracts emit events corresponding to specific actions, such as pool creation, liquidity addition or removal, and token swapping. By diligently monitoring these events, it is possible to capture the associated data and store it in a structured database for future retrieval"),(0,r.kt)("p",null,"The captured data is primarily utilized to enhance the user experience and interface of various applications. For instance, in the context of a DEX, this data is employed to calculate important metrics such as Total Value Locked (TVL), Pool Token Amounts, and swap prices. This information is valuable to both application modules and users."),(0,r.kt)("p",null,"While several protocols, including The Graph, offer widely-used blockchain data indexing and APIs for Decentralized Applications (DApps), including Balancer, it is important to note that these protocols may not be universally available as data sources for all blockchain networks. Although some protocols may provide toolsets for running a personal node to index data on an EVM-compatible network, this process involves additional steps and complexities for setup and execution."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:a(2398).Z,width:"1022",height:"536"})),(0,r.kt)("img",{src:"/static/img/docs/our-projects/dex-indexer/Screenshot.png"}),(0,r.kt)("p",null,"In light of these considerations, we have made the decision to develop a small application using the Go programming language for our DEX Proof-of-Concept (PoC) based on Balancer DeFi V1. This application will primarily serve two key functionalities:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Capturing data from smart contract events, processing it, and storing it in our database."),(0,r.kt)("li",{parentName:"ol"},"Exposing an API endpoint that presents liquidity pool information in a specific format, which will be utilized by the Smart Order Routing (SOR) module for our DEX.")),(0,r.kt)("p",null,"For further details and access to the source code repository of our smart contract indexer for Balancer DeFi V1, please visit: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SCB-TechX-Saber-Labs/smart-contract-indexer-for-balancer-v1"},"https://github.com/SCB-TechX-Saber-Labs/smart-contract-indexer-for-balancer-v1")),(0,r.kt)("h2",{id:"smart-contract"},"Smart Contract"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Exchange Proxy"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"batchSwap")," functions allows users to batch execute swaps recommended by ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/balancer/smart-contracts/sor/development"},"off-chain SOR"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"viewSplit")," functions query the ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/balancer/smart-contracts/on-chain-registry"},"On Chain Registry")," to provide best swap information using on-chain data."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"smartSwap")," functions combine view and batch functionality to provide complete optimised on-chain swaps.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Smart Pool"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},'Smart Contract Owned Controlled Pools ("Smart Pools")')),(0,r.kt)("p",{parentName:"li"},"One very powerful feature of Balancer is the concept of Smart Pools. A smart contract controlled pool can fully emulate a finalized pool, while also allowing complex logic to readjust balances, weights, and fees. Some examples include:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://medium.com/balancer-protocol/zero-impermanent-loss-stablecoin-pool-with-lending-interests-a3da6d8bb782"},"An interest bearing stablecoin pool without impermanent loss")),(0,r.kt)("p",{parentName:"li"},"A pool that adjusts swap fees as a function of the volatility of the pool's assets"),(0,r.kt)("p",{parentName:"li"},"A pool that updates weights to implement a particular market strategy (e.g., a ",(0,r.kt)("a",{parentName:"p",href:"https://balancer.finance/2020/03/04/building-liquidity-into-token-distribution/"},"Liquidity Bootstrapping Pool"),")."),(0,r.kt)("p",{parentName:"li"},"More complex ",(0,r.kt)("a",{parentName:"p",href:"https://caia.org/sites/default/files/dynamic_strategies_for_asset_allocation.pdf"},"dynamic strategies")," for asset allocation"),(0,r.kt)("p",{parentName:"li"},"For clarity, here is a graphical representation of the process for creating both Core Pools and Smart Pools - it can be a little confusing keeping all the addresses straight!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interfaces"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BFactory")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BPool")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Exchange Proxy")))),(0,r.kt)("h1",{id:"glossary"},"Glossary"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Core Pool"),": A ",(0,r.kt)("inlineCode",{parentName:"p"},"BPool"),' contract object - this is the "base" pool that actually holds the tokens ',(0,r.kt)("strong",{parentName:"p"},"Balance"),": The total token balance of a pool. Does not refer to any user balance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Denorm"),": Denormalized weight. Weights on a BPool, though often displayed as percentages, are configured and stored in their ",(0,r.kt)("strong",{parentName:"p"},"denormalized")," form. For instance, in a two-token pool with denormalized weights of A=38 and B=2, token A's percentage weight would be 38/(38+2), or 95%. Conversely, token B's proportion would be 2/(38+2), or 5%."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Controller"),': The pool\'s "owner"; an address that can call ',(0,r.kt)("inlineCode",{parentName:"p"},"CONTROL")," capabilities."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Factory"),": The official BPool factory. Pools deployed from this factory appear on Balancer user interfaces (e.g., the ",(0,r.kt)("a",{parentName:"p",href:"https://balancer.exchange/#/swap"},"Exchange")," and ",(0,r.kt)("a",{parentName:"p",href:"https://pools.balancer.exchange/#/"},"Pool Manager"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Smart Pool"),": A contract that owns (i.e., is the ",(0,r.kt)("strong",{parentName:"p"},"controller)"),", ","*",(0,r.kt)("strong",{parentName:"p"},"*","of a")," Core ","*",(0,r.kt)("strong",{parentName:"p"},"*","Pool"),". Much more in Component section."),(0,r.kt)("h1",{id:"technical-reference"},"Technical Reference"),(0,r.kt)("h2",{id:"staking"},"Staking"),(0,r.kt)("p",null,"Users earn reward by staking their token."),(0,r.kt)("p",null,"The amount they earn is reward rate ","*"," amount staked by the user / total staked for every second."),(0,r.kt)("p",null,"reward rate is set by the contract owner."),(0,r.kt)("h2",{id:"maths"},"Maths"),(0,r.kt)("p",null,"You'll find below the formula to compute rewards earned by a user from k to n seconds:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:a(8100).Z,width:"2000",height:"1415"})),(0,r.kt)("img",{src:"/static/img/docs/our-projects/dex-indexer/image.png"}),(0,r.kt)("h2",{id:"amm"},"AMM"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Automated Market Makers (AMMs)")," have been around in some form for as long as trades could be automated, starting in the traditional financial markets. AMMs are essentially automated agents, controlled by algorithms, that define rules for matching buyers and sellers to facilitate trades. Usually AMMs are continuously active in both directions of a trading pair. The liquidity provider's profit comes from the spread between buy and sell prices."),(0,r.kt)("p",null,"Smart contract platforms like Ethereum have brought AMMs to a whole new level. They have, for the first time in history, combined the ",(0,r.kt)("em",{parentName:"p"},"trading algorithms")," with ",(0,r.kt)("em",{parentName:"p"},"custody")," of the underlying assets. This has led to interesting new features like atomic trading (sometimes incorporating ",(0,r.kt)("a",{parentName:"p",href:"https://aave.com/flash-loans"},"flash loans"),"), instant feedback loops for correcting prices offered by an AMM, and more."),(0,r.kt)("h2",{id:"nestjs"},"Nest.js"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nest.js")," is a progressive TypeScript-based framework for building efficient and scalable server-side applications. It is designed to provide a solid architectural foundation by combining elements of Object-Oriented Programming (OOP), Functional Programming (FP), and Reactive Programming."),(0,r.kt)("p",null,"Nest.js follows the modular architecture pattern, allowing developers to structure their applications into modules, each with its own components and dependencies. This modular approach promotes code reusability, maintainability, and separation of concerns."),(0,r.kt)("h2",{id:"nextjs"},"Next.JS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Next.js")," is a popular open-source framework for building modern web applications using React.js. It is designed to facilitate server-side rendering (SSR) and static site generation (SSG) for React applications, providing a powerful and efficient development experience."),(0,r.kt)("p",null,"Next.js offers several key features that make it a preferred choice for building web applications. Firstly, it provides automatic code splitting, enabling efficient loading of JavaScript and CSS assets, resulting in faster page rendering and improved performance. Additionally, it supports server-side rendering, which allows pre-rendering of React components on the server, delivering fully rendered pages to the client for improved SEO and initial page load times."),(0,r.kt)("h2",{id:"smart-order-router"},"Smart order router"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Smart Order Router"),", or ",(0,r.kt)("strong",{parentName:"p"},"SOR")," is an off-chain linear optimization of routing orders across pools for best price execution. It takes as input a desired amount of any token to be traded for another token, and returns a list of pools/amounts that should be traded such that the amount of returned tokens is maximized. The sum of the amounts to be traded with each pool equals the desired amount given as input.SOR exists in the Bronze release as a way to aggregate liquidity across all Balancer pools. Future releases of Balancer will accomplish this on-chain, and allow aggregate contract fillable liquidity.Liquidity aggregators are free to use the SOR npm package or create their own order routing across pools."),(0,r.kt)("h1",{id:"addresses"},"Addresses"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CHAIN")," : Polygon Mumbai"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FACTORY_ADDRESS")," : ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/address/0xa042b348D28b15AE1BDB3B7Aa3aE814057dc508A"},"0xa042b348D28b15AE1BDB3B7Aa3aE814057dc508A")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SECOND_FACTORY_ADDRESS")," : ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/address/0x9A0f08d922E0791fB91758497e298De67203d193"},"0x9A0f08d922E0791fB91758497e298De67203d193")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BANK_ADDRESS")," : ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/address/0x10496929D580e7459137B761C0E1A2A199bEC270"},"0x10496929D580e7459137B761C0E1A2A199bEC270")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BPOOL_ADDRESS :")," ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/address/0xf24Cc920736118DCc9275815586eE3A46C198Fb7"},"0xf24Cc920736118DCc9275815586eE3A46C198Fb7")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"USD")," : ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/address/0x692e428dd09bf3db43fc4b81afee741612567a95"},"0x692E428dD09Bf3Db43fc4b81Afee741612567A95")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"THB")," : ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/address/0x782AD5e91c7b20ADDfCb33A8E808ED73348F0D91"},"0x782AD5e91c7b20ADDfCb33A8E808ED73348F0D91")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"KRW")," : ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/address/0x539b2f52B6E47e0e9599D750C693E6298e6595b8"},"0x539b2f52B6E47e0e9599D750C693E6298e6595b8")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TWD")," : ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/address/0x0Bd6F1D817fA4171F0c1f2ee106D33C224ADEeBA"},"0x0Bd6F1D817fA4171F0c1f2ee106D33C224ADEeBA")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZAR")," : ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/address/0x42a6A7577e14011f7e65749c5B12115FB185c0A1"},"0x42a6A7577e14011f7e65749c5B12115FB185c0A1")),(0,r.kt)("h2",{id:"user-manual"},"User Manual"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://purrfect-impulse-47a.notion.site/Inno-Dex-Docs-2a02ed1d689b427fb3df0eb563386653?pvs=4"},"https://purrfect-impulse-47a.notion.site/Inno-Dex-Docs-2a02ed1d689b427fb3df0eb563386653?pvs=4")))}m.isMDXComponent=!0},2398:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Screenshot-edd67c8c19a236bfe75ef508a0cf6b80.png"},8100:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-cc95af3ec16d28f6ede69e1a0aa91f12.png"}}]);