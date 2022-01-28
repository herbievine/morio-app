import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import contractAbi from "../config/abi.json";
import { HUB_ADDRESS } from "../config/constants";
import { useSigner } from "../hooks/useSigner";
import { Hub } from "../types/hub";

export type HubContextInterface = [
  hub?: Hub,
  setHub?: React.Dispatch<React.SetStateAction<Hub | undefined>>
];

export const HubContext = React.createContext<HubContextInterface>([]);

const HubProvider: React.FC<{}> = ({ children }) => {
  const [hub, setHub] = useState<Hub>();
  const { signer } = useSigner();

  useEffect(() => {
    if (signer) {
      const contract: Hub = new ethers.Contract(
        HUB_ADDRESS,
        contractAbi.abi,
        signer
      ) as Hub;

      setHub(contract);
    }
  }, [signer]);

  return (
    <HubContext.Provider value={[hub, setHub]}>{children}</HubContext.Provider>
  );
};

export default HubProvider;
