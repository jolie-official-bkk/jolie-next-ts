import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
import CircleSpinner from "../../components/loading/CircleSpinner";
import { OrderContext } from "../../contexts/OrderContext";
import { SystemContext } from "../../contexts/SystemContext";
import { UserContext } from "../../contexts/UserContext";
import { FormLayout } from "../../layouts/FormLayout";
import type { NextPageWithLayout } from "../_app";

const SHAMPOO_NAME_MAX_LENGTH = 10;

const OrderShampoo: NextPageWithLayout = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);
  const { isAuthenticated } = useContext(UserContext);
  const { setShowLoginModal, setShowOrderResponseModal } =
    useContext(SystemContext);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    setCurrentStep(7);
  }, []);

  async function handleSubmitOrder(): Promise<void> {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    } else {
      setIsSubmitting(true);
      const requestBody = JSON.stringify(orderContext);

      await placeOrder(requestBody)
        .then(() => {
          setIsSubmitting(false);
          setShowOrderResponseModal(true);
        })
        .catch((error: any) => {
          console.error(error.message);
        });
    }
  }

  function onChange(event: ChangeEvent<HTMLInputElement>): void {
    setOrderContext({
      ...orderContext,
      shampoo_name: event.target.value.toUpperCase(),
    });
  }

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow items-center justify-center">
        <Image
          src={`${process.env.REACT_APP_S3_PREFIX}/images/bottle/bottle-${
            orderContext.color?.toLocaleLowerCase().split(" ").join("-") ||
            "no-color"
          }.png`}
          alt={"bottle"}
          className="object-contain w-5/12 max-w-xs scale-150"
          width={300}
          height={400}
          priority
        />
        <div className="flex max-h-80 flex-col pr-5">
          <SummaryCard />
        </div>
      </div>
      <form
        className="flex flex-grow flex-col items-center"
        onSubmit={handleSubmitOrder}
      >
        <header className="text-lg">{t("orderShampoo.nameYourBottle")}</header>
        <input
          className="bg-gray-100 text-black text-sm text-center rounded-full my-5 focus:ring-blue-500 focus:border-blue-500 block p-2.5 shadow-md shadow-black/30"
          name="shampoo_name"
          placeholder={t("orderShampoo.shampooNamePlaceholder")}
          value={orderContext.shampoo_name || ""}
          onChange={onChange}
          maxLength={SHAMPOO_NAME_MAX_LENGTH}
          required
        />
        <p className="text-gray-500">* {t("orderShampoo.disclaimer")}</p>
      </form>
      <Button
        onClick={() => {
          handleSubmitOrder();
        }}
        disabled={!orderContext.shampoo_name || isSubmitting}
      >
        {isSubmitting && <CircleSpinner />}
        {!isSubmitting && <p>{t("button.order")!}</p>}
      </Button>
    </div>
  );
};

OrderShampoo.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default OrderShampoo;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
