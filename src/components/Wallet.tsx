import React, { useEffect, useState } from "react";
import { useSigner } from "../hooks/useSigner";
import cn from "classnames";

interface WalletProps {}

const Wallet: React.FC<WalletProps> = () => {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const { signer, setSigner } = useSigner();

  const c = cn(
    "p-4 rounded-md border border-neutral-700",
    !connected && "cursor-pointer"
  );

  const light = cn(
    "h-2 w-2 rounded-full",
    connected ? "bg-green-500" : "bg-red-500"
  );

  useEffect(() => {
    if (signer) {
      setConnected(true);
      signer.getAddress().then(setAddress);
    }
  }, [signer]);

  return (
    <div
      className={c}
      onClick={() => {
        if (!signer) {
          setSigner();
        }
      }}
    >
      <div className="flex justify-between items-center">
        <p className="font-bold text-neutral-300">
          {connected ? "Connected to wallet" : "Disconnected from wallet"}
        </p>
        <div className={light} />
      </div>
      <p className="mt-2 text-sm text-neutral-400 truncate">
        {connected
          ? `${address.slice(0, 10)}...${address.slice(34, 42)}`
          : "Connect wallet"}
      </p>
    </div>
  );
};

export default Wallet;
