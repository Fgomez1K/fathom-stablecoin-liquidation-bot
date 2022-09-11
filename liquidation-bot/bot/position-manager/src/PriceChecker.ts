import { ethers } from 'ethers';
import { BigNumber, utils } from 'ethers/lib/ethers';
import { COLLATERAL_POOL_ID, LogLevel, provider } from '../../helpers/config/config';
import { priceOracleAddress, simplePriceFeedAddress } from '../../helpers/utils/addresses';
import { IPriceFeed } from './interfaces/IPriceFeed';

interface IPrice{
    lastUpdated : number,
    price : BigNumber
}

class PriceChecker implements IPriceChecker{
    private readonly priceFeed: IPriceFeed;
    private fetchHandle: NodeJS.Timeout | null = null;
    private price: IPrice ;
    private consumer: (() => Promise<void> | void) | undefined;
    public readonly priceOracleContract;


    constructor(_priceFeed:IPriceFeed){
        this.priceFeed = _priceFeed;
        this.price = {price: BigNumber.from(0), lastUpdated: Date.now()};

        let priceOracleAbi = [
            'function setPrice(bytes32 _collateralPoolId) external'
            ];
        this.priceOracleContract = new ethers.Contract(priceOracleAddress, priceOracleAbi, provider.getSigner());

        const eventFilter = {
            address: this.priceOracleContract.address,
            topics: [
                utils.id("LogSetPrice(bytes32,bytes32,uint256)"),
            ]
        }
        provider.on(eventFilter, (log, event) => {
            // Emitted whenever onchain price update happens
            console.log(LogLevel.keyEvent('================================'));
            console.log(LogLevel.keyEvent('OnChain Price Update Event Fired'));
            console.log(LogLevel.keyEvent('================================'));
            if(this.consumer != undefined)
                this.consumer();
            
        })

        const eventFilter1 = {
            address: simplePriceFeedAddress,
            topics: [
                utils.id("LogSetPrice(address,uint256,uint256)")
            ]
        }
        provider.on(eventFilter1, (log, event) => {
            // Emitted whenever onchain price update happens
            console.log(LogLevel.keyEvent('================================'));
            console.log(LogLevel.keyEvent('New price update on-chain'));
            console.log(LogLevel.keyEvent('================================'));
            if(this.consumer != undefined)
                this.consumer();
            
        })
    }

    public async init(fetchInterval = 120000, _consumer: () => Promise<void> | void): Promise<void> {
        this.consumer = _consumer;
        await this.updateOnChainPrice(); 
        if (this.fetchHandle !== null) clearInterval(this.fetchHandle);
        this.fetchHandle = setInterval(this.checkPrice.bind(this), fetchInterval);
    }

    //Check the latest price of underlying collatral
    private async checkPrice(): Promise<void> {
        console.log('info',`checking the price of ${this.priceFeed.symbol}`)
        const _price = await this.priceFeed.fetchPrice();
        console.log('info',`latest price on dex is ${_price}`)
        await this.updatePrice(_price);
    }

    //update the price
    private async updatePrice(_price: BigNumber){
        if(_price.lt(this.price.price)){
            console.log('info',`Drop in price ${this.priceFeed.symbol}, Trigger on-chain price update...`);
            //TODO: Trigger on-chain oracle price update
            await this.updateOnChainPrice(); 
        }
        this.price = {price: _price, lastUpdated: Date.now()};
    }

    private async updateOnChainPrice() {
        console.log(LogLevel.keyEvent('Updating on-chain price...'));
        await this.priceOracleContract.setPrice(COLLATERAL_POOL_ID);
    }

    public stop(): void {
        if (this.fetchHandle !== null) clearInterval(this.fetchHandle);
    }
}

export default PriceChecker;