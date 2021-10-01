import { BaseToken, Web3SideChainClient } from "../utils";

export class RegistryContract extends BaseToken {

    constructor(client: Web3SideChainClient, address: string) {
        super(
            {
                isParent: true,
                tokenAddress: address,
                tokenContractName: "Registry"
            },
            client
        );
    }

}