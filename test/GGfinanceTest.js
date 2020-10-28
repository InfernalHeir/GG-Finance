const GGfinance = artifacts.require("GGfinance");
const { assert } = require("chai");
const chai = require("chai");

chai.use(require("chai-bignumber")());

contract("GGfinance", async (accounts) => {
    const owner = accounts[0];

    beforeEach(async () => {
        this.tokenInstance = await GGfinance.deployed();
    })

    //check name of contract

    it("should be a name", async () => {
        const tokenName = await  this.tokenInstance.name();
        assert.equal("GG finance",tokenName, "tokenName is not Mached");
    })
    
     //check symbol of contract

    it("should be a symbol", async () => {
        const tokenSymbol = await  this.tokenInstance.symbol();
        assert.equal("GGF",tokenSymbol, "tokenSymbol is not Mached");
    })
 
    // test decimals of contract

    it("should be decimals",async () => {
        const decimals = await this.tokenInstance.decimals();
        assert.equal(decimals,18);
    })

    //check owner of contract
    it("should be have owner", async () => {
        const contractOwner = await  this.tokenInstance.owner();
        assert.equal(owner,contractOwner, "invalid Owner");
    })


})