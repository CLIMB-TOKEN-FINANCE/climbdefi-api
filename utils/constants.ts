import { ChainId, Token } from "@pancakeswap-libs/sdk";

// BEP-20 addresses.
export const CAKE = "0xd671e710DF199498097A3903ae0749a183130742";
export const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
export const DEAD = "0x000000000000000000000000000000000000dEaD";

// Contract addresses.
export const CAKE_BNB_FARM = "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6";
export const MASTERCHEF_CONTRACT = "0x1B1DdE62dFA48201aa320A2bDBb51CA2a784b6aA";
export const LOTTERY_CONTRACT = "0x16c6670b05d4fE90033d0af5F3D84b0EF25174BB";
export const MULTICALL_CONTRACT = "0x1ee38d535d541c55c9dae27b12edf090c608e6fb";

// PancakeSwap SDK Token.
export const CAKE_TOKEN = new Token(ChainId.MAINNET, CAKE, 18);
export const WBNB_TOKEN = new Token(ChainId.MAINNET, WBNB, 18);
export const CAKE_BNB_TOKEN = new Token(ChainId.MAINNET, CAKE_BNB_FARM, 18);
