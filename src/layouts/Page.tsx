import React from "react";
import cn from "classnames";
import Loader from "../components/Loader";
import Plus from "../assets/Plus";
import Link from "next/link";

interface PageProps {
  title: string;
  component: React.ReactNode;
  loading?: boolean;
  className?: string;
}

const Page: React.FC<PageProps> = ({
  title,
  loading,
  component,
  className,
}) => {
  const c = cn("flex-grow h-screen flex flex-col", className);

  return (
    <div className={c}>
      <div className="px-6 flex justify-between items-center border-b border-neutral-700">
        <h2 className="py-6 font-bold text-lg text-neutral-300">{title}</h2>
        <div className="flex items-center">
          {loading && <Loader className="mr-6" />}
          <Link href="/write" passHref>
            <div className="h-12 w-12 flex justify-center items-center bg-neutral-800 rounded-xl cursor-pointer">
              <Plus className="text-neutral-300" />
            </div>
          </Link>
        </div>
      </div>
      <div className="h-full p-12">{component}</div>
    </div>
  );
};

export default Page;
