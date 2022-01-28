import type { NextPage } from "next";
import React from "react";
import Page from "../layouts/Page";
import { networks } from "../config/networks";
import Chain from "../components/Chain";

interface ChainsProps {}

const Chains: NextPage<ChainsProps> = () => {
  return (
    <Page
      title="Chains"
      component={
        <div className="flex justify-center items-start">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-auto gap-5">
            {networks
              .filter(
                ({ environment }) =>
                  process.env.NEXT_PUBLIC_VERCEL_ENV === environment
              )
              .sort((a, b) => (a.currency < b.currency ? -1 : 1))
              .map((network) => (
                <Chain key={network.chainId} chain={network} />
              ))}
          </div>
        </div>
      }
    />
  );
};

export default Chains;
