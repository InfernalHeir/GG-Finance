const GGFinance = artifacts.require("GGfinance");

const tokenName = "GG finance";
const symbol = "GGF";

module.exports = async (deployer,accounts)  => {
       await deployer.deploy(GGFinance,tokenName,symbol);     
}