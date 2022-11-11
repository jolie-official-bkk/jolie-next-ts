import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import HairItem from "../../components/HairItem";
import {
  hairStructure,
  naturalHairTypeArray,
  scalpMoisture,
  THairStructure,
  TNaturalHair,
  TScalpMoisture,
} from "../../interfaces/hair.interface";
import SubHeader from "../../components/SubHeader";
import { OrderContext } from "../../contexts/OrderContext";
import { FormLayout } from "../../layouts/FormLayout";
import Header from "../../components/Header";
import Button from "../../components/buttons/Button";

function HairStyle() {
  const router = useRouter();
  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);

  useEffect(() => {
    setCurrentStep(1);
  }, []);

  function handleClickNext() {
    router.push("/order/hairTreat");
  }

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col">
        <SubHeader>Natural Hair Type</SubHeader>
        <div className="flex w-full justify-evenly">
          {naturalHairTypeArray.map((item: TNaturalHair, itemIndex) => (
            <div
              key={itemIndex}
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
              <HairItem
                key={itemIndex}
                item={item}
                imagePrefix={"hair-style"}
                isActive={orderContext.natural_hair_type === item}
              />
            </div>
          ))}
        </div>
        <SubHeader>Hair Structure</SubHeader>
        <div className="flex w-full justify-evenly">
          {hairStructure.map((item: THairStructure, itemIndex) => (
            <div
              key={itemIndex}
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
              <HairItem
                key={itemIndex}
                item={item}
                imagePrefix={"hair-structure"}
                isActive={orderContext.hair_structure === item}
              />
            </div>
          ))}
        </div>
        <SubHeader>Scalp Moisture</SubHeader>
        <div className="flex justify-evenly pb-4">
          {scalpMoisture.map((item: TScalpMoisture, itemIndex) => (
            <div
              key={itemIndex}
              style={{
                cursor: "pointer",
                boxShadow: "2px 5px 10px 1px rgba(0, 0, 0, 0.3)",
              }}
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
              <HairItem
                key={itemIndex}
                item={item}
                imagePrefix={"scalp-moisture"}
                isActive={orderContext.scalp_moisture === item}
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={() => {
          handleClickNext();
        }}
        disabled={
          !orderContext.natural_hair_type ||
          !orderContext.hair_structure ||
          !orderContext.scalp_moisture
        }
      >
        Next
      </Button>
    </div>
  );
}

HairStyle.PageLayout = FormLayout;

export default HairStyle;
