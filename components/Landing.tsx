import { useRouter } from "next/router";
import React from "react";
import LoginModal from "./modals/LoginModal";

function Landing() {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-grow items-center">
      <div className="flex flex-col h-96 justify-center">
        <h1>Text เฟี้ยว ๆ หน่อย</h1>
      </div>
      <div className="h-20">
        <h2>premium customized shampoo for you</h2>
      </div>
      <button
        className="bg-[#fd839f] hover:bg-[#f1bfc0] text-white font-bold py-2 px-4 rounded transition ease delay-100"
        type="button"
        data-modal-toggle="authentication-modal"
        onClick={() => {
          router.push("/order/hairStyle");
        }}
      >
        CREAT Your SHAMPOO
      </button>
    </div>
  );
}

export default Landing;
