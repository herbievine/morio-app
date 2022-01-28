import { useContext } from "react";
import { SignerContext } from "../contexts/Signer";
import { SignerContextInterface } from "../contexts/Signer";

interface UseSignerHook {
  signer: SignerContextInterface[0];
  getSigner: SignerContextInterface[1];
}

const useSigner = (): UseSignerHook => {
  const [signer, getSigner] = useContext(SignerContext);

  if (getSigner === undefined) {
    throw new Error("useSigner must be initialized");
  }

  return { signer, getSigner };
};

export { useSigner };
