import React, { MouseEventHandler } from "react";

type Props = {
  hexColor: string;
  colorName: string;
  isActive: boolean;
  onClick: MouseEventHandler;
};

function ColorCard({ hexColor, colorName, isActive, onClick }: Props) {
  return (
    <div onClick={onClick}>
      <div
        className={`flex flex-col flex-grow max-w-[200px] items-center m-auto p-3 pb-0 bg-${
          isActive ? "black" : "white"
        } rounded-xl transition ease 300`}
        style={{ boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.3)" }}
      >
        <div
          className={`w-full h-32 rounded-xl`}
          style={{ background: hexColor }}
        />
        <p className={`py-1 text-${isActive ? "white" : "black"}`}>
          {colorName}
        </p>
      </div>
    </div>
  );
}

export default ColorCard;
