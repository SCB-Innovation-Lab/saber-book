# TechX Badge

<p align="center">
  <img src={require('../../static/img/docs/our-projects/techx-badge/cover.png').default} alt="Simplify architecture diagram" />
</p>

## Executive Overview

The uniqueness of cryptographic assets, like Non-Fungible Tokens (NFTs), on blockchain provides wide-range of potential applications. One of potential application is enabling people to demonstrate and have their individual identity that they can clearly own.

By issuing a unique NFT badge as attendance record for individual who takes part on an event does not only help increasing level of engagement, by attracting people to attend series of events for digital collectible badge, but these attendance records could also represent identities and experiences of event attendees. As these NFT badges are stored in individual own crypto wallet, therefore they have full control of their own badge which is a core concept of self-sovereign identity (SSI).

## Motivation

SCB TechX regularly arranges sessions and events internally to upskill and reskill our employees, and we would like to give away mementos for people who attend these sessions and also aim to used these mementos as a strategic tool to keep everyone engaged with a motivation to constantly pursue improvement.

With an inspiration from [Proof of Attendance Protocol (POAP)](https://poap.xyz/), an open platform that allows event organizers to issue digital badges to their event attendees by adopting blockchain technology and NFTs seems to be a good solution for us as we would like to encourage our employees to familiarize themselves with Web3 and blockchain technology which we consider as an primarily step for onboarding user to further Web3 and decentralized applications (dapps) which we will be developing in the future.

## Our Solution

<p align="center">
  <img src={require('../../static/img/docs/our-projects/techx-badge/article_techx_badge_diagram.png').default} alt="The diagram demonstrate an attendee claiming NFT badge" />
</p>

A web application for sessions attendees with claim code to claim their NFT badges by connecting MetaMask crypto wallet, then the NFT is minted to the connected wallet address.

## Our Technology

1. **Web frontend** – the frontend is implemented using Next.js framework with web3.js library to interact with smart contract on blockchain. The frontend is deployed on AWS Amplify
2. **Backend APIs and database** – the backend APIs for validating claim code, issuing NFT badges and etc. is implemented on AWS Lambda while the data of session attendees with corresponding claim codes are store in AWS DynamoDB
3. **Smart Contract** – the smart contract is developed and deployed using Truffle Suite
4. **Blockchain network** – to leverage public blockchain network with low gas costs, the Polygon (MATIC) L2 is selected as the blockchain network

<p align="center">
  <img src={require('../../static/img/docs/our-projects/techx-badge/article_techx_badge_diagram.png').default} alt="Simplify architecture diagram" />
</p>

## Reference

1. Reference Links Web frontend for viewing the Tech X Badge collection of a wallet address is https://xbadge.sslabs.sh/scan/0x22955665b90ebA0a0E45cA61d8ddBdAFa2a92BAd
   - ![a preview collection of techx badges](/img/docs/our-projects/techx-badge/image-20221125-110740.png)
2. Smart Contract of the deployed Tech X Badge (TXB) ERC- 1155 token on Polygon (MATIC) network – https://polygonscan.com/address/0xf4fcf605a10cb02b63791ab8a36689320d4b6deb
