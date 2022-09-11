# Fathom Stablecoin Liquidation Bot

##### Table of Contents  
[What is Liquidation](#liquidation_intro)  

[Liquidation Bot](#liquidation_bot)  

[Liquidation Strategies](#liquidation_stratagies)

[Ready to use liquidation Bots](#ready_to_use_liquidation_bots)

[Refrences](#refrences)

## What is Liquidation
CDP-based stablecoin protocols keep the level of issued debt in a stable state with liquidation. Liquidation is similar to foreclosure which is forced when the borrower cannot pay the interest rate and principal on time, therefore, the lender will force the collateral sale. The difference is that foreclosure happens when the borrower cannot keep up with the agreed cash flow, whereas, liquidation of a position in stablecoin protocols happens when the value of collateralized assets plummets and moves the Loan to Value ratio(LTV) of a position to a certain ‘risky’ level.

## Liquidation Bot
Liquidation Bot is an automated software that will look for liquidation opportunity and trigger the liquidation process without any manual intervention. Below should be the key features of Liquidation Bot
- It should work automatically with no of very less humen interaction.
- It should be running all the time.
- It should liquidate bad position as early as possible once the position is detected as bad.
- It should consume less gas, also a failed liquidation opporunity is loss in term of gas fees.

## Liquidation Strategies
Below is the analysis of liquidation stratagies followed by popular lending platforms:
- #### Compound
    - Compound has the simplest liquidation strategy. There are two main actors borrower and liquidator. The liquidator bot checks the position state using liquidateBorrowAllowed method. If position is in bad state calls liquidateBorrow method to start the liquidation process. The position is closed fully and all debt is repaid to compound by liquidator, in returned he buys the collateral at discounted price 5% from market rate. Compound return liquidator the cToken (e.g. cEth in case of Eth collatral) He can either keep it in compound to earn interest or redeem it. Example of **Single Liquidatation** https://etherscan.io/tx/0x0455615d2115d451b7377d40fed76a837796d1b17208eb13576ff162d8260ee6   
- #### Maker
    - Maker liquidation strategy is little complex compared to Compound. It require 3 parties, a borrower, a possessor and liquidator. Once the CDP is under collateralized, a possessor initiate the process called **BITE**, liquidator who may be or may not be a possessor call **BUST**. Ideally a possessor should call the **BUST** to get the liquidation benefit, however there could be scenarios where possessor doesn’t find it worth or doesn’t have enough balance.   
	    -	“BITE” only triggering process of liquidation, “BUST” involves paying back debt and close CDP position. 
	    -	There is a concept of SaiTub and SaiTap, SaiTub is the smart contact that hold all the active CDP.
	    -	NOTE: They have code repositories for keeper bots, however it is very specific to MakerDAO ecosystems.     This may not fit our requirement and we are not following their liquidation strategy. 
	        -	https://github.com/makerdao/developerguides/tree/master/keepers
	        -	https://github.com/makerdao/developerguides/blob/master/keepers/market-maker-keeper-bot-setup-guide/market-maker-keeper-bot-setup-guide.md
- #### dYdX
    - liquidation in dYdX is almost similar to compound. However dYdX additionally support the atomic transaction where liquidator does not need upfront capital investment instead they can borrow from protocol, settle open bad position and close the loan all in single transaction. dYdX provide built in flash loan feature which liquidators can make use of for true zero investment arbitrage. It also provide the safety check for liquidator so that they do not under collateralize during liquidation process using their proxy contracts. 
	⁃	https://github.com/dydxprotocol/liquidator [Deprecated]   
- #### Al-Paca
    - Al-paca uses the Fixed spread liquidation strategy. In case of under collateralisation of asset, only some part of collateral is liquidated. This is called close factor. This reduces the liquidation risk for borrower while still maintain the system stability. Close factor is set to 25% in al-paca which means only 25% of collateral could be liquidated.
    - Some of the key pointers/functions from al paca:
        - ##PositionManager.sol##
	        - **lastPositionId** : Gives the total number of positions opened
	        - **LogNewPosition** : Event is emitted when new position is opened.
	    - ##GetPositions.sol##
	        -	**getPositionWithSafetyBuffer**: Returns all the positions with debtShare and safetyBuffer.
	    - ##CollateralPoolConfig.sol##
	        - CollateralPoolConfig is the top most level object which has multiple pools in it **collateralPools** in it. Each collateralPool object has priceFeed (PriceFeed.sol) and strategy(ILiquidationStratgy -> FixedSpreadLiquidationStratgy.sol)
	    - ##LiquidationEngine.sol##
    	    -  LiquidationEngine has **execute()** method which takes in poolId as input. Pool id which is inside CollateralPoolConfig.sol has all the required information like priceFeed and liquidation stratagy. This price feed is derived from pool id which was passed from Engine to LiquidationStratgy and then getPrice method.
	    ⁃	##PriceOracle.sol## has **setPrice(poolId)** which internally has it’s respective feed from pool-Id (check .testnet.js file for dependency graph). 
## Ready to use liquidation Bots
There is no one size fits all kind of off the shelf bot. Liquidation bot depends on native liquidation strategy of underlying protocol. As we are forking al-paca, we have to design our bot considering the external interface/methods provided by smart contracts. 

## Our Approach
![Bot Design](./design-docs/liquidation_bot_v1.0.jpg?raw=true "Liquidator Bot")

There are 4 main components of bot:
- Event Listner
  - Event Listner will subscribe to listen two events **LogSetPrice** and **LowNewPisition**. If listner component recieve any of those two events, it calles Position Manager to re-organize the positions based on updated position data.
- Position Manager
  - Position manager will fetch the positions from on-chain and position them efficiently so that retrival of risky position can be quick e.g. we may store the positions in binary tree based on risk factors. 
- Price Check
  - This module will fetch the price of underlying asset from external service and compare it with last price stored on bot. Only If there is drop in price, bot calls PriceOracle.sol setPrice() method on-chain to updated the price of collatral.
- Worker/Executor
  - Worker component will fetch the position based combination of risk-factor and debt share. Bot will pick the risky position first and try to execute liquidation() on chain.If somehow transaction is reverted, position will be put back to Position Manager. 


## Refrences
 - https://hackmd.io/@1P8kjN1-TWykQ36ndKV07Q/rkP3NAv35
 - https://cryptomarketpool.com/compound-finance-liquidation-bot/
 - https://cryptomarketpool.com/build-a-crypto-back-running-bot/
 - https://andytudhope.github.io/community/scd-faqs/keepers/
 - https://www.youtube.com/watch?v=w-oVV0Ie3Fw&list=PLO5VPQH6OWdX-Rh7RonjZhOd9pb9zOnHW&index=18

