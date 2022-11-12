import React, { ChangeEvent, FormEvent, useContext } from "react";
import OutlinedButton from "../../components/buttons/OutlinedButton";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Button from "../../components/buttons/Button";
import { useRouter } from "next/router";
import { OrderContext } from "../../contexts/OrderContext";
import SummaryItem from "../../components/SummaryItem";
import { UserContext } from "../../contexts/UserContext";
import { SystemContext } from "../../contexts/SystemContext";
import { placeOrder } from "../../api/order";

function Summary() {
  const router = useRouter();

  const { setShowLoginModal } = useContext(SystemContext);
  const { isAuthenticated } = useContext(UserContext);
  const { orderContext, setOrderContext } = useContext(OrderContext);

  function onChange(event: ChangeEvent<HTMLInputElement>): void {
    setOrderContext({
      ...orderContext,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmitOrder(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (isAuthenticated) {
      const requestBody = JSON.stringify(orderContext);
      console.log(requestBody);

      try {
        await placeOrder(requestBody).then((response) => {
          console.log(response);
          // if (response?.status == "OK") {

          // }
        });
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      setShowLoginModal(true);
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
            if (key !== "shampoo_name" && key !== "user_id")
              if (!["shampoo_name", "user_id"].includes(key))
                return (
                  <SummaryItem key={entryIndex} header={key} detail={value} />
                );
          })}
        </div>
        <form onSubmit={handleSubmitOrder}>
          <Header>Name Your Bottle</Header>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg my-5 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            name="shampoo_name"
            onChange={onChange}
            required
          />
          <div className="flex justify-center">
            <Button type="submit">
              <b>Order!</b>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Summary;
