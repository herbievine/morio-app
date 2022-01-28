import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

type Signer = ethers.providers.JsonRpcSigner;

export type SignerContextInterface = [
  signer?: Signer,
  setSigner?: React.Dispatch<React.SetStateAction<Signer | undefined>>
];

export const SignerContext = React.createContext<SignerContextInterface>([]);

const SignerProvider: React.FC<{}> = ({ children }) => {
  const [signer, setSigner] = useState<Signer>();

  const getSigner = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    setSigner(provider.getSigner());
  };

  useEffect(() => {
    if (window.ethereum) {
      getSigner();

      window.ethereum.on("accountsChanged", () => {
        getSigner();
      });
    }
  }, []);

  // window.ethereum.on("accountsChanged", () => {
  //   getSigner();
  // });

  return (
    <SignerContext.Provider value={[signer, setSigner]}>
      {children}
    </SignerContext.Provider>
  );
};

export default SignerProvider;
