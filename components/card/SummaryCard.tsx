import Image from "next/image";
import React, { ReactNode, useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { FormulaData } from "../../data/formulaData";
import { HAIR_GOAL_MATCH } from "../../data/hairGoalMatch";

type Props = {
  children: ReactNode;
};

function SummaryCard() {
  const { orderContext } = useContext(OrderContext);

  const Header = ({ children }: Props) => (
    <header className="text-xs text-white bg-black w-full pl-3 my-0.6">
      {children}
    </header>
  );

  const Item = ({ children }: Props) => (
    <p className="text-xs text-black/60">{children}</p>
  );

  return (
    <div className="flex flex-grow flex-col w-full items-center border-2 pt-2 border-black">
      <h1 className="font-extrabold">JOLIE</h1>
      <h2 className="font-medium" style={{ fontSize: "0.6rem" }}>
        PREMIUM CUSTOMIZED SHAMPOO
      </h2>
      <h3 className="flex" style={{ fontSize: "0.6rem" }}>
        FOR&nbsp;
        <p className="text-black/60">
          {orderContext.shampoo_name ? orderContext.shampoo_name : "YOURNAME"}
        </p>
      </h3>
      <p style={{ fontSize: "0.6rem" }}>
        {!!orderContext.formula.length
          ? orderContext.formula
              .map(
                (formula, formulaIndex) =>
                  FormulaData.filter(
                    (_formula) => _formula.formulaName === formula
                  )[0].property
              )
              .join(" • ")
          : ""}
      </p>
      <Header>Formula :</Header>
      <div className="text-center">
        {orderContext.formula?.map((formula, formulaIndex) => (
          <Item key={formulaIndex}>{formula}</Item>
        ))}
      </div>
      <Header>Color :</Header>
      <div className="text-center">
        <Item>{orderContext.color}</Item>
      </div>
      <Header>Fragrance :</Header>
      <div className="text-center">
        <Item>{orderContext.scent}</Item>
      </div>
      <div className="h-px w-10/12 mx-2 mt-1 bg-black"></div>
      <div className="w-full h-10 flex justify-center items-center">
        <Image
          src={`${process.env.REACT_APP_S3_PREFIX}/logo-full.png`}
          alt="full logo"
          width={200}
          height={50}
          className="px-10"
        />
      </div>
      <footer
        className="w-full text-right text-black/60 pr-2"
        style={{ fontSize: "0.4rem" }}
      >
        10 fl oz / 300 ml
      </footer>
    </div>
  );
}

export default SummaryCard;
