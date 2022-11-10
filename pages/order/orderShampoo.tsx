import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { OrderContext } from "../../contexts/OrderContext";
import { FormLayout } from "../../layouts/FormLayout";

function OrderShampoo() {
  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);

  useEffect(() => {
    setCurrentStep(7);
  }, []);

  async function handleSubmitOrder(): Promise<void> {
    try {
      console.log(orderContext);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col" />
      <div
        className="flex h-12 justify-center items-center sticky bottom-0 text-white bg-black"
        onClick={() => {
          handleSubmitOrder();
        }}
      >
        Order!
      </div>
    </div>
  );
}

OrderShampoo.PageLayout = FormLayout;

export default OrderShampoo;
