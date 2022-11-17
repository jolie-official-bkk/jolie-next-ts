import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { ReactElement, useContext, useEffect } from "react";
import Button from "../../components/buttons/Button";
import GridCard from "../../components/card/GridCard";
import SubHeader from "../../components/SubHeader";
import { OrderContext } from "../../contexts/OrderContext";
import { hairTreatData, IData } from "../../data/data";
import { FormLayout } from "../../layouts/FormLayout";
import type { NextPageWithLayout } from "../_app";

const HairTreat: NextPageWithLayout = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);

  useEffect(() => {
    setCurrentStep(2);
  }, []);

  function handleClickNext() {
    router.push("/order/hairGoal");
  }

  function checkItemClicked(itemName: string): boolean {
    if (orderContext.hair_treat) {
      return orderContext.hair_treat.includes(itemName);
    }

    return false;
  }

  function onItemClicked(item: IData): void {
    if (orderContext.hair_treat) {
      if (checkItemClicked(item.name)) {
        setOrderContext({
          ...orderContext,
          hair_treat: orderContext.hair_treat.filter(
            (_item: string) => _item !== item.name
          ),
        });
      } else {
        if (item.name === "none of these" || item.name === "natural hair") {
          setOrderContext({ ...orderContext, hair_treat: [item.name] });
        } else {
          setOrderContext({
            ...orderContext,
            hair_treat: [
              ...orderContext.hair_treat.filter(
                (_item) => !["none of these", "natural hair"].includes(_item)
              ),
              item.name,
            ],
          });
        }
      }
    }
  }

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col">
        <SubHeader>{t("hairTreat.subTitle")}</SubHeader>
        <div className="px-1 mb-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1">
          {hairTreatData.map((item: IData, itemIndex) => (
            <GridCard
              key={itemIndex}
              isActive={checkItemClicked(item.name)}
              item={item}
              onClick={() => {
                onItemClicked(item);
              }}
            />
          ))}
        </div>
      </div>
      <Button
        onClick={() => {
          handleClickNext();
        }}
        disabled={!!!orderContext.hair_treat?.length}
      >
        {t("button.next")}
      </Button>
    </div>
  );
};

HairTreat.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default HairTreat;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
