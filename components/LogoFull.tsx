import Image from "next/image";
import React from "react";

function LogoFull() {
  return (
    <Image
      src={`${process.env.REACT_APP_S3_PREFIX}/svgs/logo-full.svg`}
      alt="logo image"
      width={210}
      height={42}
    />
  );
}

export default LogoFull;
