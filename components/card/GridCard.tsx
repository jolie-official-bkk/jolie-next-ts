import React, { MouseEventHandler } from "react";
import { camelCase } from "../../functions/camelCase";
import { THairGoal, THairTreat } from "../../interfaces/hair.interface";

type Props = {
  isActive: boolean;
  item: THairTreat | THairGoal;
  onClick: MouseEventHandler;
};

function GridCard({ isActive, item, onClick }: Props) {
  return (
    <div
      className={`flex flex-grow h-14 items-center rounded-xl bg-${
        isActive ? "black" : "white"
      } cursor-pointer`}
      style={{
        boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.3)",
      }}
      onClick={onClick}
    >
      <b
        className={`flex items-center text-xl lg:text-2xl text-center mx-auto text-${
          isActive ? "white" : "black"
        }`}
      >
        {camelCase(item)}
      </b>
    </div>
  );
}

export default GridCard;
