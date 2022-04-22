import Web3 from "web3";
import {IPlugin} from "../interfaces";
import {Web3Client} from "./web3_client";
import {MaticBigNumber} from "../utils/matic_big_number";

export class Web3ClientPlugin implements IPlugin {
    setup(matic) {
        matic.utils.Web3Client = Web3Client;
        matic.utils.BN = MaticBigNumber;
        matic.utils.isBN = (value) => {
            return Web3.utils.isBN(value);
        };
    }
}

/* tslint:disable-next-line */
export default Web3ClientPlugin;
