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
        src={`${process.env.REACT_APP_S3_PREFIX}/images/scent/${imageName}.jpg`}
        alt={"scent image"}
        className={"h-32 object-cover rounded-xl"}
        width={300}
        height={300}
        priority
      />
      <div className="text-center flex flex-col justify-center">
        <b
          className={`relative top-1 text-[11px] text-${
            isActive ? "white" : "black"
          }`}
        >{`${scent}`}</b>
        {!!scentIngredients.length && (
          <p
            className={`relative bottom-0.5 font-medium text-${
              isActive ? "white" : "black/60"
            }`}
            style={{ fontSize: "0.7rem" }}
          >
            {scentIngredients.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}

export default ScentCard;
