

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/ufP987ZhUVnHARSQesZ1JhR76bHxlvJX',
      accounts: ['6ae7fdfa2356049c800f63178344af4c565dc4596bd4281d32a8649adc7e1629']
    }
  }
}