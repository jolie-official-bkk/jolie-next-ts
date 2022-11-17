import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { ReactElement, useContext, useEffect } from "react";
import Button from "../../components/buttons/Button";
import ColorCard from "../../components/card/ColorCard";
import { OrderContext } from "../../contexts/OrderContext";
import { colorData, IColor } from "../../data/data";
import { FormLayout } from "../../layouts/FormLayout";
import { NextPageWithLayout } from "../_app";

const HairColor: NextPageWithLayout = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);

  useEffect(() => {
    setCurrentStep(5);
  }, []);

  function handleClickNext() {
    router.push("/order/hairScent");
  }

  function checkItemClicked(item: string): boolean {
    if (orderContext.color) {
      return orderContext.color === item;
    }

    return false;
  }

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex flex-grow flex-col">
        <div className="px-1 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 overflow-y-auto">
          {colorData.map((color: IColor, colorIndex) => {
            return (
              <ColorCard
                key={colorIndex}
                isActive={checkItemClicked(color.name)}
                onClick={() => {
                  setOrderContext({
                    ...orderContext,
                    color: orderContext.color
                      ? orderContext.color === color.name
                        ? null
                        : color.name
                      : color.name,
                  });
                }}
                hexColor={color.hexColor}
                colorName={i18n.language === "en" ? color.en : color.th}
              />
            );
          })}
        </div>
      </div>
      <Button
        onClick={() => {
          handleClickNext();
        }}
        disabled={!orderContext.color}
      >
        Next
      </Button>
    </div>
  );
};

HairColor.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export default HairColor;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
