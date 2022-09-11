"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Liquidate = void 0;
const ethers_1 = require("ethers");
const utils_1 = require("ethers/lib/utils");
const MaxUint256 = require("@ethersproject/constants");
const addresses_js_1 = require("../../helpers/utils/addresses.js");
const config_1 = require("../../helpers/config/config");
class Liquidate {
    constructor(_liquidationEngineAbiContract) {
        this.fetchHandle = null;
        this.arrPositions = [];
        this.liquidationEngineAbiContract = _liquidationEngineAbiContract;
        if (this.fetchHandle !== null)
            clearInterval(this.fetchHandle);
        //TODO: Check if we can do it in better way
        this.fetchHandle = setInterval(this.checkAndLiquidate.bind(this), 5 * 1000);
        const eventFilter = {
            address: addresses_js_1.fixedSpreadLiquidationStrategyAddress,
            topics: [
                ethers_1.utils.id("LogFixedSpreadLiquidate(bytes32,uint256,uint256,address,uint256,uint256,address,address,uint256,uint256,uint256,uint256)"),
            ]
        };
        config_1.provider.on(eventFilter, (log, event) => {
            console.log(config_1.LogLevel.keyEvent('Liquidation Complete'));
        });
    }
    addLiquidationPosition(position) {
        this.arrPositions.push(position);
    }
    removeLiquidationPosition(position) {
        const index = this.arrPositions.indexOf(position, 0);
        if (index > -1) {
            this.arrPositions.splice(index, 1);
        }
    }
    async checkAndLiquidate() {
        if (this.arrPositions.length == 0)
            return;
        let position = this.arrPositions.pop();
        if (position != undefined) {
            try {
                console.log(config_1.LogLevel.keyEvent(`Performing liquidation on position ${position.address}`));
                const debtShareToRepay = (0, utils_1.parseEther)("0.5");
                await this.liquidationEngineAbiContract.liquidate(config_1.COLLATERAL_POOL_ID, position.address, debtShareToRepay, MaxUint256.MaxUint256, '0x0CF4bC892112518f96506Df151185d0F572CfF5f', "0x00");
            }
            catch (exception) {
                console.log(config_1.LogLevel.error(exception));
            }
        }
    }
}
exports.Liquidate = Liquidate;
