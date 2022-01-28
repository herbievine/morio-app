import { useContext } from "react";
import { HubContext } from "../contexts/Hub";
import { HubContextInterface } from "../contexts/Hub";

interface UseHubHook {
  hub: HubContextInterface[0];
  setHub: HubContextInterface[1];
}

const useHub = (): UseHubHook => {
  const [hub, setHub] = useContext(HubContext);

  if (setHub === undefined) {
    throw new Error("useHub must be initialized");
  }

  return { hub, setHub };
};

export { useHub };
