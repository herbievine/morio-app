import React from "react";

interface MorioProps {}

const Morio: React.FC<React.SVGProps<SVGSVGElement> & MorioProps> = ({
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 243 221"
      height={16}
      {...props}
    >
      <path
        d="M86.859 20C102.255 -6.66665 140.745 -6.66667 156.141 20L237.114 160.25C252.51 186.917 233.265 220.25 202.473 220.25H40.5266C9.73461 220.25 -9.51039 186.917 5.88561 160.25L86.859 20Z"
        fill="#368085"
      />
    </svg>
  );
};

export default Morio;
