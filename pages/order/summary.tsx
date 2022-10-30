import React, { useContext } from "react";
import OutlinedButton from "../../components/buttons/OutlinedButton";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Button from "../../components/buttons/Button";
import { useRouter } from "next/router";
import { OrderContext } from "../../contexts/OrderContext";

function Summary() {
  const router = useRouter();

  const { orderContext, setOrderContext } = useContext(OrderContext);

  return (
    <div className="h-screen">
      <Navbar />
      <Header>Make It Your Own!</Header>
      <div className="flex flex-col h-3/4 items-center">
        <div className="flex justify-center">
          <OutlinedButton>Join Me</OutlinedButton>
        </div>
        <Header>Order Summary</Header>
        <p>{JSON.stringify(orderContext)}</p>
        <Header>Name Your Bottle</Header>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg my-5 focus:ring-blue-500 focus:border-blue-500 block p-2.5" />
        <div className="flex justify-center">
          <Button>
            <b>Order!</b>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
