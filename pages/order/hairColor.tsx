import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Button from "../../components/buttons/Button";
import ColorCard from "../../components/card/ColorCard";
import { OrderContext } from "../../contexts/OrderContext";
import { FormLayout } from "../../layouts/FormLayout";

const COLOR = [
  {
    hexColor: "#AEF4F9",
    colorName: "Blue Monday",
  },
  {
    hexColor: "#AEF9C3",
    colorName: "Emerald",
  },
  {
    hexColor: "#F9CAF4",
    colorName: "Pink Skies",
  },
  {
    hexColor: "#CFBAFC",
    colorName: "Purple Rain",
  },
  {
    hexColor: "#F9C0AE",
    colorName: "Tangerine",
  },
  {
    hexColor: "#DEDEDE",
    colorName: "No Color",
  },
];

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
                isActive={checkItemClicked(color.hexColor)}
                onClick={() => {
                  setOrderContext({
                    ...orderContext,
                    color: orderContext.color ? null : color.hexColor,
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
