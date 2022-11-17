import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import { IFormula } from "../../interfaces/hair.interface";

interface Props extends IFormula {
  isActive: boolean;
  isRecommended: boolean;
  imageName: string;
  onClick: MouseEventHandler;
}

function FormulaCard({
  formulaName,
  formulaDetail,
  isActive,
  isRecommended,
  imageName,
  onClick,
}: Props) {
  return (
    <div
      className={`flex max-w-sm w-screen bg-${
        isActive ? "black" : "white"
      } rounded-md mb-2`}
      style={{ boxShadow: "0 3px 3px 2px rgba(0, 0, 0, 0.3)" }}
      onClick={onClick}
    >
      <Image
        src={`${process.env.REACT_APP_S3_PREFIX}/images/formula/${imageName}.jpg`}
        alt={"formula image"}
        className={"h-24 rounded-tl-md rounded-bl-md object-cover"}
        width={240}
        height={160}
        style={{ minWidth: 120 }}
      />
      <div
        className={`flex flex-col justify-around text-${
          isActive ? "white" : "black"
        } px-2 py-3 w-full`}
      >
        <b className="flex text-sm items-center underline">
          {formulaName}
          {isRecommended && <ThumbUpIcon className="w-4 h-4 ml-2" />}
        </b>
        <p
          className={`text-xs text-${
            isActive ? "white" : "black/60"
          } break-words`}
        >
          {formulaDetail}
        </p>
      </div>
    </div>
  );
}

export default FormulaCard;
