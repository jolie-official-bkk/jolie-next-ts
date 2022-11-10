import { ChevronLeftIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { getUserInfo } from "../api/user";
import { OrderContext } from "../contexts/OrderContext";
import { UserContext } from "../contexts/UserContext";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";
import Stepper from "./step/Stepper";

function Navbar() {
  const router = useRouter();
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(UserContext);
  const { currentStep } = useContext(OrderContext);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);

  useEffect(() => {
    let isSubscribed = true;
    handleGetUserInfo().then((response) => {
      if (isSubscribed) {
        if (response !== undefined && user === null) {
          console.log(response);

          setUser(response.data);
        }
      }
    });

    return () => {
      isSubscribed = false;
    };
    // eslint-disable-next-line
  }, [isAuthenticated]);

  async function handleGetUserInfo(): Promise<any> {
    try {
      const token = localStorage.getItem("token");
      if (token !== null) {
        return await getUserInfo(token);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }

  function handleGoBack() {
    router.back();
  }

  function handleLogout(): void {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  }

  return (
    <div className="sticky top-0 bg-white z-10">
      <header className="flex h-12 lg:h-20 pr-4 py-2 bg-white drop-shadow-lg shadow-black">
        <div className="flex flex-grow">
          <ChevronLeftIcon
            onClick={() => {
              handleGoBack();
            }}
          />
        </div>
        <div className="flex items-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-black">JOLIE</h1>
        </div>
        <div className="flex flex-grow justify-end items-center">
          {!isAuthenticated && (
            <Image
              src={require("../public/images/user-icon.png")}
              alt={"user icon"}
              className="w-4 h-4"
            />
          )}
          {isAuthenticated && (
            <Image
              src={require("../public/images/user-icon.png")}
              alt={"user icon"}
              className="w-4 h-4"
            />
          )}
        </div>
      </header>
      <Stepper step={currentStep} />
      <LoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        setShowRegisterModal={setShowRegisterModal}
      />
      <RegisterModal
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
      />
    </div>
  );
}

export default Navbar;
