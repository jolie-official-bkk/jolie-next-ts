import Image from "next/image";
import React, { MouseEventHandler } from "react";

interface IScentCard {
  scent: string;
  isActive: boolean;
  onClick: MouseEventHandler;
  scentList: string[];
}

function ScentCard({ scent, isActive, onClick, scentList }: IScentCard) {
  return (
    <div
      className={`flex flex-col flex-grow items-center bg-${
        isActive ? "black" : "white"
      } rounded-xl`}
      style={{ boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.3)" }}
      onClick={onClick}
    >
      <Image
        src={`${process.env.REACT_APP_S3_PREFIX}/scent/${scent}.jpg`}
        alt={"scent image"}
        className={"h-32 object-cover rounded-xl"}
        width={300}
        height={300}
        priority
      />
      <b
        className={`py-${!!scentList.length ? 0 : 2} text-xs text-${
          isActive ? "white" : "black"
        }`}
      >{`${scent}`}</b>
      {!!scentList.length && (
        <p
          className={`font-medium text-${isActive ? "white" : "black/60"}`}
          style={{ fontSize: "0.7rem" }}
        >
          {scentList.join(", ")}
        </p>
      )}
    </div>
  );
}

export default ScentCard;
