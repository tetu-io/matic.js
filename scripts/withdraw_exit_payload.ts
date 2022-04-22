import {POSClient, setProofApi, use} from "../src";
import Web3ClientPlugin from "../src/web3/plagin";
import {writeFileSync} from "fs";
import {config as dotEnvConfig} from "dotenv";
import HDWalletProvider = require("@truffle/hdwallet-provider");

dotEnvConfig();

setProofApi('https://apis.matic.network/');
use(Web3ClientPlugin);

const BAL = '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3';
const WETH = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619';

const execute = async () => {

  const privateKey = process.env.PRIVATE_KEY;
  const rpcPoly = process.env.RPC_POLY;
  const rpcMainnet = process.env.RPC_ETH;
  const userAddress = process.env.USER_ADDRESS;

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
