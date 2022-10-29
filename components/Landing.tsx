import { useRouter } from "next/router";
import React from "react";
import Button from "./buttons/Button";
import LoginModal from "./modals/LoginModal";

function Landing() {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-grow items-center">
      <div className="flex flex-col h-96 justify-center">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold text-black drop-shadow-lg shadow-black">
          JOLIE{" "}
          <p className="text-2xl md:text-3xl lg:text-5xl">
            &emsp;Customize Your Own Shampoo
          </p>
        </h1>
      </div>
      <div className="h-20">
        <h2 className="text-lg md:text-xl lg:text-2xl">
          premium customized shampoo for you
        </h2>
      </div>
      <Button
        onClick={() => {
          router.push("/order/hairStyle");
        }}
      >
        <b>CREAT Your SHAMPOO</b>
      </Button>
    </div>
  );
}

export default Landing;
