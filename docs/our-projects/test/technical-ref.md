# Technical Reference

## Staking

Users earn reward by staking their token.

The amount they earn is reward rate \* amount staked by the user / total staked for every second.

reward rate is set by the contract owner.

## Maths

You'll find below the formula to compute rewards earned by a user from k to n seconds:

![Image](/img/docs/our-projects/dex-indexer/image.png)
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
