import { Fragment, useState } from "react";
import Button from "./buttons/Button";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  return (
    <Fragment>
      <header className="flex h-12 lg:h-20 px-5 py-2 bg-white">
        <div className="flex items-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-black drop-shadow-lg shadow-black">
            JOLIE
          </h1>
          {/* <Image
            className="w-8 h-8 mx-2 object-contain"
            src={require("../assets/images/primary-logo.jpg")}
            alt={"primary logo not found"}
          /> */}
        </div>
        <div className="flex flex-grow justify-end items-center">
          {/* <button
            className="bg-primary text-white rounded py-1 px-2"
            onClick={() => {
              setShowLoginModal(true);
            }}
          >
            Sign in
          </button> */}
          <Button
            onClick={() => {
              setShowLoginModal(true);
            }}
          >
            Sign in
          </Button>
        </div>
      </header>
      <div className="h-1.5 bg-gradient-to-r from-primary to-primary/[0.3]" />
      <LoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        setShowRegisterModal={setShowRegisterModal}
      />
      <RegisterModal
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
      />
    </Fragment>
  );
}

export default Navbar;
