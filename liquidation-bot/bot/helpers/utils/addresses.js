require("dotenv").config();
const fs = require('fs');

//let rawdata = fs.readFileSync('./utils/0_deployment.json');
let rawdata = `{"deployerAddress":"0x4C5F0f90a2D4b518aFba11E22AC9b8F6B031d204","collateralPoolConfig":"0x8aEE29EaA4CE75FA53A7F63EEDA722aADaa21DC9","bookKeeper":"0xb9AdA6B44E4CFF8FE00443Fadf8ad006CfCc2d10","WXDC":"0xc36b26cf999F9f4A085Ce5bD1A541a4B81a70753","USDT":"0xf72f1a39ae0736Ef6A532605C85aFB0A4E349714","fathomToken":"0xde6Ef25c30e990415a9C0F67f1cCdc2080Ee8045","fairLaunch":"0x95F81bA096bdF2316890e5C21A852B9C5cE6BE8A","shield":"0x79dFFC4DcBb1f598EC3741E939f22bAAF56448Da","showStopper":"0x47E5E2227274aa9fa996d60b0DE9baD4602a65A2","positionManager":"0xADd9227440f4BB447142b6df006016EA7c0773ba","collateralTokenAdapter":"0x1A3f51fAA7d76eB482FFC22aec67152A46E0f1dd","fathomOraclePriceFeed":"0x41d5B3971A1442d15e302E53E1068BC2EE1DF7F1","simplePriceFeed":"0xaB0E6FBc9Db1D07DA1b03809E52bbbbFFA486EcF","fathomStablecoin":"0x029ed3916B03095908209264304d06cA67a7E593","stablecoinAdapter":"0xfA104bC5010410a03d2846c04373093Ca709c4C6","fathomStablecoinProxyActions":"0x8598b178d5e6C40Cb5800De5522184092469b40C","systemDebtEngine":"0x8b00E12e189655166a647320e3E0481C909BCFa0","stabilityFeeCollector":"0x0Cdd5Ba91fe821BCa30f901E5805dcDc2d5c2Aa4","liquidationEngine":"0x9582b403791662a0727D162e328Fe84CaCd9978D","priceOracle":"0x63C478Bdff0F452Ca9B295eb4E2AAbA064ABDB13","fixedSpreadLiquidationStrategy":"0x2f116B44fcC074bc06613E5B104E76944e849882","proxyWalletFactory":"0x25e24abAFC08c8D847c8EC9c468212F59550E912","proxyWalletRegistry":"0x79A63218AA430D9587De5Ccc8484D6cFd61DC02e","dexPriceOracle":"0x7F402c0928f0d47Ac10D2ce34d60D9B271343e1B","authTokenAdapter":"0x3bE63F9EAFF8daE6C4C98cca6198cd5c23B03DeA","stableSwapModule":"0x1c8EdC75113B6598B110c1AFD5935b748539E6F2","getPositions":"0x60D00c5CEB25ee50b13B33B2dd52A2F0E3036951"}`
let addresses = JSON.parse(rawdata);

const collateralPoolConfigAddress = addresses.collateralPoolConfig;
const simplePriceFeedAddress = addresses.simplePriceFeed;
const getPositionContractAddress = addresses.getPositions;
const positionManagerAddress = addresses.positionManager;

// const dexpriceOracleAddress = addresses.fathomOraclePriceFeed;
const priceOracleAddress = addresses.priceOracle;


const deployerAddress = addresses.deployerAddress;

const liquidationEngineContractAddress = addresses.liquidationEngine;
const bookKeeperAddress = addresses.bookKeeper;
const fixedSpreadLiquidationStrategyAddress = addresses.fixedSpreadLiquidationStrategy;

const proxyWalletRegistryAddress = addresses.proxyWalletRegistry

const ibDUMMYAddress = addresses.USDT;

const WXDCAddress = addresses.WXDC;

const stabilityFeeCollectorAddress = addresses.stabilityFeeCollector

const ibTokenAdapterAddress = addresses.collateralTokenAdapter;

const stablecoinAdapterAddress = addresses.stablecoinAdapter;

const alpacaStablecoinProxyActionsAddress = addresses.fathomStablecoinProxyActions;

const dexPriceOracle = addresses.dexPriceOracle;

const fathomStablecoin = addresses.fathomStablecoin;

export { 
    collateralPoolConfigAddress, 
    simplePriceFeedAddress,
    getPositionContractAddress,
    positionManagerAddress,
    priceOracleAddress,
    deployerAddress,
    liquidationEngineContractAddress,
    bookKeeperAddress,
    fixedSpreadLiquidationStrategyAddress,
    proxyWalletRegistryAddress,
    ibDUMMYAddress,
    stabilityFeeCollectorAddress,
    ibTokenAdapterAddress,
    stablecoinAdapterAddress,
    alpacaStablecoinProxyActionsAddress,
    dexPriceOracle,
    fathomStablecoin,
    WXDCAddress
 }