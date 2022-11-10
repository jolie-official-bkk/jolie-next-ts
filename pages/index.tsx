import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useContext, useEffect } from "react";
import { handleValidateToken } from "../api/auth";
import { getUserInfo } from "../api/user";
import Button from "../components/buttons/Button";
import { OrderContext } from "../contexts/OrderContext";
import { UserContext } from "../contexts/UserContext";
import { FormLayout } from "../layouts/FormLayout";

export default function Home() {
  const router = useRouter();
  const { user, setUser, setIsAuthenticated } = useContext(UserContext);
  const { orderContext, setOrderContext, setCurrentStep } =
    useContext(OrderContext);
  useEffect(() => {
    setCurrentStep(0);
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
                  setOrderContext({
                    ...orderContext,
                    user_id: response.data.user_id,
                  });
                }
              });
            }
          }
        });
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Jolie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col flex-grow items-center justify-center">
        <Button
          onClick={() => {
            router.push("/order/hairStyle");
          }}
        >
          <b>CREATE&nbsp;&nbsp;YOUR&nbsp;&nbsp;SHAMPOO</b>
        </Button>
      </div>
    </Fragment>
  );
}

Home.PageLayout = FormLayout;
