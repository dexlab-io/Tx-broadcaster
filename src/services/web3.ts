const Web3 = require('web3');
export default new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/${process.env.INFURA_API_KEY}`))