import Image from "next/image";
import { useRouter } from "next/router";
import React, {
  ChangeEvent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { placeOrder } from "../../api/order";
import Button from "../../components/buttons/Button";
import SummaryCard from "../../components/card/SummaryCard";
import { OrderContext } from "../../contexts/OrderContext";
import { FormLayout } from "../../layouts/FormLayout";
import type { NextPageWithLayout } from "../_app";

const OrderShampoo: NextPageWithLayout = () => {
  const router = useRouter();
  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);
  const [buttonText, setButtonText] = useState<string>("Order!");

  useEffect(() => {
    setCurrentStep(7);
  }, []);

  async function handleSubmitOrder(): Promise<void> {
    const requestBody = JSON.stringify(orderContext);
    console.log(requestBody);

    await placeOrder(requestBody)
      .then(() => {
        setButtonText("Done!");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      })
      .catch((error: any) => {
        console.error(error.message);
      });
  }

  function onChange(event: ChangeEvent<HTMLInputElement>): void {
    setOrderContext({ ...orderContext, shampoo_name: event.target.value });
  }

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow items-center">
        <Image
          src={`${process.env.REACT_APP_S3_PREFIX}/bottle/bottle-${
            orderContext.color?.toLocaleLowerCase().split(" ").join("-") ||
            "no-color"
          }.png`}
          alt={"bottle"}
          className="object-contain w-5/12 scale-150"
          width={300}
          height={400}
          priority
        />
        <div className="flex flex-grow max-h-80 flex-col pr-5">
          <SummaryCard />
        </div>
      </div>
      <form
        className="flex flex-grow flex-col items-center"
        onSubmit={handleSubmitOrder}
      >
        <header className="text-lg">Name Your Bottle!</header>
        <input
          className="bg-gray-50 text-black text-sm text-center rounded-lg my-5 focus:ring-blue-500 focus:border-blue-500 block p-2.5 shadow-md shadow-black/40"
          name="shampoo_name"
          placeholder="Your Name"
          onChange={onChange}
          required
        />
        <p>* This name will show on your bottle</p>
      </form>
      <Button
        onClick={() => {
          handleSubmitOrder();
        }}
        disabled={!orderContext.shampoo_name}
      >
        {buttonText}
      </Button>
    </div>
  );
};

OrderShampoo.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default OrderShampoo;
