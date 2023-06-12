# Overview

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

