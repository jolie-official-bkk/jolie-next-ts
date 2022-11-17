import { useTranslation } from "next-i18next";
import Image from "next/image";
import { ComponentProps, MouseEventHandler } from "react";
import { IData } from "../../data/data";

interface IHairCard extends ComponentProps<"div"> {
  item: IData;
  imagePrefix: "hair-style" | "hair-structure" | "scalp-moisture";
  isActive: boolean;
}

function HairCard({ item, imagePrefix, isActive, onClick }: IHairCard) {
  const { i18n } = useTranslation();

  return (
    <div
      className="flex flex-col flex-grow max-w-[240px] cursor-pointer"
      style={{
        boxShadow: "2px 5px 10px 1px rgba(0, 0, 0, 0.3)",
      }}
      onClick={onClick}
    >
      <Image
        src={`${
          process.env.REACT_APP_S3_PREFIX
        }/images/hairStyle/${imagePrefix}-${item.name.toLowerCase()}.png`}
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
