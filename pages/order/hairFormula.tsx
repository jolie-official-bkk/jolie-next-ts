import { ThumbUpIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/buttons/Button";
import FormulaCard from "../../components/card/FormulaCard";
import SubHeader from "../../components/SubHeader";
import { OrderContext } from "../../contexts/OrderContext";
import { FORMULA_DETAIL } from "../../data/formulaDetail";
import { HAIR_GOAL_MATCH } from "../../data/hairGoalMatch";
import {
  formulaName,
  TFormulaName,
  THairGoal,
} from "../../interfaces/hair.interface";
import { FormLayout } from "../../layouts/FormLayout";

function HairFormula() {
  const router = useRouter();

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

  function checkItemClicked(item: string): boolean {
    if (orderContext.formula) {
      return orderContext.formula.includes(item);
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
        <SubHeader>Choose 3 formulas</SubHeader>
        <p className="flex text-black/50">
          <ThumbUpIcon className="w-6 h-6 mr-2 mb-2 text-black/50" />
          Recommended formulas based on your goals
        </p>
        {formulaName.map((item: TFormulaName, itemIndex) => (
          <FormulaCard
            key={itemIndex}
            formulaName={item}
            formulaDetail={FORMULA_DETAIL[itemIndex]}
            isActive={checkItemClicked(item)}
            isRecommended={recommendedFormulas.includes(
              FORMULA_DETAIL[itemIndex].split(" : ")[0]
            )}
            onClick={() => onItemClicked(item)}
          />
        ))}
      </div>
      <Button
        onClick={() => {
          handleClickNext();
        }}
        disabled={orderContext.formula?.length !== 3}
      >
        Next
      </Button>
    </div>
  );
}

HairFormula.PageLayout = FormLayout;

export default HairFormula;
