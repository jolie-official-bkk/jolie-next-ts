import "../styles/globals.css";
import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { OrderContextProvider } from "../contexts/OrderContext";
import { UserContextProvider } from "../contexts/UserContext";
import { SystemContextProvider } from "../contexts/SystemContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
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
