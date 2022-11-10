import { useRouter } from "next/router";
import React from "react";
import Button from "./buttons/Button";

function Landing() {
  const router = useRouter();
  return (
    <div className="flex flex-col mt-72 items-center justify-center">
      <Button
        onClick={() => {
          router.push("/order/hairStyle");
        }}
      >
        <b>CREATE YOUR SHAMPOO</b>
      </Button>
    </div>
  );
}

export default Landing;
