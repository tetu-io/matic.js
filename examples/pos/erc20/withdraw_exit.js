const {pos} = require('../../config');
const {getPOSClient, from} = require('../../utils');

const execute = async () => {
  console.log("START WITHDRAW")
  const client = await getPOSClient('mainnet', 'v1');
  const erc20Token = client.erc20(pos.parent.erc20, true);

  const result = await erc20Token.withdrawExit(
      '0x4a0a5fad301034dc4368ad093eb52a15ddf4db55911dbd8c1943afe34218eddd', {
        excludeIdx: -1
      });

  const txHash = await result.getTransactionHash();
  console.log("txHash", txHash);
  const receipt = await result.getReceipt();
  console.log("receipt", receipt);

}
execute().then(() => {
}).catch(err => {
  console.error("err", err);
}).finally(_ => {
  process.exit(0);
})
