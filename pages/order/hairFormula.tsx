import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { OrderContext } from "../../contexts/OrderContext";
import { formula } from "../../interfaces/hair.interface";

function HairFormula() {
  const router = useRouter();

  const { orderContext, setOrderContext } = useContext(OrderContext);

  function checkItemClicked(item: string): boolean {
    if (orderContext.fomular) {
      return orderContext.fomular.includes(item);
    }

    return false;
  }

  function onItemClicked(item: string): void {
    if (orderContext.fomular) {
      if (checkItemClicked(item)) {
        setOrderContext({
          ...orderContext,
          fomular: orderContext.fomular.filter(
            (_item: string) => _item !== item
          ),
        });
      } else if (orderContext.fomular.length < 3) {
        setOrderContext({
          ...orderContext,
          fomular: [...orderContext.fomular, item],
        });
      }
    }
  }
  return (
    <div className="h-screen">
      <Navbar />
      <Header>Customize Your Formula</Header>
      <div className="flex flex-col items-center h-3/4 overflow-y-auto">
        {formula.map((item: string, itemIndex) => (
          <div
            key={itemIndex}
            className={`flex items-center justify-between border border-${
              checkItemClicked(item) ? "primary" : "black"
            } m-2 px-2 py-1 ${
              checkItemClicked(item) ? "bg-primary/[0.5]" : ""
            }`}
            style={{ width: 320, cursor: "pointer" }}
            onClick={() => {
              onItemClicked(item);
            }}
          >
            <div className="flex items-center">
              <p className="mr-2">{item}</p>
              <Image
                src={require("../../public/images/primary-logo.jpg")}
                alt={"ingredient not found"}
                className="w-8 h-8 mr-2"
              />
              {" - "}
              {"item goal"}
            </div>
            <p className="text-sm mt-3 underline decoration-dotted">
              more detail
            </p>
          </div>
        ))}
        {/* <div>
        </div> */}
      </div>
      <div className="flex w-full justify-center">
        <Button
          onClick={() => {
            router.push({
              pathname: "/order/hairColor",
            });
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HairFormula;
