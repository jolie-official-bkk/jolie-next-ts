import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/buttons/Button";
import OutlinedButton from "../../components/buttons/OutlinedButton";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { hairTreat } from "../../interfaces/hair.interface";

function HairTreat() {
  const router = useRouter();
  return (
    <div className="h-screen">
      <Navbar />
      <Header>Do you color or treat your hair ?</Header>
      <div className="flex flex-col h-3/4 justify-evenly">
        <div className="px-5 my-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-12">
          {hairTreat.map((item: string, itemIndex) => (
            <div
              key={itemIndex}
              className="bg-red-200 text-center w-32 lg:w-48 py-2 mx-auto rounded-full"
            >
              <p className="text-lg lg:text-2xl">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button
          onClick={() => {
            router.push("/order/hairGoal");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HairTreat;
