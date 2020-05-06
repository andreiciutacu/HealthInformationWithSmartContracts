var MyContract = artifacts.require("./MyContract.sol");
var GeneralInformation = artifacts.require("./GeneralInformation.sol");
var HealthInformation = artifacts.require("./HealthInformation.sol");

module.exports = function(deployer) {
  deployer.deploy(GeneralInformation);
  deployer.deploy(HealthInformation);
};
