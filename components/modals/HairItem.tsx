import Image from "next/image";
import React, { Fragment } from "react";

type PropsType = {
  item: string;
};

function HairItem({ item }: PropsType) {
  return (
    <Fragment>
      <Image
        src={require("../../assets/images/primary-logo.jpg")}
        alt={"item not found"}
        className={"w-20 h-20 lg:w-28 lg:h-28"}
      />
      <p className="text-center text-sm lg:text-xl">{item}</p>
    </Fragment>
  );
}

export default HairItem;
