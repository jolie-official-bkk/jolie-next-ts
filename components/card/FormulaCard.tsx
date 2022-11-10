import Image from "next/image";
import React from "react";
import { IFormula } from "../../interfaces/hair.interface";

function FormulaCard({ formulaName, formulaDetail }: IFormula) {
  return (
    <div
      className="flex max-w-sm w-screen bg-white rounded-md mb-2"
      style={{ boxShadow: "0 3px 3px 2px rgba(0, 0, 0, 0.3)" }}
    >
      <Image
        src={require(`../../public/images/formula/${formulaName}.jpg`)}
        alt={"formula image"}
        className={"w-36 h-24 rounded-md object-fill"}
      />
      <div className="flex flex-col justify-around px-4 py-3 w-52">
        <b className="underline">{formulaName}</b>
        <p className="text-xs break-words">{formulaDetail}</p>
      </div>
    </div>
  );
}

export default FormulaCard;
