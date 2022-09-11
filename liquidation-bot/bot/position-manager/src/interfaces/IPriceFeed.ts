import { BigNumber } from "ethers";

export interface IPriceFeed{
    readonly symbol: string;
    fetchPrice(): Promise<BigNumber>;
}