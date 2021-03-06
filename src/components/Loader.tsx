import React from "react";

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="h-5 w-5 border-4 rounded-full border-t-neutral-500 border-neutral-700 animate-spin"></div>
    </div>
  );
};

export default Loader;
