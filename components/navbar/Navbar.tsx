import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { getUserInfo } from "../../api/user";
import { OrderContext } from "../../contexts/OrderContext";
import { SystemContext } from "../../contexts/SystemContext";
import { UserContext } from "../../contexts/UserContext";
import Header from "../Header";
import LoginModal from "../modal/LoginModal";
import OrderResponseModal from "../modal/OrderResponseModal";
import RegisterModal from "../modal/RegisterModal";
import Stepper from "../step/Stepper";

function Navbar() {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { t, i18n } = useTranslation();
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(UserContext);
  const { currentStep } = useContext(OrderContext);
  const { orderContext, setOrderContext } = useContext(OrderContext);
  const {
    showLoginModal,
    setShowLoginModal,
    showRegisterModal,
    setShowRegisterModal,
    showOrderResponseModal,
    setShowOrderResponseModal,
  } = useContext(SystemContext);

  const HEADER_TEXT: string[] = [
    t("hairStyle.title"),
    t("hairTreat.title"),
    t("hairGoal.title"),
    t("formula.title"),
    t("color.title"),
    t("scent.title"),
    t("orderShampoo.title"),
  ];

  useEffect(() => {
    let isSubscribed = true;
    handleGetUserInfo().then(async (response) => {
      if (isSubscribed) {
        if (response?.status === "OK" && user === null) {
          setUser(response.data);
          const token = localStorage.getItem("jolie-token");
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
      const token = localStorage.getItem("jolie-token");
      if (token !== null) {
        return await getUserInfo(token);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }

  function handleToggleLanguage() {
    router.push({ pathname, query }, asPath, {
      locale: i18n.language === "en" ? "th" : "en",
    });
  }

  function handleGoBack() {
    router.back();
  }

  function handleLogout(): void {
    localStorage.removeItem("jolie-token");
    setUser(null);
    setIsAuthenticated(false);
    setIsAuthenticated(false);
  }

  return (
    <div className="sticky top-0 bg-white z-10">
      <header className="flex h-12 lg:h-20 px-2 py-2 bg-white drop-shadow-lg shadow-black">
        <div className="flex flex-grow items-center">
          <ChevronLeftIcon
            className={`w-8 h-8 text-${
              !!currentStep ? "black" : "white"
            } cursor-pointer`}
            onClick={() => {
              if (!!currentStep) {
                handleGoBack();
              }
            }}
          />
        </div>
        <div className="flex items-center">
          <h1
            className="text-2xl lg:text-4xl font-medium text-black cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            JOLIE
          </h1>
        </div>
        <div className="flex flex-grow justify-end items-center">
          {currentStep === 0 && (
            <div
              className="flex absolute right-12 cursor-pointer bg-white"
              onClick={() => {
                handleToggleLanguage();
              }}
            >
              <p
                className={`${
                  i18n.language === "en"
                    ? "font-extrabold bg-black text-white rounded-tl-md rounded-bl-md"
                    : ""
                } px-1.5`}
              >
                EN
              </p>
              <p
                className={`${
                  i18n.language === "th"
                    ? "font-extrabold bg-black text-white rounded-tr-md rounded-br-md"
                    : ""
                } px-1.5`}
              >
                TH
              </p>
            </div>
          )}
          {!isAuthenticated && (
            <Image
              src={`${process.env.REACT_APP_S3_PREFIX}/images/user-icon.png`}
              alt={"user icon"}
              className="w-8 h-8 p-1.5 cursor-pointer"
              width={32}
              height={32}
              onClick={() => {
                setShowLoginModal(true);
              }}
            />
          )}
          {isAuthenticated && (
            <span
              className="flex w-8 h-8 justify-center items-center font-medium text-white rounded-full bg-black"
              onClick={() => handleLogout()}
            >
              {user?.first_name.charAt(0).toLocaleUpperCase()}
              {user?.last_name.charAt(0).toLocaleUpperCase()}
            </span>
          )}
        </div>
      </header>
      {!!currentStep && <Stepper step={currentStep} />}
      {!!currentStep && <Header>{HEADER_TEXT[currentStep - 1]}</Header>}
      {showLoginModal && (
        <LoginModal
          setShowLoginModal={setShowLoginModal}
          setShowRegisterModal={setShowRegisterModal}
        />
      )}
      {showRegisterModal && (
        <RegisterModal setShowRegisterModal={setShowRegisterModal} />
      )}
      {showOrderResponseModal && (
        <OrderResponseModal
          setShowOrderResponseModal={setShowOrderResponseModal}
        />
      )}
    </div>
  );
}

export default Navbar;
