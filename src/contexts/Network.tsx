import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { networks } from "../config/networks";
import { useSigner } from "../hooks/useSigner";
import { Network } from "../types/network";

export type NetworkContextInterface = [
  network?: Network,
  setNetwork?: () => Promise<void>
];

export const NetworkContext = React.createContext<NetworkContextInterface>([]);

const NetworkProvider: React.FC<{}> = ({ children }) => {
  const [network, setNetwork] = useState<Network>();
  const { reload } = useRouter();
  const { signer } = useSigner();

  const attemptSetNetwork = useCallback(async () => {
    if (signer) {
      const { chainId } = await signer.provider.getNetwork();

      const network = networks.find((contract) => contract.chainId === chainId);

      setNetwork(network);
    }
  }, [signer]);

  useEffect(() => {
    attemptSetNetwork();
  }, [signer, attemptSetNetwork]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        reload();
      });
    }
  }, [reload]);

  return (
    <NetworkContext.Provider value={[network, attemptSetNetwork]}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkProvider;
