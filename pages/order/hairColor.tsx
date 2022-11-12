import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Button from "../../components/buttons/Button";
import ColorCard from "../../components/card/ColorCard";
import { OrderContext } from "../../contexts/OrderContext";
import { COLOR } from "../../data/color";
import { FormLayout } from "../../layouts/FormLayout";

function HairColor() {
  const router = useRouter();

  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);

  useEffect(() => {
    setCurrentStep(5);
  }, []);

  function handleClickNext() {
    router.push("/order/hairScent");
  }

  function checkItemClicked(item: string): boolean {
    if (orderContext.color) {
      return orderContext.color === item;
    }

    return false;
  }

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col">
        <div className="px-1 py-4 grid grid-cols-2 sm:grid-cols-3 gap-1 overflow-y-auto">
          {COLOR.map((color, colorIndex) => {
            return (
              <ColorCard
                key={colorIndex}
                isActive={checkItemClicked(color.colorName)}
                onClick={() => {
                  setOrderContext({
                    ...orderContext,
                    color: orderContext.color
                      ? orderContext.color === color.colorName
                        ? null
                        : color.colorName
                      : color.colorName,
                  });
                }}
                {...color}
              />
            );
          })}
        </div>
      </div>
      <Button
        onClick={() => {
          handleClickNext();
        }}
        disabled={!orderContext.color}
      >
        Next
      </Button>
    </div>
  );
}

HairColor.PageLayout = FormLayout;

export default HairColor;
