
// @ts-ignore
import { Transaction } from "web3/eth/types";
import {ITransactionData} from "../interfaces";

export const web3TxToMaticTx = (tx: Transaction) => {
    const maticTx: ITransactionData = tx as any;
    maticTx.transactionHash = tx.hash;
    return maticTx;
};
