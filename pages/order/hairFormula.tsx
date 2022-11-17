import { ThumbUpIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import Button from "../../components/buttons/Button";
import FormulaCard from "../../components/card/FormulaCard";
import SubHeader from "../../components/SubHeader";
import { OrderContext } from "../../contexts/OrderContext";
import {
  formulaData,
  IFormulaData,
  formulaIngredientData,
} from "../../data/data";
import { HAIR_GOAL_MATCH } from "../../data/hairGoalMatch";
import {
  formulaName,
  TFormulaName,
  THairGoal,
} from "../../interfaces/hair.interface";
import { FormLayout } from "../../layouts/FormLayout";
import { NextPageWithLayout } from "../_app";

const HairFormula: NextPageWithLayout = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation();

  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);
  const [recommendedFormulas, setRecommendedFormulas] = useState<string[]>([]);

  useEffect(() => {
    setCurrentStep(4);

    setRecommendedFormulas(getRecommendedFormula(orderContext.hair_goal));
  }, []);

  function handleClickNext() {
    router.push("/order/hairColor");
  }

  function getRecommendedFormula(hair_goal: THairGoal[]) {
    let recommendedFormula: any[] = [];
    hair_goal.forEach((each, index) => {
      const result = HAIR_GOAL_MATCH.get(each);
      if (result) {
        Array.prototype.push.apply(recommendedFormula, result);
      }
    });

    return [...removeDuplicates(recommendedFormula)];
  }

  function removeDuplicates(arr: string[]) {
    return arr.filter(
      (item: string, index: number) => arr.indexOf(item) === index
    );
  }

  function checkItemClicked(itemName: string): boolean {
    if (orderContext.formula) {
      return orderContext.formula.includes(itemName);
    }

    return false;
  }

  function onItemClicked(item: string): void {
    if (orderContext.formula) {
      if (checkItemClicked(item)) {
        setOrderContext({
          ...orderContext,
          formula: orderContext.formula.filter(
            (_item: string) => _item !== item
          ),
        });
      } else if (orderContext.formula.length < 3) {
        setOrderContext({
          ...orderContext,
          formula: [...orderContext.formula, item],
        });
      }
    }
  }

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col items-center overflow-y-auto">
        <SubHeader>{t("formula.subTitle")}</SubHeader>
        <p className="flex text-black/50">
          <ThumbUpIcon className="w-6 h-6 mr-2 mb-2 text-black/50" />
          {t("formula.recommendText")}
        </p>
        {formulaData.map((formula: IFormulaData, formulaIndex) => (
          <FormulaCard
            key={formulaIndex}
            formulaName={
              i18n.language === "en"
                ? formula.formulaName.en
                : formula.formulaName.th
            }
            formulaDetail={`${
              i18n.language === "en" ? formula.property.en : formula.property.th
            } : ${formula.ingredientIds
              .map((ingredientId) =>
                i18n.language === "en"
                  ? formulaIngredientData[ingredientId - 1].en
                  : formulaIngredientData[ingredientId - 1].th
              )
              .join(", ")}`}
            isActive={checkItemClicked(formula.formulaName.name)}
            isRecommended={recommendedFormulas.includes(formula.property.name)}
            imageName={formula.formulaName.name}
            onClick={() => onItemClicked(formula.formulaName.name)}
          />
        ))}
      </div>
      <Button
        onClick={() => {
          handleClickNext();
        }}
        disabled={orderContext.formula?.length !== 3}
      >
        {t("button.next")}
      </Button>
    </div>
  );
};

HairFormula.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default HairFormula;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
