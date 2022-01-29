import { ethers } from "ethers";
import React, { useCallback, useEffect, useState } from "react";

type Signer = ethers.providers.JsonRpcSigner;

export type SignerContextInterface = [
  signer?: Signer,
  setSigner?: () => Promise<void>
];

export const SignerContext = React.createContext<SignerContextInterface>([]);

const SignerProvider: React.FC<{}> = ({ children }) => {
  const [signer, setSigner] = useState<Signer>();

  const attemptSetSigner = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    setSigner(provider.getSigner());
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      attemptSetSigner();

      window.ethereum.on("accountsChanged", () => {
        attemptSetSigner();
      });
    }
  }, [attemptSetSigner]);

  return (
    <SignerContext.Provider value={[signer, attemptSetSigner]}>
      {children}
    </SignerContext.Provider>
  );
};

export default SignerProvider;
