import { ConfigService } from '../Config/config.service';
const Web3 = require('web3');
const conf = new ConfigService();

export default new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/${conf.get('INFURA_API_KEY')}`))