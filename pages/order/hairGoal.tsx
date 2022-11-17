import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { ReactElement, useContext, useEffect } from "react";
import Button from "../../components/buttons/Button";
import GridCard from "../../components/card/GridCard";
import SubHeader from "../../components/SubHeader";
import { OrderContext } from "../../contexts/OrderContext";
import { hairGoalData, IData } from "../../data/data";
import { FormLayout } from "../../layouts/FormLayout";
import type { NextPageWithLayout } from "../_app";

const MAXIMUM_HAIRGOAL_SELECT = 5;

const HairGoal: NextPageWithLayout = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);

  useEffect(() => {
    setCurrentStep(3);
  }, []);

  function handleClickNext() {
    router.push("/order/hairFormula");
  }

  function checkItemClicked(itemName: string): boolean {
    if (orderContext.hair_goal) {
      return orderContext.hair_goal.includes(itemName);
    }

    return false;
  }

  function onItemClicked(item: IData): void {
    if (orderContext.hair_goal) {
      if (checkItemClicked(item.name)) {
        setOrderContext({
          ...orderContext,
          hair_goal: orderContext.hair_goal.filter(
            (_item: string) => _item !== item.name
          ),
        });
      } else if (orderContext.hair_goal.length < MAXIMUM_HAIRGOAL_SELECT) {
        setOrderContext({
          ...orderContext,
          hair_goal: [...orderContext.hair_goal, item.name],
        });
      }
    }
  }

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col">
        <SubHeader>{t("hairGoal.subTitle")}</SubHeader>
        <div className="px-1 mb-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1">
          {hairGoalData.map((item: IData, itemIndex) => (
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
        disabled={!!!orderContext.hair_goal?.length}
      >
        {t("button.next")}
      </Button>
    </div>
  );
};

HairGoal.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default HairGoal;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
