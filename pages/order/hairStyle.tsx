import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";
import HairItem from "../../components/modals/HairItem";
import {
  hairStructure,
  naturalHairTypeArray,
  scalpMoisture,
  TNaturaHairAttribute,
} from "../../interfaces/hair.interface";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Button from "../../components/buttons/Button";

function HairStyle() {
  const router = useRouter();
  return (
    <div className="h-screen">
      <Navbar />
      <Header>Choose your hair style</Header>
      <div className="flex flex-col h-3/4 justify-evenly">
        <SubHeader>Natural Hair Type</SubHeader>
        <div className="flex justify-evenly">
          {naturalHairTypeArray.map((item: TNaturaHairAttribute, itemIndex) => (
            <HairItem key={itemIndex} item={item} />
          ))}
        </div>
        <SubHeader>Hair Structure</SubHeader>
        <div className="flex justify-evenly">
          {hairStructure.map((item: TNaturaHairAttribute, itemIndex) => (
            <HairItem key={itemIndex} item={item} />
          ))}
        </div>
        <SubHeader>Scalp Moisture</SubHeader>
        <div className="flex justify-evenly">
          {scalpMoisture.map((item: TNaturaHairAttribute, itemIndex) => (
            <HairItem key={itemIndex} item={item} />
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button
          onClick={() => {
            router.push("/order/hairTreat");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HairStyle;
