const ERC20 = artifacts.require('./ERC20.sol');

module.exports = (deployer) => {
  deployer.deploy(ERC20, 66000000, 'IPChain', 1, 'IPC');
};
