import { useRouter } from "next/router";
import React, { ReactElement, useContext, useEffect } from "react";
import Button from "../../components/buttons/Button";
import { OrderContext } from "../../contexts/OrderContext";
import ScentCard from "../../components/card/ScentCard";
import { FormLayout } from "../../layouts/FormLayout";
import type { NextPageWithLayout } from "../_app";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { IScentData, ScentData, scentIngredientData } from "../../data/data";
import { useTranslation } from "next-i18next";

const HairScent: NextPageWithLayout = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

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
          {ScentData.map((scent: IScentData, scentIndex) => {
            return (
              <ScentCard
                key={scentIndex}
                isActive={orderContext.scent === scent.location.name}
                onClick={() => {
                  setOrderContext({
                    ...orderContext,
                    scent: orderContext.scent
                      ? orderContext.scent === scent.location.name
                        ? null
                        : scent.location.name
                      : scent.location.name,
                  });
                }}
                imageName={scent.location.name}
                scent={
                  i18n.language === "en" ? scent.location.en : scent.location.th
                }
                scentIngredients={scent.scentIngredientIds.map(
                  (scentIngredientId) =>
                    i18n.language === "en"
                      ? scentIngredientData[scentIngredientId - 1].en
                      : scentIngredientData[scentIngredientId - 1].th
                )}
              />
            );
          })}
        </div>
      </div>
      <Button
        onClick={() => {
          handleClickNext();
        }}
        disabled={!orderContext.scent}
      >
        Next
      </Button>
    </div>
  );
};

HairScent.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default HairScent;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
