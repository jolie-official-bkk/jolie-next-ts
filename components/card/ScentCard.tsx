import Image from "next/image";
import React from "react";
import { camelCase } from "../../functions/camelCase";

interface IScentCard {
  scent: string;
  location: string;
  scentList: string[];
}

function ScentCard({ scent, location, scentList }: IScentCard) {
  return (
    <div
      className="flex flex-col flex-grow items-center bg-white rounded-xl"
      style={{ boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.3)" }}
    >
      <Image
        src={require(`../../public/images/scent/fragrance-${scent}.jpg`)}
        alt={"scent image"}
        className={"h-32 object-cover rounded-xl"}
      />
      <b className="text-xs">{`${location} @${camelCase(scent)}`}</b>
      <p className="font-medium" style={{ fontSize: "0.7rem" }}>
        {scentList.join(", ")}
      </p>
    </div>
  );
}

export default ScentCard;
