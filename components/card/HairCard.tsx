import { useTranslation } from "next-i18next";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { IData } from "../../data/data";

interface IHairCard {
  item: IData;
  imagePrefix: "hair-style" | "hair-structure" | "scalp-moisture";
  isActive: boolean;
  // onClick: MouseEventHandler<HTMLDivElement>;
}

function HairCard({ item, imagePrefix, isActive }: IHairCard) {
  const { i18n } = useTranslation();

  return (
    <div
      className="flex flex-col flex-grow max-w-md cursor-pointer"
      style={{
        boxShadow: "2px 5px 10px 1px rgba(0, 0, 0, 0.3)",
      }}
      // onClick={onClick}
    >
      <Image
        src={`${
          process.env.REACT_APP_S3_PREFIX
        }/hairStyle/${imagePrefix}-${item.name.toLowerCase()}.png`}
        alt={"item not found"}
        width={240}
        height={240}
      />
      <p
        className={`flex flex-col h-8 justify-center text-${
          isActive ? "white" : "black"
        } text-center text-sm md:text-xl bg-${isActive ? "black" : "white"}`}
      >
        {i18n.language === "en" ? item.en : item.th}
      </p>
    </div>
  );
}

export default HairCard;
