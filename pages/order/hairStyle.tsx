import { useRouter } from "next/router";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import HairItem from "../../components/modals/HairItem";
import {
  hairStructure,
  naturalHairTypeArray,
  scalpMoisture,
  TNaturaHair,
} from "../../interfaces/hair.interface";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Button from "../../components/buttons/Button";
import { IOrder } from "../../interfaces/order.interface";

function HairStyle() {
  const router = useRouter();
  const [submission, setSubmission] = useState<IOrder>({
    natural_hair_type: null,
    hair_structure: null,
    scalp_moisture: null,
    hair_treat: [],
    hair_goal: [],
    fomular: [],
    color: null,
    scent: null,
    shampoo_name: null,
  });
  return (
    <div className="h-screen">
      <Navbar />
      <Header>Choose your hair style</Header>
      <div className="flex flex-col h-3/4 justify-evenly">
        <SubHeader>Natural Hair Type</SubHeader>
        <div className="flex justify-evenly">
          {naturalHairTypeArray.map((item: TNaturaHair, itemIndex) => (
            <div
              className={
                submission.natural_hair_type === item ? "bg-red-100" : ""
              }
              onClick={() => {
                setSubmission({
                  ...submission,
                  ["natural_hair_type"]: submission.natural_hair_type
                    ? submission.natural_hair_type === item
                      ? null
                      : item
                    : item,
                });
              }}
            >
              <HairItem key={itemIndex} item={item} />
            </div>
          ))}
        </div>
        <SubHeader>Hair Structure</SubHeader>
        <div className="flex justify-evenly">
          {hairStructure.map((item: TNaturaHair, itemIndex) => (
            <div>
              <HairItem key={itemIndex} item={item} />
            </div>
          ))}
        </div>
        <SubHeader>Scalp Moisture</SubHeader>
        <div className="flex justify-evenly">
          {scalpMoisture.map((item: TNaturaHair, itemIndex) => (
            <div>
              <HairItem key={itemIndex} item={item} />
            </div>
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
