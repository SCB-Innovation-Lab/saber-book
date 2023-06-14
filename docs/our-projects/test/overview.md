# Overview

A Decentralized Exchange (DEX) typically consists of a series of interconnected smart contracts. In the case of the Balancer Decentralized Finance (DeFi) Application V1, the BFactory and BPool smart contracts play crucial roles in the creation of new pools, liquidity management, and token swapping within the pools.

Decentralized exchanges operate on blockchain technology, which offers transparency and immutability. Transactions and smart contracts are publicly verifiable, ensuring that the exchange operates in a trustless and transparent manner. Building your own DEX allows you to establish a reputation for transparency and trust, attracting users who value these principles.

By building your own DEX, you have the opportunity to innovate and introduce new features that enhance the user experience. You can experiment with novel trading mechanisms, integrate new tokens, or explore unique governance models. This flexibility allows you to adapt to market demands and differentiate your DEX from competitors.

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

## Why choose Balancer Protocol?

Balancer is a powerful automated portfolio manager that allows for the creation of liquidity pools with multiple tokens and varying weights. By integrating the Balancer protocol into your DEX, you can offer users more flexibility in managing their liquidity. Balancer's smart routing and dynamic portfolio management algorithms help optimize trades and ensure efficient allocation of assets across different pools.

Balancer enables the creation of customizable pools with different token combinations and weights. This flexibility allows you to tailor the pool composition to specific trading pairs or market demands. You can create pools with equal weights, stablecoin-weighted pools, or even non-standard configurations. This versatility attracts a diverse set of traders and provides unique trading opportunities.

Balancer allows you to set custom trading fees for each pool. By integrating Balancer, you can generate fee revenue from trading activities on your DEX. Balancer also supports fee distribution mechanisms, such as the Balancer Liquidity Bootstrapping Pool (BLBP), which helps incentivize liquidity providers and attract more participants to your exchange.

All of the aggregate liquidity is then easily accessilbe for swappers, aggregators, and arbitraugers. The Balancer **[Vault](https://docs.balancer.fi/concepts/vault)** optimizes batching and path logic so that gas costs and capital requirements remain extremely low. Each individual pool and project built on top benefits from the global liquidity within Balancer that brings deep liquidity for base assets and opens up swap paths.

