import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { ReactElement, useContext, useEffect } from "react";
import Button from "../../components/buttons/Button";
import GridCard from "../../components/card/GridCard";
import SubHeader from "../../components/SubHeader";
import { OrderContext } from "../../contexts/OrderContext";
import { hairGoal } from "../../interfaces/hair.interface";
import { FormLayout } from "../../layouts/FormLayout";
import type { NextPageWithLayout } from "../_app";

const MAXIMUM_HAIRGOAL_SELECT = 5;

const HairGoal: NextPageWithLayout = () => {
  const router = useRouter();

  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);

  useEffect(() => {
    setCurrentStep(3);
  }, []);

  function handleClickNext() {
    router.push("/order/hairFormula");
  }

  function checkItemClicked(item: string): boolean {
    if (orderContext.hair_goal) {
      return orderContext.hair_goal.includes(item);
    }

    return false;
  }

  function onItemClicked(item: string): void {
    if (orderContext.hair_goal) {
      if (checkItemClicked(item)) {
        setOrderContext({
          ...orderContext,
          hair_goal: orderContext.hair_goal.filter(
            (_item: string) => _item !== item
          ),
        });
      } else if (orderContext.hair_goal.length < MAXIMUM_HAIRGOAL_SELECT) {
        setOrderContext({
          ...orderContext,
          hair_goal: [...orderContext.hair_goal, item],
        });
      }
    }
  }

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col">
        <SubHeader>{`choose up to ${MAXIMUM_HAIRGOAL_SELECT}`}</SubHeader>
        <div className="px-1 mb-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1">
          {hairGoal.map((item: string, itemIndex) => (
            <GridCard
              key={itemIndex}
              onClick={() => {
                onItemClicked(item);
              }}
              isActive={checkItemClicked(item)}
              item={item}
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
        Next
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
