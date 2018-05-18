const EIP20Factory =
  artifacts.require('./ERC20Factory.sol');

module.exports = (deployer) => {
  deployer.deploy(EIP20Factory);
};
