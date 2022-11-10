import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import FormulaCard from "../../components/card/FormulaCard";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import { OrderContext } from "../../contexts/OrderContext";
import { formulaName, TFormulaName } from "../../interfaces/hair.interface";
import { FormLayout } from "../../layouts/FormLayout";

const FORMULA_DETAIL: string[] = [
  "Damage remedy : coconut, bran, jojoba, evening primrose",
  "Anti-dandruff : evening primrose, sunflower seed, moringa, sweet almond",
  "Color protection : moringa, evening primrose, rose hip, sesame",
  "Thermal protection : coconut, avocado, macadamia, grape seed",
  "Shine : bergamot, sesame, bran, sunflower seed",
  "Strengthen : tea tree, moringa, jojoba, sunflower seed",
  "Oil control : rose hip, coconut, sweet almond, grape seed",
];

function HairFormula() {
  const router = useRouter();

  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);

  useEffect(() => {
    setCurrentStep(4);
  }, []);

  function handleClickNext() {
    router.push("/order/hairColor");
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
        <SubHeader>Choose up to 3</SubHeader>
        {formulaName.map((item: TFormulaName, itemIndex) => (
          <div onClick={() => onItemClicked(item)}>
            <FormulaCard
              key={itemIndex}
              formulaName={item}
              formulaDetail={FORMULA_DETAIL[itemIndex]}
            />
          </div>
        ))}
      </div>
      <button
        className="flex h-12 justify-center items-center sticky bottom-0 text-white bg-black"
        onClick={() => {
          handleClickNext();
        }}
        disabled={!!!orderContext.formula?.length}
      >
        Next
      </button>
    </div>
  );
}

HairFormula.PageLayout = FormLayout;

export default HairFormula;
