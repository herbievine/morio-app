import { ContractTransaction } from "ethers";
import React from "react";
import { useModal } from "../hooks/useModal";
import { useNetwork } from "../hooks/useNetwork";

interface TransactionProps {
  tx: ContractTransaction;
}

const Transaction: React.FC<TransactionProps> = ({
  tx: { hash, to, from },
}) => {
  const { setModal } = useModal();
  const { network } = useNetwork();

  return (
    <div className="p-6 w-10/12 sm:w-3/4 md:w-1/2 lg:w-1/4 rounded-md bg-neutral-800">
      <div className="flex items-center justify-between">
        <p className="font-bold text-neutral-300">
          Transaction submitted successfully
        </p>
        <p
          className="font-bold text-neutral-300 cursor-pointer"
          onClick={() => {
            if (setModal) {
              setModal(null);
            }
          }}
        >
          x
        </p>
      </div>
      <div className="mt-6 p-6 flex flex-col items-center rounded-md bg-neutral-900 text-neutral-300 font-bold">
        <a className="w-full mb-2" href={network.explorer + "tx/" + hash}>
          <div className="w-full flex justify-between items-center">
            <p className="pr-6">Hash</p>
            <p className="truncate">{hash.slice(0, 20)}...</p>
          </div>
        </a>
        <a
          className="w-full mb-2"
          href={network.explorer + "address/" + to + "?fromaddress=" + from}
        >
          <div className="w-full flex justify-between items-center">
            <p className="pr-6">To</p>
            <p className="truncate">{to.slice(0, 20)}...</p>
          </div>
        </a>
        <a className="w-full" href={network.explorer + "address/" + from}>
          <div className="w-full flex justify-between items-center">
            <p className="pr-6">From</p>
            <p className="truncate">{from.slice(0, 20)}...</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Transaction;