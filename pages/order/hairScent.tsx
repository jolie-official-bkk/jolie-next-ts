import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const SCENT = [
  {
    imageUrl: require("../../assets/images/primary-logo.jpg"),
    scent: "Aroma Galore",
  },
  {
    imageUrl: require("../../assets/images/primary-logo.jpg"),
    scent: "Aroma Queen",
  },
  {
    imageUrl: require("../../assets/images/primary-logo.jpg"),
    scent: "Essence Flair",
  },
  {
    imageUrl: require("../../assets/images/primary-logo.jpg"),
    scent: "Fragrance Harmony",
  },
  {
    imageUrl: require("../../assets/images/primary-logo.jpg"),
    scent: "Scentaholic",
  },
];

function HairScent() {
  const router = useRouter();
  return (
    <div className="h-screen">
      <Navbar />
      <Header>Select Your Scent</Header>
      <div className="flex flex-col h-3/4 justify-center">
        <div className="px-5 my-4 grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto">
          {SCENT.map((scent, scentIndex) => {
            return (
              <div key={scentIndex} className="mx-auto">
                <Image src={scent.imageUrl} alt={"scent image not found"} />
                <p className="text-center border border-black ">
                  {scent.scent}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button
          onClick={() => {
            router.push("/order/summary");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HairScent;
