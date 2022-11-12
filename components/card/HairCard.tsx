import Image from "next/image";
import React from "react";

type PropsType = {
  item: string;
  imagePrefix: "hair-style" | "hair-structure" | "scalp-moisture";
  isActive: boolean;
};

function HairCard({ item, imagePrefix, isActive }: PropsType) {
  return (
    <div
      className="flex flex-col flex-grow cursor-pointer"
      style={{
        boxShadow: "2px 5px 10px 1px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Image
        src={`${
          process.env.REACT_APP_S3_PREFIX
        }/hairStyle/${imagePrefix}-${item.toLocaleLowerCase()}.png`}
        alt={"item not found"}
        width={125}
        height={125}
      />
      <b
        className={`flex flex-col h-8 justify-center text-${
          isActive ? "white" : "black"
        } text-center text-sm md:text-2xl lg:text-3xl bg-${
          isActive ? "black" : "white"
        }`}
      >
        {item}
      </b>
    </div>
  );
}

export default HairCard;
