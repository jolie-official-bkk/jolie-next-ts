import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const FOMULA = [
  {
    ingredient: "Orange",
    goal: "streghten",
  },
  {
    ingredient: "Bergamot",
    goal: "shine",
  },
  {
    ingredient: "Lavender",
    goal: "hydrate",
  },
  {
    ingredient: "Orange",
    goal: "streghten",
  },
  {
    ingredient: "Bergamot",
    goal: "shine",
  },
  {
    ingredient: "Lavender",
    goal: "hydrate",
  },
  {
    ingredient: "Orange",
    goal: "streghten",
  },
  {
    ingredient: "Bergamot",
    goal: "shine",
  },
  {
    ingredient: "Lavender",
    goal: "hydrate",
  },
  {
    ingredient: "Orange",
    goal: "streghten",
  },
  {
    ingredient: "Bergamot",
    goal: "shine",
  },
  {
    ingredient: "Lavender",
    goal: "hydrate",
  },
  {
    ingredient: "Orange",
    goal: "streghten",
  },
  {
    ingredient: "Bergamot",
    goal: "shine",
  },
  {
    ingredient: "Lavender",
    goal: "hydrate",
  },
  {
    ingredient: "Orange",
    goal: "streghten",
  },
  {
    ingredient: "Bergamot",
    goal: "shine",
  },
  {
    ingredient: "Lavender",
    goal: "hydrate",
  },
  {
    ingredient: "Orange",
    goal: "streghten",
  },
  {
    ingredient: "Bergamot",
    goal: "shine",
  },
  {
    ingredient: "Lavender",
    goal: "hydrate",
  },
];

function HairFomula() {
  const router = useRouter();
  return (
    <div className="h-screen">
      <Navbar />
      <Header>Customize Your Fomula</Header>
      <div className="flex flex-col items-center h-3/4 overflow-y-auto">
        {FOMULA.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="flex items-center justify-between border border-black m-2 px-2 py-1"
            style={{ width: 320 }}
          >
            <div className="flex items-center">
              <p className="mr-2">{item.ingredient}</p>
              <Image
                src={require("../../assets/images/primary-logo.jpg")}
                alt={"ingredient not found"}
                className="w-8 h-8 mr-2"
              />
              {" - "}
              {item.goal}
            </div>
            <p className="text-sm mt-3 underline decoration-dotted">
              more detail
            </p>
          </div>
        ))}
        {/* <div>
        </div> */}
      </div>
      <div className="flex w-full justify-center">
        <Button
          onClick={() => {
            router.push("/order/hairColor");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HairFomula;
