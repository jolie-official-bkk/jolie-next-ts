import "../styles/globals.css";
import type { AppProps } from "next/app";
import { OrderContextProvider } from "../contexts/OrderContext";
import { UserContextProvider } from "../contexts/UserContext";
import Navbar from "../components/Navbar";
import Stepper from "../components/step/Stepper";
import { SystemContextProvider } from "../contexts/SystemContext";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};

export default function App({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <SystemContextProvider>
      <UserContextProvider>
        <OrderContextProvider>
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </OrderContextProvider>
      </UserContextProvider>
    </SystemContextProvider>
  );
}
