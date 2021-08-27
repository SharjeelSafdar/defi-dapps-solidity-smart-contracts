# Step21: Web3.js Introduction: Get Balance

## Prerequisites

1.  Install [Node 14+ LTS](https://nodejs.org/en/download/)
2.  Install TypeScript globally with the following command:

```
npm install -g typescript
```

## Step 1

Initialize a package.json file.

```
npm init
```

Install the required npm packages.

```
npm install web3
```

```
npm install @types/node nodemon ts-node-dev tslint --save-dev
```

## Step 2

[Create tsconfig.json](https://stackoverflow.com/questions/61305578/what-typescript-configuration-produces-output-closest-to-node-js-14-capabilities/61305579#61305579)

[Web3 usage with TypeScript](https://github.com/ChainSafe/web3.js#usage-with-typescript)

## Step 3

Create `index.ts` and `EthereumAccount.ts` files.

## Step 4

Signup on [Infura](https://infura.io/), create a new project, and replace `PROJECT_ID` in `EthereumAccount.ts` with your Infura project ID.

```ts
const RPC_ENDPOINT = "https://mainnet.infura.io/v3/PROJECT_ID";
```

## Step 5

Copy any account's public address from [EtherScan](https://etherscan.io/accounts). Paste the address in `index.ts`. Or you can leave the address as it is.

```ts
const accountAddress = "0x53d284357ec70ce289d6d64134dfac8e511c8a3d";
```

## Step 6

Now, run the project with the following two commands:

```
npm link typescript
```

```
npm start
```

# References

1.  [Watch Intro](https://www.youtube.com/watch?v=t3wM5903ty0)
2.  [Read the #1 of this Tutorial](https://www.dappuniversity.com/articles/web3-js-intro)
