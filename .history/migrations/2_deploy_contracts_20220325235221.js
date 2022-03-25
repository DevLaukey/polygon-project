const Contacts = artifacts.require("./votingContract.sol");

module.exports = function (deployer) {
  deployer.deploy(Contacts);
};
