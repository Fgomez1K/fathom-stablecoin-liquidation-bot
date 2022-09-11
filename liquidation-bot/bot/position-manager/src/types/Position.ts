import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';

class Position{
    public readonly address: string;
    public readonly debtShare : ethers.BigNumber;
    public readonly safetyBuffer: ethers.BigNumber;

    constructor(_address: string,_debtShare: any,_safetyBuffer:any){
        this.address = _address;
        this.debtShare = ethers.BigNumber.from(_debtShare);
        this.safetyBuffer = ethers.BigNumber.from(_safetyBuffer);
    }

    get isUnSafe(): boolean { 
        return this.safetyBuffer.lte(0) && this.debtShare.gt(0);
    }
}

export default Position;