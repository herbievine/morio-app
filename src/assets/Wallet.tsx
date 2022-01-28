import React from "react";

interface WalletProps {}

const Wallet: React.FC<React.SVGProps<SVGSVGElement> & WalletProps> = ({
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={16}
      height={16}
      {...props}
    >
      <g fill="currentColor">
        <path d="M448 112V96c0-35.35-28.65-64-64-64H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h352c35.35 0 64-28.65 64-64V176c0-35.35-28.65-64-64-64zm16 304c0 8.82-7.18 16-16 16H96c-26.47 0-48-21.53-48-48V128c0-26.47 21.53-48 48-48h288c8.82 0 16 7.18 16 16v32H112c-8.84 0-16 7.16-16 16s7.16 16 16 16h336c8.82 0 16 7.18 16 16v240zm-80-160c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z" />
      </g>
    </svg>
  );
};

export default Wallet;
