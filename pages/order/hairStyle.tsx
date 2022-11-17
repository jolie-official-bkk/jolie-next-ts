import { useRouter } from "next/router";
import React, { ReactElement, useContext, useEffect } from "react";
import HairCard from "../../components/card/HairCard";
import SubHeader from "../../components/SubHeader";
import { OrderContext } from "../../contexts/OrderContext";
import { FormLayout } from "../../layouts/FormLayout";
import Button from "../../components/buttons/Button";
import type { NextPageWithLayout } from "../_app";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  hairStructureData,
  IData,
  naturalHairTypeData,
  scalpMoistureData,
} from "../../data/data";

const HairStyle: NextPageWithLayout = () => {
  const router = useRouter();
  const { t } = useTranslation();

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
        <SubHeader>{t("hairStyle.naturalHairType")}</SubHeader>
        <div className="flex w-full justify-evenly">
          {naturalHairTypeData.map((item: IData, itemIndex) => (
            <HairCard
              key={itemIndex}
              item={item}
              imagePrefix={"hair-style"}
              isActive={orderContext.natural_hair_type === item.name}
              onClick={() => {
                setOrderContext({
                  ...orderContext,
                  ["natural_hair_type"]: orderContext.natural_hair_type
                    ? orderContext.natural_hair_type === item.name
                      ? null
                      : item.name
                    : item.name,
                });
              }}
            />
          ))}
        </div>
        <SubHeader>{t("hairStyle.hairStructure")}</SubHeader>
        <div className="flex w-full justify-evenly">
          {hairStructureData.map((item: IData, itemIndex) => (
            <HairCard
              key={itemIndex}
              item={item}
              imagePrefix={"hair-structure"}
              isActive={orderContext.hair_structure === item.name}
              onClick={() => {
                setOrderContext({
                  ...orderContext,
                  ["hair_structure"]: orderContext.hair_structure
                    ? orderContext.hair_structure === item.name
                      ? null
                      : item.name
                    : item.name,
                });
              }}
            />
          ))}
        </div>
        <SubHeader>{t("hairStyle.scalpMoisture")}</SubHeader>
        <div className="flex justify-evenly pb-4">
          {scalpMoistureData.map((item: IData, itemIndex) => (
            <HairCard
              key={itemIndex}
              item={item}
              imagePrefix={"scalp-moisture"}
              isActive={orderContext.scalp_moisture === item.name}
              onClick={() => {
                setOrderContext({
                  ...orderContext,
                  ["scalp_moisture"]: orderContext.scalp_moisture
                    ? orderContext.scalp_moisture === item.name
                      ? null
                      : item.name
                    : item.name,
                });
              }}
            />
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
        {t("button.next")}
      </Button>
    </div>
  );
};

HairStyle.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default HairStyle;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
