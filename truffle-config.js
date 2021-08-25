const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development:{
      host:"127.0.0.1",
      port:8545,
      network_id:"*"
    },
    develop: {
      port: 8545
    }
   },
  // live:{
  //   host:"178.25.19.88", //Random IP for example purpose(do not use)
  //   port:80,
  //   netwrok_id, //Ethereum public network
  // }


};
