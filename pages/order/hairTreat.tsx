import { useRouter } from "next/router";
import React, { useContext } from "react";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { OrderContext } from "../../contexts/OrderContext";
import { hairTreat } from "../../interfaces/hair.interface";

function HairTreat() {
  const router = useRouter();

  const { orderContext, setOrderContext } = useContext(OrderContext);

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
    <div className="h-screen">
      <Navbar />
      <Header>Do you color or treat your hair ?</Header>
      <div className="flex flex-col h-3/4 justify-evenly">
        <div className="px-5 my-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-12">
          {hairTreat.map((item: string, itemIndex) => (
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
                className={`text-lg lg:text-2xl bg-red-200 text-center py-${
                  checkItemClicked(item) ? "1" : "2"
                } mx-auto rounded-full`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button
          onClick={() => {
            router.push({
              pathname: "/order/hairGoal",
            });
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HairTreat;
