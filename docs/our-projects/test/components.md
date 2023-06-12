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

![Image](/img/docs/our-projects/dex-indexer/Screenshot.png)


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

## User Manual

https://purrfect-impulse-47a.notion.site/Inno-Dex-Docs-2a02ed1d689b427fb3df0eb563386653?pvs=4
