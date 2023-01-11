import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || process.env.ALCHEMY_MAINNET_RPC_URL || '';
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || '';
const MNEMONIC = process.env.MNEMONIC || '';
const FORK = Boolean(process.env.FORK) || false;
const FORKING_BLOCK_NUMBER = Number(process.env.FORKING_BLOCK_NUMBER) || 16162164;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: MAINNET_RPC_URL,
        blockNumber: FORKING_BLOCK_NUMBER,
        enabled: FORK,
      }
    },
    goerli: {
      chainId: 5,
      url: GOERLI_RPC_URL,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    mainnet: {
      chainId: 1,
      url: MAINNET_RPC_URL,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },
};

export default config;
