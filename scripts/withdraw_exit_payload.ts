import {POSClient, setProofApi, use} from "../src";
import Web3ClientPlugin from "../src/web3/plagin";
import {writeFileSync} from "fs";
import HDWalletProvider = require("@truffle/hdwallet-provider");

setProofApi('https://apis.matic.network/');
use(Web3ClientPlugin);

const BAL = '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3';
const WETH = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619';

const execute = async () => {

  const privateKey = '6bf4f9681fb8adaa8f6683c0ad0eb11e6cce2d9733fa53069e28e05c6dd7f9a5';
  const rpcPoly = 'https://polygon-rpc.com/';
  const rpcMainnet = 'https://eth-mainnet.alchemyapi.io/v2/9N7SZel_kSDKC9201zJ8-SDjVrKHC2Y8';
  const userAddress = '0xaa5734AEE4EBd75D99beB55aE469896792a0E68b';

  const client = await new POSClient().init({
    log: true,
    network: 'mainnet',
    version: 'v1',
    child: {
      provider: new HDWalletProvider(privateKey, rpcPoly),
      defaultConfig: {
        from: userAddress
      }
    },
    parent: {
      provider: new HDWalletProvider(privateKey, rpcMainnet),
      defaultConfig: {
        from: userAddress
      }
    }
  });

  const erc20Token = client.erc20(BAL, true);

  // eth https://polygonscan.com/tx/0x34badcfdac3a1d8578e9571dcc0c270b34a8a541176c4598b3a376d20ad0c269
  // bal https://polygonscan.com/tx/0x36a30297381ab1b89c0b8554c0db3f74ff92ecdf2fe4b0b748b96fb273fdda62

  const tx = '0x36a30297381ab1b89c0b8554c0db3f74ff92ecdf2fe4b0b748b96fb273fdda62';

  const payload = await erc20Token.buildPayloadForExit(tx, true);

  console.log("payload", payload);

  writeFileSync('scripts/data.txt', payload);

};

execute().then(() => {
}).catch(err => {
  console.error("err", err);
}).finally(() => {
  process.exit(0);
});
