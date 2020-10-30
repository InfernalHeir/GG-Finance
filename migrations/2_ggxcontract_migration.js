const GGXContract = artifacts.require("GGXContract");

const tokenName = "GGX";
const symbol = "GGX";

module.exports = async (deployer,accounts)  => {
       await deployer.deploy(GGXContract,tokenName,symbol);     
}