import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const COLOR = [
  {
    hexColor: "#db6c7f",
    colorName: "crimson",
  },
  {
    hexColor: "#afafaf",
    colorName: "dove",
  },
  {
    hexColor: "#fdc6a0",
    colorName: "latte",
  },
  {
    hexColor: "#ff8af2",
    colorName: "lavender",
  },
  {
    hexColor: "#ff8e42",
    colorName: "peach",
  },
];

function HairColor() {
  const router = useRouter();
  return (
    <div className="h-screen">
      <Navbar />
      <Header>Select Your Color</Header>
      <div className="flex flex-col h-3/4 justify-evenly">
        <div className="px-5 my-4 grid grid-cols-2 sm:grid-cols-3 gap-4 h-3/4 overflow-y-auto">
          {COLOR.map((color, colorIndex) => {
            return (
              <div
                key={colorIndex}
                className="flex flex-col justify-center mx-auto"
              >
                <div
                  className={`w-20 h-20 rounded-full border border-black`}
                  style={{ background: `${color.hexColor}` }}
                />
                <p className="text-center">{color.colorName}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button
          onClick={() => {
            router.push("/order/hairScent");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HairColor;
