import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Chain from "../assets/Chain";
import Clipboard from "../assets/Clipboard";
import Morio from "../assets/Morio";
import Wallet from "../assets/Wallet";
import { useHub } from "../hooks/useHub";
import { useNetwork } from "../hooks/useNetwork";
import { useSigner } from "../hooks/useSigner";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [address, setAddress] = useState<string>();
  const { signer, setSigner } = useSigner();
  const { network } = useNetwork();
  const { hub } = useHub();

  useEffect(() => {
    if (hub && signer) {
      const getAddress = async () => {
        return await signer.getAddress();
      };

      getAddress().then(setAddress);
    } else {
      setAddress(null);
    }
  }, [hub, signer]);

  return (
    <div className="h-screen px-4 py-6 md:p-6 flex flex-col items-center md:items-start border-r border-neutral-700">
      <div className="h-full w-8 md:w-48 flex flex-col items-center justify-between">
        <div className="w-full flex flex-col items-center md:items-start">
          <Link href="/" passHref>
            <div className="flex justify-start items-center cursor-pointer">
              <Morio className="md:mr-2 mt-1 md:mt-0" height="22" />
              <h1 className="hidden md:block font-black text-xl text-neutral-300">
                Morio
              </h1>
            </div>
          </Link>
          <div
            className="w-full my-6 p-2 md:p-4 flex justify-center items-center border border-neutral-700 rounded-md cursor-pointer"
            onClick={() => {
              if (!signer) {
                setSigner();
              }
            }}
          >
            <Wallet className="text-neutral-300 h-5" />
            <p className="hidden md:block md:ml-4 font-bold text-sm text-neutral-300">
              {address
                ? `${address.slice(0, 6)}...${address.slice(38, 42)}`
                : "Connect wallet"}
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Link href="/notes" passHref>
              <div className="mb-4 flex items-center font-bold text-neutral-300 cursor-pointer">
                <Clipboard className="mt-1 md:mt-0 md:mr-2" />
                <p className="hidden md:block">Notes</p>
              </div>
            </Link>
            <Link href="/chains" passHref>
              <div className="mb-4 flex items-center font-bold text-neutral-300 cursor-pointer">
                <Chain className="mt-1 md:mt-0 md:mr-2" />
                <p className="hidden md:block">Chains</p>
              </div>
            </Link>
          </div>
        </div>
        {network && (
          <a
            className="w-full"
            href={
              network.explorer +
              "address/" +
              network.contractAddress +
              "?fromaddress=" +
              address
            }
            target="_blank"
            rel="noreferrer"
          >
            <div className="w-full p-2 md:p-4 flex justify-center items-center border border-neutral-700 rounded-md cursor-pointer">
              <Image
                src={network.logo}
                alt={network.name}
                height={24}
                width={24}
              />
              <p className="hidden md:block md:ml-4 font-bold text-sm text-neutral-300">
                {network.contractAddress.slice(0, 6)}...
                {network.contractAddress.slice(38, 42)}
              </p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
