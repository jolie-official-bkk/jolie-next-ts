import { UserCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { Dispatch, Fragment, SetStateAction } from "react";
import HeaderItem from "./HeaderItem";

type PropsType = {
  setShowLoginModal: Dispatch<SetStateAction<boolean>>;
};

function Header({ setShowLoginModal }: PropsType) {
  return (
    <Fragment>
      <header className="flex h-auto p-5">
        <div className="flex items-center">
          <h1>JOLIE</h1>
          <Image
            className="w-8 h-8 mx-2 object-contain"
            src={require("../assets/images/primary-logo.jpg")}
            alt={"primary logo not found"}
          />
        </div>
        <div className="flex flex-grow justify-end items-center max-w-screen-2xl">
          <HeaderItem Icon={UserCircleIcon} />
          <b
            onClick={() => {
              setShowLoginModal(true);
            }}
          >
            Sign in
          </b>
        </div>
      </header>
      <div className="h-1.5 bg-gradient-to-r from-[#fd839f] to-[#f1bfc0]"></div>
    </Fragment>
  );
}

export default Header;
