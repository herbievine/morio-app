import { useContext } from "react";
import { NetworkContext } from "../contexts/Network";
import { NetworkContextInterface } from "../contexts/Network";

interface UseNetworkHook {
  network: NetworkContextInterface[0];
  setNetwork: NetworkContextInterface[1];
}

const useNetwork = (): UseNetworkHook => {
  const [network, setNetwork] = useContext(NetworkContext);

  if (setNetwork === undefined) {
    throw new Error("useNetwork must be initialized");
  }

  return { network, setNetwork };
};

export { useNetwork };
