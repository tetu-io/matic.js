import { EthMethod } from "./eth_method";
import {BaseContract} from "../abstracts";
// @ts-ignore
import Contract from "web3/eth/contract";

export class Web3Contract extends BaseContract {
    contract: Contract;

    constructor(address: string, contract: Contract, logger) {
        super(address, logger);
        this.contract = contract;
    }

    method(methodName: string, ...args) {
        this.logger.log("methodName", methodName, "args method", arguments);
        return new EthMethod(
            this.address, this.logger, this.contract.methods[methodName](...args)
        );
    }
}
