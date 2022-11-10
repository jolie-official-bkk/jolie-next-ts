import { ChevronLeftIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { getUserInfo } from "../api/user";
import { OrderContext } from "../contexts/OrderContext";
import { SystemContext } from "../contexts/SystemContext";
import { UserContext } from "../contexts/UserContext";
import Header from "./Header";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";
import Stepper from "./step/Stepper";

const HEADER_TEXT: string[] = [
  "Choose your hair style",
  "Do you color or treat your hair ?",
  "Select your hair goals",
  "Customize your formula",
  "Select your color",
  "Select your fragrance",
  "Make it your own!",
];

function Navbar() {
  const router = useRouter();
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(UserContext);
  const { currentStep } = useContext(OrderContext);
  const { orderContext, setOrderContext } = useContext(OrderContext);
  const {
    showLoginModal,
    setShowLoginModal,
    showRegisterModal,
    setShowRegisterModal,
  } = useContext(SystemContext);

  useEffect(() => {
    let isSubscribed = true;
    handleGetUserInfo().then(async (response) => {
      if (isSubscribed) {
        if (response?.status === "OK" && user === null) {
          setUser(response.data);
          const token = localStorage.getItem("token");
          if (user === null && token !== null) {
            await getUserInfo(token).then((response) => {
              if (response?.status === "OK") {
                setUser(response.data);
                setOrderContext({
                  ...orderContext,
                  user_id: response.data.user_id,
                });
              }
            });
          }
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
    setUser(null);
    setIsAuthenticated(false);
    setIsAuthenticated(false);
  }

  return (
    <div className="sticky top-0 bg-white z-10">
      <header className="flex h-12 lg:h-20 pr-4 py-2 bg-white drop-shadow-lg shadow-black">
        <div className="flex flex-grow">
          <ChevronLeftIcon
            className={`text-${!!currentStep ? "black" : "white"}`}
            onClick={() => {
              if (!!currentStep) {
                handleGoBack();
              }
            }}
          />
        </div>
        <div className="flex items-center">
          <h1 className="text-2xl lg:text-4xl font-medium text-black">JOLIE</h1>
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
      {!!currentStep && <Stepper step={currentStep} />}
      {!!currentStep && <Header>{HEADER_TEXT[currentStep - 1]}</Header>}
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
