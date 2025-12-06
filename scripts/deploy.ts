import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with account:", deployer.address);
    console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

    // Sepolia token addresses (must match App.tsx)
    const USDC_ADDRESS = "0x24D824fd9Bd01c1f694c85f26161d88Cb1fAe50F";
    const DAI_ADDRESS = "0xb1E77a6Ef72A1fB0233B884EE6A8efD98bB080cB";

    // Deploy SimpleSwap
    const SimpleSwap = await ethers.getContractFactory("SimpleSwap");
    const simpleSwap = await SimpleSwap.deploy(USDC_ADDRESS, DAI_ADDRESS);

    await simpleSwap.waitForDeployment();

    const address = await simpleSwap.getAddress();
    console.log("SimpleSwap deployed to:", address);

    // Add initial liquidity (optional - you can do this manually later)
    console.log("\nTo add liquidity, send tokens to the contract address:");
    console.log("  ETH: Call addETHLiquidity() with value");
    console.log("  USDC/DAI: Approve then call addTokenLiquidity()");

    console.log("\n========================================");
    console.log("IMPORTANT: Update App.tsx with this address:");
    console.log(`const SIMPLE_SWAP_ADDRESS = "${address}";`);
    console.log("========================================");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
