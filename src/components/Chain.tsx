import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSigner } from "../hooks/useSigner";
import type { Network } from "../types/network";
import cn from "classnames";

interface ChainProps {
  chain: Network;
}

const Chain: React.FC<ChainProps> = ({
  chain: { name, logo, currency, chainId, metamaskChainPayload },
}) => {
  const [signerChainId, setSignerChainId] = useState<number>();
  const { signer, setSigner } = useSigner();

  const c = cn(
    "p-4 rounded-md border border-neutral-700",
    chainId !== signerChainId && "cursor-pointer"
  );

  useEffect(() => {
    if (signer) {
      signer.getChainId().then(setSignerChainId);
    }
  }, [signer]);

  return (
    <div
      className={c}
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
        <p className="pl-4 whitespace-nowrap text-sm font-bold text-neutral-500">
          {chainId}
        </p>
      </div>
      <p className="mt-2 text-sm text-neutral-400 truncate">
        {chainId === signerChainId ? "Connected" : "Connect"}
      </p>
    </div>
  );
};

export default Chain;
