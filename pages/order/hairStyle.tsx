import { useRouter } from "next/router";
import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import HairItem from "../../components/HairItem";
import {
  hairStructure,
  naturalHairTypeArray,
  scalpMoisture,
  TNaturaHair,
} from "../../interfaces/hair.interface";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Button from "../../components/buttons/Button";
import { OrderContext } from "../../contexts/OrderContext";

function HairStyle() {
  const router = useRouter();
  const { orderContext, setOrderContext } = useContext(OrderContext);
  return (
    <div className="h-screen">
      <Navbar />
      <Header>Choose your hair style</Header>
      <div className="flex flex-col h-3/4 justify-evenly">
        <SubHeader>Natural Hair Type</SubHeader>
        <div className="flex justify-evenly">
          {naturalHairTypeArray.map((item: TNaturaHair, itemIndex) => (
            <div
              key={itemIndex}
              className={
                orderContext.natural_hair_type === item
                  ? "bg-primary/[0.3]"
                  : ""
              }
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOrderContext({
                  ...orderContext,
                  ["natural_hair_type"]: orderContext.natural_hair_type
                    ? orderContext.natural_hair_type === item
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
            <div
              key={itemIndex}
              className={
                orderContext.hair_structure === item ? "bg-primary/[0.3]" : ""
              }
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOrderContext({
                  ...orderContext,
                  ["hair_structure"]: orderContext.hair_structure
                    ? orderContext.hair_structure === item
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
        <SubHeader>Scalp Moisture</SubHeader>
        <div className="flex justify-evenly">
          {scalpMoisture.map((item: TNaturaHair, itemIndex) => (
            <div
              key={itemIndex}
              className={
                orderContext.scalp_moisture === item ? "bg-primary/[0.3]" : ""
              }
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOrderContext({
                  ...orderContext,
                  ["scalp_moisture"]: orderContext.scalp_moisture
                    ? orderContext.scalp_moisture === item
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
      </div>
      <div className="flex w-full justify-center">
        <Button
          disabled={
            !orderContext.natural_hair_type ||
            !orderContext.hair_structure ||
            !orderContext.scalp_moisture
          }
          onClick={() => {
            router.push({
              pathname: "/order/hairTreat",
            });
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HairStyle;
