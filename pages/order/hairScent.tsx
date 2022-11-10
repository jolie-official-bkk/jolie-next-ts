import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";
import HairItem from "../../components/HairItem";
import Navbar from "../../components/Navbar";
import { OrderContext } from "../../contexts/OrderContext";
import ScentCard from "../../components/card/ScentCard";
import { FormLayout } from "../../layouts/FormLayout";

const SCENT = [
  {
    scent: "singapore",
    location: "Gardens by the Bay",
    scentList: ["sea breeze", "jasmine", "hyacinth"],
  },
  {
    scent: "korea",
    location: "Han River In October",
    scentList: ["hazelnut", "elemi", "pine"],
  },
  {
    scent: "maldives",
    location: "Maldives Sunset",
    scentList: ["apple", "black current", "plum"],
  },
  {
    scent: "japan",
    location: "Shibuya Morning",
    scentList: ["tangerine", "nutmeg", "bergamot"],
  },
  {
    scent: "thailand",
    location: "Thonglor Night Club",
    scentList: ["bergamot", "lemon", "pear"],
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
              <div
                key={scentIndex}
                onClick={() => {
                  setOrderContext({ ...orderContext, scent: scent.scent });
                }}
              >
                <ScentCard {...scent} />
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="flex h-12 justify-center items-center sticky bottom-0 text-white bg-black"
        onClick={() => {
          handleClickNext();
        }}
        disabled={!orderContext.scent}
      >
        Next
      </button>
    </div>
  );
}

HairScent.PageLayout = FormLayout;

export default HairScent;
