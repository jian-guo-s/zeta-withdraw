const Withdraw = artifacts.require("Withdraw");
const { getAddress } = require("@zetachain/protocol-contracts");

module.exports = function(deployer,network) {
  const systemContract = getAddress("systemContract", network);
  deployer.deploy(Withdraw,systemContract);
};
