import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Button from "../../components/buttons/Button";
import GridCard from "../../components/card/GridCard";
import SubHeader from "../../components/SubHeader";
import { OrderContext } from "../../contexts/OrderContext";
import { hairTreat, THairTreat } from "../../interfaces/hair.interface";
import { FormLayout } from "../../layouts/FormLayout";

function HairTreat() {
  const router = useRouter();

  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);

  useEffect(() => {
    setCurrentStep(2);
  }, []);

  function handleClickNext() {
    router.push("/order/hairGoal");
  }

  function checkItemClicked(item: string): boolean {
    if (orderContext.hair_treat) {
      return orderContext.hair_treat.includes(item);
    }

    return false;
  }

  function onItemClicked(item: string): void {
    if (orderContext.hair_treat) {
      if (checkItemClicked(item)) {
        setOrderContext({
          ...orderContext,
          hair_treat: orderContext.hair_treat.filter(
            (_item: string) => _item !== item
          ),
        });
      } else {
        if (item === "none of these" || item === "natural hair") {
          setOrderContext({ ...orderContext, hair_treat: [item] });
        } else {
          setOrderContext({
            ...orderContext,
            hair_treat: [
              ...orderContext.hair_treat.filter(
                (_item) => !["none of these", "natural hair"].includes(_item)
              ),
              item,
            ],
          });
        }
      }
    }
  }

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col">
        <SubHeader>Select all that apply</SubHeader>
        <div className="px-1 mb-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1">
          {hairTreat.map((item: THairTreat, itemIndex) => (
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
        disabled={!!!orderContext.hair_treat?.length}
      >
        Next
      </Button>
    </div>
  );
}

HairTreat.PageLayout = FormLayout;

export default HairTreat;
