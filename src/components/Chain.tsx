import Image from "next/image";
import React from "react";
import { useSigner } from "../hooks/useSigner";
import type { Network } from "../types/network";

interface ChainProps {
  chain: Network;
}

const Chain: React.FC<ChainProps> = ({
  chain: { name, logo, currency, chainId, metamaskChainPayload },
}) => {
  const { signer, setSigner } = useSigner();

  return (
    <div
      className="p-4 rounded-md bg-neutral-800 cursor-pointer"
      onClick={async () => {
        if (signer) {
          await signer.provider.send("wallet_addEthereumChain", [
            metamaskChainPayload,
          ]);
        } else {
          await setSigner();

          await signer?.provider?.send("wallet_addEthereumChain", [
            metamaskChainPayload,
          ]);
        }
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt={name} height={24} width={24} />
          <p className="ml-4 font-bold text-neutral-300">
            {name} ({currency})
          </p>
        </div>
        <p className="text-sm font-bold text-neutral-500">{chainId}</p>
      </div>
    </div>
  );
};

export default Chain;
