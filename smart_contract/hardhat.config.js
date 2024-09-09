require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: '<<YOUR_APP_NETWORK_DETAILS>>',
      accounts: ['<<YOUT_ACCOUNT_PRIVATE_KEY>>'],
    },
  },
};

