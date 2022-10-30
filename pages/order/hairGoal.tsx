import { useRouter } from "next/router";
import React, { useContext } from "react";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SubHeader from "../../components/SubHeader";
import { OrderContext } from "../../contexts/OrderContext";
import { hairGoal } from "../../interfaces/hair.interface";

function HairGoal() {
  const router = useRouter();

  const { orderContext, setOrderContext } = useContext(OrderContext);

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
      } else if (orderContext.hair_goal.length < 3) {
        setOrderContext({
          ...orderContext,
          hair_goal: [...orderContext.hair_goal, item],
        });
      }
    }
  }

  return (
    <div className="h-screen">
      <Navbar />
      <Header>Choose Your Hair Goals</Header>
      <div className="flex flex-col h-3/4 justify-around">
        <div className="flex flex-col h-10 justify-center bg-red-200">
          <SubHeader>choose up to 3</SubHeader>
        </div>
        <div className="px-5 my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {hairGoal.map((item: string, itemIndex) => (
            <div
              key={itemIndex}
              className={
                checkItemClicked(item)
                  ? "border-4 border-primary rounded-full"
                  : ""
              }
              style={{ cursor: "pointer" }}
              onClick={() => {
                onItemClicked(item);
              }}
            >
              <p
                className={`text-md lg:text-2xl bg-red-200 text-center py-${
                  checkItemClicked(item) ? "1" : "2"
                } mx-auto rounded-full`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="">
        </div> */}
      </div>
      <div className="flex w-full justify-center">
        <Button
          onClick={() => {
            router.push({
              pathname: "/order/hairFormula",
            });
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HairGoal;
