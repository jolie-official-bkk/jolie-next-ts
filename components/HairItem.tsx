import Image from "next/image";
import React from "react";
import { camelCase } from "../functions/camelCase";

type PropsType = {
  item: string;
  imagePrefix: "hair-style" | "hair-structure" | "scalp-moisture";
  isActive: boolean;
};

function HairItem({ item, imagePrefix, isActive }: PropsType) {
  return (
    <div
      className="flex flex-col flex-grow cursor-pointer"
      style={{
        boxShadow: "2px 5px 10px 1px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Image
        src={`/../public/images/hairStyle/${imagePrefix}-${item}.png`}
        alt={"item not found"}
        width={300}
        height={400}
      />
      <b
        className={`flex flex-col h-8 justify-center text-${
          isActive ? "white" : "black"
        } text-center text-sm md:text-2xl lg:text-3xl bg-${
          isActive ? "black" : "white"
        }`}
      >
        {camelCase(item)}
      </b>
    </div>
  );
}

export default HairItem;
