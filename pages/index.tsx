import Head from "next/head";
import { useContext, useEffect } from "react";
import { handleValidateToken } from "../api/auth";
import { getUserInfo } from "../api/user";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import { OrderContext } from "../contexts/OrderContext";
import { UserContext } from "../contexts/UserContext";

export default function Home() {
  const { user, setUser, setIsAuthenticated } = useContext(UserContext)
  const { orderContext, setOrderContext } = useContext(OrderContext);
  useEffect(() => {
    validateToken();
    // eslint-disable-next-line
  }, []);

  async function validateToken(): Promise<void> {
    try {
      const token = localStorage.getItem("token");

      if (token !== null) {
        await handleValidateToken(token).then(async (response) => {
          if (response?.status === "OK") {
            setIsAuthenticated(true);
            if (user === null) {
              await getUserInfo(token).then((response) => {
                if (response?.status === "OK") {
                  setUser(response.data);
                  setOrderContext({ ...orderContext, user_id: response.data.user_id })
                }
              })
            }
          }
        });
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Jolie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <Navbar />
        <Landing />
      </div>
    </div>
  );
}
