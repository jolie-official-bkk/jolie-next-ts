import Image from "next/image";
import React, { MouseEventHandler } from "react";

interface IScentCard {
  scent: string;
  isActive: boolean;
  onClick: MouseEventHandler;
  scentIngredients: string[];
  imageName: string;
}

function ScentCard({
  scent,
  isActive,
  onClick,
  scentIngredients,
  imageName,
}: IScentCard) {
  return (
    <div
      className={`flex flex-col flex-grow max-w-[200px] mx-auto items-center bg-${
        isActive ? "black" : "white"
      } rounded-xl`}
      style={{ boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.3)" }}
      onClick={onClick}
    >
      <Image
        src={`${process.env.REACT_APP_S3_PREFIX}/scent/${imageName}.jpg`}
        alt={"scent image"}
        className={"h-32 object-cover rounded-xl"}
        width={300}
        height={300}
        priority
      />
      <b
        className={`text-[11px] text-${isActive ? "white" : "black"} pt-${
          !!scentIngredients.length ? 1 : 2
        }`}
      >{`${scent}`}</b>
      {!!scentIngredients.length && (
        <p
          className={`font-medium text-${isActive ? "white" : "black/60"}`}
          style={{ fontSize: "0.7rem" }}
        >
          {scentIngredients.join(", ")}
        </p>
      )}
    </div>
  );
}

export default ScentCard;
