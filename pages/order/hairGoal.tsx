import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import { OrderContext } from "../../contexts/OrderContext";
import { camelCase } from "../../functions/camelCase";
import { hairGoal } from "../../interfaces/hair.interface";
import { FormLayout } from "../../layouts/FormLayout";

const MAXIMUM_HAIRGOAL_SELECT = 5;

function HairGoal() {
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
        <div className="mb-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1">
          {hairGoal.map((item: string, itemIndex) => (
            <div
              key={itemIndex}
              className={`flex flex-grow
                ${checkItemClicked(item) ? "border-4 border-primary" : ""}
              rounded-lg white`}
              style={{
                cursor: "pointer",
                boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.3)",
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
      <button
        className="flex h-12 justify-center items-center sticky bottom-0 text-white bg-black"
        onClick={() => {
          handleClickNext();
        }}
        disabled={!!!orderContext.hair_goal?.length}
      >
        Next
      </button>
    </div>
  );
}

HairGoal.PageLayout = FormLayout;

export default HairGoal;
