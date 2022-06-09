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

  // eth 0xdd40227b96155aef86d5939ccd7769275786dbbc12d92971fe3ddc1be54db182
  // bal 0xe8506997d0b7617d09af331cab7e0d0a99c76fb6302631c7881fa830b1773fee

  const tx = '0xdd40227b96155aef86d5939ccd7769275786dbbc12d92971fe3ddc1be54db182';

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
