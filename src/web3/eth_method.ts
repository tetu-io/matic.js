import Web3 from "web3";
// @ts-ignore
import { TransactionObject, Tx } from "web3/eth/types";
import {BaseContractMethod} from "../abstracts";
import {ITransactionRequestConfig} from "../interfaces";
import {Logger} from "../utils";
import {maticTxRequestConfigToWeb3} from "../utils/matic_tx_config_to_web3";
import {TransactionWriteResult} from "../helpers/transaction_write_result";

export class EthMethod extends BaseContractMethod {

    constructor(public address, logger: Logger, private method: TransactionObject<any>) {
        super(logger);
    }

    toHex(value) {
        return value != null ? Web3.utils.toHex(value) : value;
    }

    read<T>(tx: ITransactionRequestConfig): Promise<T> {
        this.logger.log("sending tx with config", tx);
        return this.method.call(
            maticTxRequestConfigToWeb3(tx) as any
        );
    }

    write(tx: ITransactionRequestConfig) {

        return new TransactionWriteResult(
            this.method.send(
                maticTxRequestConfigToWeb3(tx) as any
            )
        );
    }

    estimateGas(tx: ITransactionRequestConfig): Promise<number> {
        return this.method.estimateGas(
            maticTxRequestConfigToWeb3(tx) as any
        );
    }

    encodeABI() {
        return this.method.encodeABI();
    }

}
