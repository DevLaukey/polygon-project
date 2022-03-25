const Voters = artifacts.require("./votingContract.sol");

module.exports = function (deployer) {
  deployer.deploy(Voters);
};
