import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Button from "../../components/buttons/Button";
import { OrderContext } from "../../contexts/OrderContext";
import ScentCard from "../../components/card/ScentCard";
import { FormLayout } from "../../layouts/FormLayout";

const SCENT = [
  {
    scent: "Gardens by the Bay At Singapore",
    scentList: ["sea breeze", "jasmine", "hyacinth"],
  },
  {
    scent: "Han River In October At Korea",
    scentList: ["hazelnut", "elemi", "pine"],
  },
  {
    scent: "Maldives Sunset At Maldives",
    scentList: ["apple", "black current", "plum"],
  },
  {
    scent: "Shibuya Morning At Japan",
    scentList: ["tangerine", "nutmeg", "bergamot"],
  },
  {
    scent: "Thonglor Night Club At Thailand",
    scentList: ["bergamot", "lemon", "pear"],
  },
  {
    scent: "Fragrance Free",
    scentList: [],
  },
];

function HairScent() {
  const router = useRouter();

  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);

  useEffect(() => {
    setCurrentStep(6);
  }, []);

  function handleClickNext() {
    router.push("/order/orderShampoo");
  }

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col">
        <div className="px-1 py-4 grid grid-cols-2 sm:grid-cols-3 gap-1 overflow-y-auto">
          {SCENT.map((scent, scentIndex) => {
            return (
              <ScentCard
                key={scentIndex}
                isActive={orderContext.scent === scent.scent}
                onClick={() => {
                  setOrderContext({
                    ...orderContext,
                    scent: orderContext.scent
                      ? orderContext.scent === scent.scent
                        ? null
                        : scent.scent
                      : scent.scent,
                  });
                }}
                {...scent}
              />
            );
          })}
        </div>
      </div>
      <Button
        onClick={() => {
          handleClickNext();
        }}
        disabled={!orderContext.scent}
      >
        Next
      </Button>
    </div>
  );
}

HairScent.PageLayout = FormLayout;

export default HairScent;
