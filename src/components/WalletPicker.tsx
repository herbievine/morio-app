import Image from "next/image";
import React from "react";
import { useModal } from "../hooks/useModal";
import { providers } from "../lib/providers";

interface WalletPickerProps {}

const WalletPicker: React.FC<WalletPickerProps> = () => {
  const { setModal } = useModal();

  return (
    <div className="p-4 w-3/12 rounded-xl bg-neutral-800">
      <div className="flex items-center justify-between">
        <p className="font-bold text-neutral-300">
          Choose your wallet provider:
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
      <div className="mt-12 grid overflow-hidden grid-cols-2 auto-rows-auto gap-5">
        {providers.map(({ name, logo }) => (
          <div
            className="py-4 flex flex-col justify-center items-center rounded-lg cursor-pointer bg-neutral-700"
            key={name}
          >
            <Image src={logo} alt={name} height={36} width={36} />
            <p className="mt-2 text-sm font-bold text-neutral-300">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletPicker;
