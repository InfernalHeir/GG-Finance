const HDWalletProvider = require('@truffle/hdwallet-provider');
require("dotenv").config();

const infuraKey = process.env.INFURA_URL;
const privatekey = process.env.PRIVATE_KEY;

//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
 
  networks: {
  
   development: {
   host: "127.0.0.1",    
   port: 8545,            
   network_id: "*",    
   },
   ropsten: {
    provider: () => new HDWalletProvider({
      privateKeys: [privatekey],
      providerOrUrl: infuraKey
    }),
    network_id: 3,  
    },

    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.6.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
