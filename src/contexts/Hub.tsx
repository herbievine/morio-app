import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import contractAbi from "../config/abi.json";
import { networks } from "../config/networks";
import { useNetwork } from "../hooks/useNetwork";
import { useSigner } from "../hooks/useSigner";
import { Hub } from "../types/hub";

export type HubContextInterface = [
  hub?: Hub,
  setHub?: React.Dispatch<React.SetStateAction<Hub | undefined>>
];

export const HubContext = React.createContext<HubContextInterface>([]);

const HubProvider: React.FC<{}> = ({ children }) => {
  const [hub, setHub] = useState<Hub>();
  const { network } = useNetwork();
  const { signer } = useSigner();

  useEffect(() => {
    if (signer && network) {
      const contract: Hub = new ethers.Contract(
        network.contractAddress,
        contractAbi.abi,
        signer
      ) as Hub;

      setHub(contract);
    }
  }, [signer, network]);

  return (
    <HubContext.Provider value={[hub, setHub]}>{children}</HubContext.Provider>
  );
};

export default HubProvider;
