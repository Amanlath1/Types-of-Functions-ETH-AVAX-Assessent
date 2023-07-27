# Types-of-Functions-ETH-AVAX-Assessment

This repository is for the project assessment of the project of the 3rd module of : solidity-avax-intermediate course of Metacrafters academy . The purpose of creating this to prove my learning and to showcase my skill as a solidity developer to the people

## Problem Statement

You will write a smart contract to create your own token and deploy it using HardHat or Remix. Once deployed, you should be able to interact with it for your walk-through video. From your chosen tool, the contract owner should be able to mint tokens to a provided address and any user should be able to burn and transfer tokens.

## Description

This is a simple Solidity smart contract for creating and managing an ERC-20 compliant token on the Ethereum blockchain. The contract represents a standard fungible token, allowing users to transfer, burn, and mint tokens.

### Features

1. Name and Symbol: The token has a name and symbol associated with it, which are publicly accessible on the blockchain.
2. Total Supply: The total supply of the token is fixed during deployment and is publicly accessible.
3. Balances: The contract keeps track of the balance of tokens held by each address. Users can query their own balance.
4. Transfer: Users can transfer tokens to other addresses. The contract checks for sufficient balance before allowing the transfer.
5. Burn: Token holders can burn (destroy) a specific amount of their tokens, effectively reducing the total supply.
6. Mint: The contract owner can mint (create) new tokens and distribute them to specific addresses. The minting function is restricted to the contract owner.

### Interacting with the Token

Once deployed, users can interact with the token using the following functions:

transfer(address _to, uint256 _value): Transfer _value tokens to address _to.
burn(uint256 _value): Burn (destroy) _value tokens from the sender's address.

#### For the contract owner:

mint(address _to, uint256 _value): Mint _value new tokens and assign them to address _to.
Remember that you need to have the required balance to perform transfers and burning operations. The contract ensures that no tokens are sent to the zero address (address(0)).



# Getting Started

## Executing Program

To execute this Solidity smart contract using Remix, follow the steps below and create a description for your GitHub repository:

### Execution Steps

1. Access Remix: Go to the Remix IDE https://remix.ethereum.org/ , a web-based integrated development environment for Ethereum smart contracts.
2. Create a New File: Create a new file in Remix and name it Token.sol. Paste the smart contract code provided above into this file.
3. Select Solidity Compiler: On the Remix IDE, go to the "Solidity Compiler" tab located on the left sidebar. Choose the desired compiler version (e.g., 0.8.0) from the dropdown menu.
4. Compile the Contract: Click on the "Compile Token.sol" button to compile the smart contract. Ensure that there are no compilation errors.
5. Deploy the Contract: After successful compilation, navigate to the "Deploy & Run Transactions" tab in the Remix IDE.
6. Select the Environment: Choose the desired Ethereum environment from the dropdown menu (e.g., JavaScript VM for local testing or Injected Web3 to interact with an external wallet like MetaMask).
7. Set Contract Parameters: Provide the desired parameters for the contract constructor, including the name, symbol, and totalSupply. Click the "Transact" button to deploy the contract with these parameters.
8. Deploy the Contract: Click on the "Deploy" button to deploy the Token smart contract to the selected environment.
9. Interact with the Contract: Once the contract is deployed, you can interact with it using the available functions.

## How to Use
1. Clone the repository or download the Token.sol file.
2. To execute the contract, you can use the Remix IDE (https://remix.ethereum.org/) or any other Ethereum development environment.
3. Compile the contract with a Solidity compiler (version 0.8.0 or compatible).
4. Deploy the contract to an Ethereum environment using Remix or other deployment tools.
5. During deployment, provide the desired name, symbol, and totalSupply for the token.
6. After deployment, you can interact with the contract using functions like transfer, burn, and mint.

## Author

Aman Lath
[@Amanlath6](https://twitter.com/amanlath6)

## License

This project is licensed under the MIT License - see the LICENSE file for details

# Introduction Video

https://www.loom.com/share/0093127de4564fae84d7e2d7c4031cef?sid=f58fdba1-10c6-4e6e-aa81-8ae18daf9b71
