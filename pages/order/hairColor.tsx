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

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col">
        <div className="px-1 py-4 grid grid-cols-2 sm:grid-cols-3 gap-1 overflow-y-auto">
          {COLOR.map((color, colorIndex) => {
            return (
              <div
                key={colorIndex}
                onClick={() => {
                  setOrderContext({ ...orderContext, color: color.hexColor });
                }}
              >
                <ColorCard {...color} />
              </div>
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
