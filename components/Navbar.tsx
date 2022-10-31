import { Fragment, useContext, useEffect, useState } from "react";
import { getUserInfo } from "../api/user";
import { OrderContext } from "../contexts/OrderContext";
import { SystemContext } from "../contexts/SystemContext";
import { UserContext } from "../contexts/UserContext";
import Button from "./buttons/Button";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";

function Navbar() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(UserContext);
  const { orderContext, setOrderContext } = useContext(OrderContext)
  const { showLoginModal, setShowLoginModal, showRegisterModal, setShowRegisterModal } = useContext(SystemContext)

  useEffect(() => {
    let isSubscribed = true;
    handleGetUserInfo().then(async (response) => {
      if (isSubscribed) {
        if (response?.status === "OK" && user === null) {
          setUser(response.data);
          const token = localStorage.getItem("token")
          if (user === null && token !== null) {
            await getUserInfo(token).then((response) => {
              if (response?.status === "OK") {
                setUser(response.data);
                setOrderContext({ ...orderContext, user_id: response.data.user_id })
              }
            })
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

  function handleLogout(): void {
    localStorage.removeItem("token");
    setUser(null)
    setIsAuthenticated(false)
    setIsAuthenticated(false);
  }

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
          {!isAuthenticated && (
            <Button
              onClick={() => {
                setShowLoginModal(true);
              }}
            >
              Sign in
            </Button>
          )}
          {isAuthenticated && (
            // <p className="text-xl">{`${user?.first_name}`}</p>
            <div
              className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 rounded-full bg-primary/[0.5]"
              onClick={() => {
                handleLogout();
              }}
            >
              <span className="font-medium md:font-lg lg:font-xl text-white">
                {user?.first_name.charAt(0).toUpperCase()}
                {user?.last_name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
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
