export interface Network {
  name: string;
  chainId: number;
  currency: string;
  logo: string;
  explorer: string;
  contractAddress: string;
  environment: typeof process.env.NODE_ENV;
  metamaskChainPayload: MetamaskChainPayload;
}

interface MetamaskChainPayload {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
}
