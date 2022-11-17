import { useTranslation } from "next-i18next";
import React, { ComponentProps } from "react";
import { IData } from "../../data/data";

interface IGridCard extends ComponentProps<"div"> {
  isActive: boolean;
  item: IData;
}

function GridCard({ isActive, item, onClick }: IGridCard) {
  const { i18n } = useTranslation();
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
      <p
        className={`flex items-center text-md lg:text-lg text-center mx-auto px-2 text-${
          isActive ? "white" : "black"
        }`}
      >
        {i18n.language === "en" ? item.en : item.th}
      </p>
    </div>
  );
}

export default GridCard;
