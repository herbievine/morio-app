import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { networks } from "../config/networks";
import { useSigner } from "../hooks/useSigner";
import { Network } from "../types/network";

export type NetworkContextInterface = [
  network?: Network,
  setNetwork?: React.Dispatch<React.SetStateAction<Network | undefined>>
];

export const NetworkContext = React.createContext<NetworkContextInterface>([]);

const NetworkProvider: React.FC<{}> = ({ children }) => {
  const [network, setNetwork] = useState<Network>();
  const { reload } = useRouter();
  const { signer } = useSigner();

  useEffect(() => {
    if (signer) {
      const getNetwork = async () => {
        const { chainId } = await signer.provider.getNetwork();

        const network = networks.find(
          (contract) => contract.chainId === chainId
        );

        setNetwork(network);
      };

      getNetwork();
    }
  }, [signer, network]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        reload();
      });
    }
  }, [reload]);

  return (
    <NetworkContext.Provider value={[network, setNetwork]}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkProvider;
