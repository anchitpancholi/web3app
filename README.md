# Web3App - Web 3.0 Blockchain Application

## Introduction
This repository contains the code for a sample Web 3.0 application using Hardhat. This application deploys smart contracts to a blockchain network utilizing Web 3.0 technologies, including Solidity, Hardhat, and MetaMask.

## Code Setup

1. **MetaMask Setup:**
    * Install the MetaMask browser extension.
    * Follow the MetaMask instructions to create a wallet.

2. **Alchemy Setup:**
    * Go to [Alchemy](https://www.alchemy.com/).
    * Create an account and log in.
    * Create a new application.

3. **Install Dependencies:**
    * Open a terminal and navigate to the `smart_contract` directory, then run:
      ```shell
      npm install
      ```
    * Open another terminal and navigate to the `client` directory, then run:
      ```shell
      npm install
      ```

4. **Setup Complete**

## Update Contract

1. Modify the `smart_contract/contracts/AccountTransaction.sol` file as needed.

2. Update the `smart_contract/hardhat.config.js` file:
    * Modify the `url` field:
        * Go to the Alchemy application network page.
        * Select "Ethereum" from the dropdown menu.
        * Choose "Sepolia."
        * Copy the URL and paste it into the `url` field in your configuration file.

    * Modify the `accounts` field:
        * Add your account's private key, which you can find in the MetaMask browser extension under Account Details > Show Private Key.

3. **Update Complete**

## Deploy Contract

1. From the `smart_contract` directory:
    * Compile the contracts:
      ```shell
      npx hardhat compile
      ```
    * Deploy the contracts using the Sepolia network:
      ```shell
      npx hardhat run scripts/deploy.js --network sepolia
      ```
    * Copy the transaction address printed after running the above command:
      ```
      Deployed Transaction Address: '<COPY_TRANSACTION_ADDRESS>'
      ```

2. Configure the UI to interact with the smart contract:
    * Open `client/src/utils/constants.js` and paste the address in the `contractAddress` field:
      ```javascript
      export const contractAddress = "<COPY_TRANSACTION_ADDRESS>";
      ```
    * Copy `AccountTransactions.json` from `/smart_contract/artifacts/contracts/AccountTransaction.sol/AccountTransaction.json`.
    * Paste it into `client/src/utils/`.

## Start Client Application

1. Go to the `client` directory and run:
    * Install packages:
      ```shell
      npm install
      ```
    * Start the local server:
      ```shell
      npm run dev
      ```

2. Open [http://localhost:3000](http://localhost:3000).

3. Click on the MetaMask browser extension and create an additional wallet. This will serve as your receiver address.

4. In the UI, enter the receiver address in the "From" and "To" fields and initiate the transfer.

5. A MetaMask popup will appear with an approval button.

6. Approve the transaction. It may take a few seconds, and you will see the transaction details at the bottom of the UI.

7. **Setup Complete**
