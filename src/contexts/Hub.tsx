import { ethers } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import contractAbi from "../config/abi.json";
import { useNetwork } from "../hooks/useNetwork";
import { useSigner } from "../hooks/useSigner";
import { Hub } from "../types/hub";

export type HubContextInterface = [hub?: Hub, setHub?: () => void];

export const HubContext = React.createContext<HubContextInterface>([]);

const HubProvider: React.FC<{}> = ({ children }) => {
  const [hub, setHub] = useState<Hub>();
  const { network } = useNetwork();
  const { signer } = useSigner();

  const attemptSetHub = useCallback(() => {
    if (signer && network) {
      const contract: Hub = new ethers.Contract(
        network.contractAddress,
        contractAbi.abi,
        signer
      ) as Hub;

      setHub(contract);
    }
  }, [signer, network]);

  useEffect(() => {
    attemptSetHub();
  }, [signer, network, attemptSetHub]);

  return (
    <HubContext.Provider value={[hub, attemptSetHub]}>
      {children}
    </HubContext.Provider>
  );
};

export default HubProvider;
