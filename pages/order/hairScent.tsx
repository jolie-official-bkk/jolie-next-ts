import { useRouter } from "next/router";
import React, { useContext } from "react";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";
import HairItem from "../../components/HairItem";
import Navbar from "../../components/Navbar";
import { OrderContext } from "../../contexts/OrderContext";

const SCENT = [
  {
    imageUrl: require("../../assets/images/primary-logo.jpg"),
    scent: "Aroma Galore",
  },
  {
    imageUrl: require("../../assets/images/primary-logo.jpg"),
    scent: "Aroma Queen",
  },
  {
    imageUrl: require("../../assets/images/primary-logo.jpg"),
    scent: "Essence Flair",
  },
  {
    imageUrl: require("../../assets/images/primary-logo.jpg"),
    scent: "Fragrance Harmony",
  },
  {
    imageUrl: require("../../assets/images/primary-logo.jpg"),
    scent: "Scentaholic",
  },
];

function HairScent() {
  const router = useRouter();

  const { orderContext, setOrderContext } = useContext(OrderContext);

  return (
    <div className="h-screen">
      <Navbar />
      <Header>Select Your Scent</Header>
      <div className="flex flex-col h-3/4 justify-center">
        <div className="px-5 my-4 grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto">
          {SCENT.map((scent, scentIndex) => {
            return (
              <div
                key={scentIndex}
                className={`flex flex-col items-center mx-auto ${
                  orderContext.scent === scent.scent ? "bg-primary/[0.5]" : ""
                }`}
                onClick={() => {
                  setOrderContext({ ...orderContext, scent: scent.scent });
                }}
              >
                <HairItem item={scent.scent} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button
          onClick={() => {
            router.push({
              pathname: "/order/summary",
              query: { data: JSON.stringify(orderContext) },
            });
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HairScent;
