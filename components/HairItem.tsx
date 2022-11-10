import Image from "next/image";
import React from "react";
import { camelCase } from "../functions/camelCase";

type PropsType = {
  item: string;
  imagePrefix: "hair-style" | "hair-structure" | "scalp-moisture";
};

function HairItem({ item, imagePrefix }: PropsType) {
  return (
    <div className="flex flex-col flex-grow">
      <Image
        src={require(`../public/images/hairStyle/${imagePrefix}-${item}.png`)}
        alt={"item not found"}
      />
      <b className="flex flex-col h-8 justify-center text-center text-sm md:text-3xl lg:text-5xl bg-white">
        {camelCase(item)}
      </b>
    </div>
  );
}

export default HairItem;
