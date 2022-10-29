import Image from "next/image";
import React from "react";
// import { INaturalHairType } from "../../interfaces/hair.interface";

type PropsType = {
  item: string;
};

function HairItem({ item }: PropsType) {
  return (
    <div className="outline outline-offset-2 outline-primary/[.75]">
      <Image
        src={require("../../assets/images/primary-logo.jpg")}
        alt={"item not found"}
        className={"w-20 h-20 lg:w-28 lg:h-28"}
      />
      <p className="text-center text-sm lg:text-xl">{item}</p>
    </div>
  );
}

export default HairItem;
