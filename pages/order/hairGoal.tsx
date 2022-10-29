import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SubHeader from "../../components/SubHeader";
import { hairGoal } from "../../interfaces/hair.interface";

function HairGoal() {
  const router = useRouter();
  return (
    <div className="h-screen">
      <Navbar />
      <Header>Choose Your Hair Goals</Header>
      <div className="flex flex-col h-3/4 justify-around">
        <SubHeader>choose up to 3</SubHeader>
        <div className="px-5 my-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {hairGoal.map((item: string, itemIndex) => (
            <div
              key={itemIndex}
              className="bg-red-200 text-center text-xs py-2"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button
          onClick={() => {
            router.push("/order/hairFormula");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HairGoal;
