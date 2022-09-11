"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixedSpreadLiquidationStrategyAddress = exports.bookKeeperAddress = exports.liquidationEngineContractAddress = exports.deployerAddress = exports.liquidatorBotAddress = exports.priceOracleAddress = exports.positionManagerAddress = exports.getPositionContractAddress = exports.simplePriceFeedAddress = exports.collateralPoolConfigAddress = void 0;
const collateralPoolConfigAddress = "0xce75A95160D96F5388437993aB5825F322426E04";
exports.collateralPoolConfigAddress = collateralPoolConfigAddress;
const simplePriceFeedAddress = "0x1A3f51fAA7d76eB482FFC22aec67152A46E0f1dd";
exports.simplePriceFeedAddress = simplePriceFeedAddress;
const getPositionContractAddress = "0x47E5E2227274aa9fa996d60b0DE9baD4602a65A2";
exports.getPositionContractAddress = getPositionContractAddress;
const positionManagerAddress = "0x1376E5642CF962104882935903F1f01DB838FD20";
exports.positionManagerAddress = positionManagerAddress;
const priceOracleAddress = "0x79A63218AA430D9587De5Ccc8484D6cFd61DC02e";
exports.priceOracleAddress = priceOracleAddress;
//This is the address of smart contract deployer,
//(4th address from ganache)
const deployerAddress = '0x4C5F0f90a2D4b518aFba11E22AC9b8F6B031d204';
exports.deployerAddress = deployerAddress;
//This is the address of liquidator bot (4th address from ganache),
// this should have matching pk in .env file of worker
const liquidatorBotAddress = '0x0CF4bC892112518f96506Df151185d0F572CfF5f';
exports.liquidatorBotAddress = liquidatorBotAddress;
const liquidationEngineContractAddress = '0x25e24abAFC08c8D847c8EC9c468212F59550E912';
exports.liquidationEngineContractAddress = liquidationEngineContractAddress;
const bookKeeperAddress = '0x0e52147E1aD0d48F76074214e0782EE4A6Dca120';
exports.bookKeeperAddress = bookKeeperAddress;
const fixedSpreadLiquidationStrategyAddress = '0x3bE63F9EAFF8daE6C4C98cca6198cd5c23B03DeA';
exports.fixedSpreadLiquidationStrategyAddress = fixedSpreadLiquidationStrategyAddress;
