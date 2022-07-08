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

// *** CLAIM
// on eth call on depositor claimAndMoveToAnotherChain()
// depositor - https://etherscan.io/address/0xBb84098e47d217f51cB014f692eada1F2280a179#readProxyContract
// on matic the strategy should receive BAL after 30 min
// https://polygonscan.com/address/0x6FB3bf8FC7751E77fda80DA68b8a43637A004d8c#readProxyContract


// *** DEPOSIT
// -- bridge part
// on polygon sender https://polygonscan.com/address/0xBb84098e47d217f51cB014f692eada1F2280a179#writeProxyContract
// call withdrawAll() - first call will bridge ETH
// save transaction hash
// call again for bridge BAL
// save transaction hash
// wait checkpoint (up to 3 hours)
// -- deposit part
// in this script put tx hash and call `ts-node scripts/withdraw_exit_payload.ts` for ETH tx
// on mainnet depositor https://etherscan.io/address/0xBb84098e47d217f51cB014f692eada1F2280a179#writeProxyContract
// call depositBridgetAssets with data from the script
// do it again for BAL tx hash
// -- end


// ****
// eth strategy https://etherscan.io/address/0x308a756b4f9aa3148cad7ccf8e72c18c758b2ef2
// eth vault https://etherscan.io/address/0xFE700D523094Cc6C673d78F1446AE0743C89586E
// eth controller https://etherscan.io/address/0x6b2e0facd2f2a8f407ac591067ac06b5d29247e4
// locker https://etherscan.io/address/0x9cc56fa7734da21ac88f6a816af10c5b898596ce



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

  const txEth = '0x526c71c3865dbde49af488a314d22a3ff172b447480b7911e537382323f98c77'.trim();
  const payloadEth = await client.erc20(WETH, true).buildPayloadForExit(txEth, true);
  console.log("payload eth", payloadEth);
  writeFileSync('scripts/data_eth.txt', payloadEth);

  const txBAl = '0xed972f89328de738cc89e6dd401e97a8cc7844feb39d7507f40882607e5074be'.trim();
  const payloadBal = await client.erc20(BAL, true).buildPayloadForExit(txBAl, true);
  console.log("payloadBal", payloadBal);
  writeFileSync('scripts/data_bal.txt', payloadBal);

};

execute().then(() => {
}).catch(err => {
  console.error("err", err);
}).finally(() => {
  process.exit(0);
});
