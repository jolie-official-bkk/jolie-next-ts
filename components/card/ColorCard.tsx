import React from "react";
import { camelCase } from "../../functions/camelCase";

interface IColor {
  hexColor: string;
  colorName: string;
}

function ColorCard({ hexColor, colorName }: IColor) {
  return (
    <div
      className="flex flex-col flex-grow max-w-xs items-center m-auto p-3 pb-0 bg-white rounded-xl"
      style={{ boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.3)" }}
    >
      <div
        className={`w-full h-32 rounded-xl`}
        style={{ background: hexColor }}
      />
      <b className="py-1">{camelCase(colorName)}</b>
    </div>
  );
}

export default ColorCard;
