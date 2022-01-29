import { useContext } from "react";
import { SignerContext } from "../contexts/Signer";
import { SignerContextInterface } from "../contexts/Signer";

interface UseSignerHook {
  signer: SignerContextInterface[0];
  setSigner: SignerContextInterface[1];
}

const useSigner = (): UseSignerHook => {
  const [signer, setSigner] = useContext(SignerContext);

  if (setSigner === undefined) {
    throw new Error("useSigner must be initialized");
  }

  return { signer, setSigner };
};

export { useSigner };
