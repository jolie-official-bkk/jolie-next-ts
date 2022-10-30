import React, { ChangeEvent, useContext } from "react";
import OutlinedButton from "../../components/buttons/OutlinedButton";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Button from "../../components/buttons/Button";
import { useRouter } from "next/router";
import { OrderContext } from "../../contexts/OrderContext";
import SummaryItem from "../../components/SummaryItem";

function Summary() {
  const router = useRouter();

  const { orderContext, setOrderContext } = useContext(OrderContext);

  function onChange(event: ChangeEvent<HTMLInputElement>): void {
    setOrderContext({
      ...orderContext,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmitOrder(): Promise<void> {
    try {
      console.log(orderContext);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  return (
    <div className="h-screen">
      <Navbar />
      <Header>Make It Your Own!</Header>
      <div className="flex flex-col h-3/4 items-center">
        <div className="flex justify-center">
          <OutlinedButton>Join Me</OutlinedButton>
        </div>
        <Header>Order Summary</Header>
        {/* <p>{JSON.stringify(orderContext)}</p> */}
        <div className="flex flex-col h-1/2 w-4/5 max-w-lg md:justify-evenly p-2 lg:p-5 rounded-lg bg-gray-50 border border-gray-300 overflow-y-auto">
          {Object.entries(orderContext).map(([key, value], entryIndex) => {
            if (key !== "shampoo_name")
              return (
                <SummaryItem key={entryIndex} header={key} detail={value} />
              );
          })}
        </div>
        <Header>Name Your Bottle</Header>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg my-5 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          name="shampoo_name"
          onChange={onChange}
        />
        <div className="flex justify-center">
          <Button
            onClick={() => {
              handleSubmitOrder();
            }}
          >
            <b>Order!</b>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
