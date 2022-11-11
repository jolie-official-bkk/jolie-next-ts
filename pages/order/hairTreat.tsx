import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Button from "../../components/buttons/Button";
import SubHeader from "../../components/SubHeader";
import { OrderContext } from "../../contexts/OrderContext";
import { camelCase } from "../../functions/camelCase";
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
        <div className="mb-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1">
          {hairTreat.map((item: THairTreat, itemIndex) => (
            <div
              key={itemIndex}
              className={`flex flex-grow items-center rounded-lg`}
              style={{
                cursor: "pointer",
                boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.3)",
                // background: "red",
              }}
              onClick={() => {
                onItemClicked(item);
              }}
            >
              <b
                className={`flex items-center text-lg lg:text-2xl text-center py-${
                  checkItemClicked(item) ? "1" : "2"
                } mx-auto`}
              >
                {camelCase(item)}
              </b>
            </div>
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
