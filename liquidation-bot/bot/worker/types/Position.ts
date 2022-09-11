import { ethers } from 'ethers';

interface Position{
    address: string;
    debtShare : ethers.BigNumber;
    safetyBuffer: ethers.BigNumber;
}

export default Position;