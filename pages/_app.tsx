import "../styles/globals.css";
import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { OrderContextProvider } from "../contexts/OrderContext";
import { UserContextProvider } from "../contexts/UserContext";
import { SystemContextProvider } from "../contexts/SystemContext";
import { appWithTranslation } from "next-i18next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SystemContextProvider>
      <UserContextProvider>
        <OrderContextProvider>
          {getLayout(<Component {...pageProps} />)}
        </OrderContextProvider>
      </UserContextProvider>
    </SystemContextProvider>
  );
}

export default appWithTranslation(App);
