# DEX

## Overview

A Decentralized Exchange (DEX) typically consists of a series of interconnected smart contracts. In the case of the Balancer Decentralized Finance (DeFi) Application V1, the BFactory and BPool smart contracts play crucial roles in the creation of new pools, liquidity management, and token swapping within the pools.

### What is Balancer?

Balancer is a decentralized automated market maker (AMM) protocol built on Ethereum that represents a flexible building block for programmable liquidity.

By separating the AMM curve logic and math from the core swapping functionality, Balancer becomes an extensible AMM that can incorporate any number of swap curves and pool types. This includes:

- Traditional 50/50  weighted pools
- Custom weights like 80/20 for controlled exposure
- Stable swap curves
- Nested pools (ex: **[Boosted Pools](https://docs.balancer.fi/concepts/pools/boosted)**)
- Pools with changing weights (ex: **[Liquidity Bootstrapping Pools](https://docs.balancer.fi/concepts/pools/liquidity-bootstrapping)**)
- Concentrated liquidity pools
- Managed pools that allow customizable parameters
- Entire protocols to be built on top (ex: Gyroscope)

All of the aggregate liquidity is then easily accessilbe for swappers, aggregators, and arbitraugers. The Balancer **[Vault](https://docs.balancer.fi/concepts/vault)** optimizes batching and path logic so that gas costs and capital requirements remain extremely low. Each individual pool and project built on top benefits from the global liquidity within Balancer that brings deep liquidity for base assets and opens up swap paths.

# Components

## Frontend

Frontend development for a decentralized exchange (DEX) using Next.js involves building the user interface (UI) and user experience (UX) components for the exchange platform. Next.js is a popular React framework that enables server-side rendering and offers various features to enhance the development process.

Remember that building a decentralized exchange involves complex backend processes, including smart contract development, liquidity management, and order matching. The frontend interacts with the backend components through APIs, so collaboration with backend developers is essential to ensure a seamless and secure DEX experience for users.

## Backend

Building the backend for a decentralized exchange (DEX) using Nest.js involves implementing the server-side logic and APIs required to handle user requests, interact with the blockchain network, manage liquidity, and execute trades. Nest.js is a powerful TypeScript framework based on Node.js that provides a structured and scalable architecture for building server-side applications.

## Indexer

The BPool and BFactory smart contracts emit events corresponding to specific actions, such as pool creation, liquidity addition or removal, and token swapping. By diligently monitoring these events, it is possible to capture the associated data and store it in a structured database for future retrieval

The captured data is primarily utilized to enhance the user experience and interface of various applications. For instance, in the context of a DEX, this data is employed to calculate important metrics such as Total Value Locked (TVL), Pool Token Amounts, and swap prices. This information is valuable to both application modules and users.

While several protocols, including The Graph, offer widely-used blockchain data indexing and APIs for Decentralized Applications (DApps), including Balancer, it is important to note that these protocols may not be universally available as data sources for all blockchain networks. Although some protocols may provide toolsets for running a personal node to index data on an EVM-compatible network, this process involves additional steps and complexities for setup and execution.

<img src="/static/img/docs/our-projects/dex-indexer/Screenshot 2566-06-07 at 14.09.50.png" />

In light of these considerations, we have made the decision to develop a small application using the Go programming language for our DEX Proof-of-Concept (PoC) based on Balancer DeFi V1. This application will primarily serve two key functionalities:

1. Capturing data from smart contract events, processing it, and storing it in our database.
2. Exposing an API endpoint that presents liquidity pool information in a specific format, which will be utilized by the Smart Order Routing (SOR) module for our DEX.

For further details and access to the source code repository of our smart contract indexer for Balancer DeFi V1, please visit: https://github.com/SCB-TechX-Saber-Labs/smart-contract-indexer-for-balancer-v1

## Smart Contract

- Exchange Proxy

  `batchSwap` functions allows users to batch execute swaps recommended by [off-chain SOR](https://www.notion.so/balancer/smart-contracts/sor/development).

  `viewSplit` functions query the [On Chain Registry](https://www.notion.so/balancer/smart-contracts/on-chain-registry) to provide best swap information using on-chain data.

  `smartSwap` functions combine view and batch functionality to provide complete optimised on-chain swaps.

- Smart Pool

  **Smart Contract Owned Controlled Pools ("Smart Pools")**

  One very powerful feature of Balancer is the concept of Smart Pools. A smart contract controlled pool can fully emulate a finalized pool, while also allowing complex logic to readjust balances, weights, and fees. Some examples include:

  [An interest bearing stablecoin pool without impermanent loss](https://medium.com/balancer-protocol/zero-impermanent-loss-stablecoin-pool-with-lending-interests-a3da6d8bb782)

  A pool that adjusts swap fees as a function of the volatility of the pool's assets

  A pool that updates weights to implement a particular market strategy (e.g., a [Liquidity Bootstrapping Pool](https://balancer.finance/2020/03/04/building-liquidity-into-token-distribution/)).

  More complex [dynamic strategies](https://caia.org/sites/default/files/dynamic_strategies_for_asset_allocation.pdf) for asset allocation

  For clarity, here is a graphical representation of the process for creating both Core Pools and Smart Pools - it can be a little confusing keeping all the addresses straight!

- Interfaces

  `BFactory`

  `BPool`

  `Exchange Proxy`

# Glossary

**Core Pool**: A `BPool` contract object - this is the "base" pool that actually holds the tokens **Balance**: The total token balance of a pool. Does not refer to any user balance.

**Denorm**: Denormalized weight. Weights on a BPool, though often displayed as percentages, are configured and stored in their **denormalized** form. For instance, in a two-token pool with denormalized weights of A=38 and B=2, token A's percentage weight would be 38/(38+2), or 95%. Conversely, token B's proportion would be 2/(38+2), or 5%.

**Controller**: The pool's "owner"; an address that can call `CONTROL` capabilities.

**Factory**: The official BPool factory. Pools deployed from this factory appear on Balancer user interfaces (e.g., the [Exchange](https://balancer.exchange/#/swap) and [Pool Manager](https://pools.balancer.exchange/#/)).

**Smart Pool**: A contract that owns (i.e., is the **controller)**, \***\*of a** Core \***\*Pool**. Much more in Component section.


# Technical Reference

## Staking

Users earn reward by staking their token.

The amount they earn is reward rate \* amount staked by the user / total staked for every second.

reward rate is set by the contract owner.

## Maths

You'll find below the formula to compute rewards earned by a user from k to n seconds:

<img src="/static/img/docs/our-projects/dex-indexer/image.png" />

## AMM

**Automated Market Makers (AMMs)** have been around in some form for as long as trades could be automated, starting in the traditional financial markets. AMMs are essentially automated agents, controlled by algorithms, that define rules for matching buyers and sellers to facilitate trades. Usually AMMs are continuously active in both directions of a trading pair. The liquidity provider's profit comes from the spread between buy and sell prices.

Smart contract platforms like Ethereum have brought AMMs to a whole new level. They have, for the first time in history, combined the _trading algorithms_ with _custody_ of the underlying assets. This has led to interesting new features like atomic trading (sometimes incorporating [flash loans](https://aave.com/flash-loans)), instant feedback loops for correcting prices offered by an AMM, and more.

## Nest.js

**Nest.js** is a progressive TypeScript-based framework for building efficient and scalable server-side applications. It is designed to provide a solid architectural foundation by combining elements of Object-Oriented Programming (OOP), Functional Programming (FP), and Reactive Programming.

Nest.js follows the modular architecture pattern, allowing developers to structure their applications into modules, each with its own components and dependencies. This modular approach promotes code reusability, maintainability, and separation of concerns.


## Next.JS

**Next.js** is a popular open-source framework for building modern web applications using React.js. It is designed to facilitate server-side rendering (SSR) and static site generation (SSG) for React applications, providing a powerful and efficient development experience.

Next.js offers several key features that make it a preferred choice for building web applications. Firstly, it provides automatic code splitting, enabling efficient loading of JavaScript and CSS assets, resulting in faster page rendering and improved performance. Additionally, it supports server-side rendering, which allows pre-rendering of React components on the server, delivering fully rendered pages to the client for improved SEO and initial page load times.


## Smart order router

**Smart Order Router**, or **SOR** is an off-chain linear optimization of routing orders across pools for best price execution. It takes as input a desired amount of any token to be traded for another token, and returns a list of pools/amounts that should be traded such that the amount of returned tokens is maximized. The sum of the amounts to be traded with each pool equals the desired amount given as input.SOR exists in the Bronze release as a way to aggregate liquidity across all Balancer pools. Future releases of Balancer will accomplish this on-chain, and allow aggregate contract fillable liquidity.Liquidity aggregators are free to use the SOR npm package or create their own order routing across pools.

# Addresses

**CHAIN** : Polygon Mumbai

**FACTORY_ADDRESS** : [0xa042b348D28b15AE1BDB3B7Aa3aE814057dc508A](https://mumbai.polygonscan.com/address/0xa042b348D28b15AE1BDB3B7Aa3aE814057dc508A)

**SECOND_FACTORY_ADDRESS** : [0x9A0f08d922E0791fB91758497e298De67203d193](https://mumbai.polygonscan.com/address/0x9A0f08d922E0791fB91758497e298De67203d193)

**BANK_ADDRESS** : [0x10496929D580e7459137B761C0E1A2A199bEC270](https://mumbai.polygonscan.com/address/0x10496929D580e7459137B761C0E1A2A199bEC270)

**BPOOL_ADDRESS :** [0xf24Cc920736118DCc9275815586eE3A46C198Fb7](https://mumbai.polygonscan.com/address/0xf24Cc920736118DCc9275815586eE3A46C198Fb7)

**USD** : [0x692E428dD09Bf3Db43fc4b81Afee741612567A95](https://mumbai.polygonscan.com/address/0x692e428dd09bf3db43fc4b81afee741612567a95)

**THB** : [0x782AD5e91c7b20ADDfCb33A8E808ED73348F0D91](https://mumbai.polygonscan.com/address/0x782AD5e91c7b20ADDfCb33A8E808ED73348F0D91)

**KRW** : [0x539b2f52B6E47e0e9599D750C693E6298e6595b8](https://mumbai.polygonscan.com/address/0x539b2f52B6E47e0e9599D750C693E6298e6595b8)

**TWD** : [0x0Bd6F1D817fA4171F0c1f2ee106D33C224ADEeBA](https://mumbai.polygonscan.com/address/0x0Bd6F1D817fA4171F0c1f2ee106D33C224ADEeBA)

**ZAR** : [0x42a6A7577e14011f7e65749c5B12115FB185c0A1](https://mumbai.polygonscan.com/address/0x42a6A7577e14011f7e65749c5B12115FB185c0A1)


## User Manual

https://purrfect-impulse-47a.notion.site/Inno-Dex-Docs-2a02ed1d689b427fb3df0eb563386653?pvs=4
