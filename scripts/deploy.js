const { ethers } = require("hardhat");
async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Account of the Contract Deployed:", deployer.address);

    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy("Aman","AMN",ethers.parseEther("500"));

    console.log("Tokens are deployed at:", token.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});