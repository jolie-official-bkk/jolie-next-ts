import "../styles/globals.css";
import type { AppProps } from "next/app";
import { OrderContextProvider } from "../contexts/OrderContext";
import { UserContextProvider } from "../contexts/UserContext";
import { SystemContextProvider } from "../contexts/SystemContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SystemContextProvider>
      <UserContextProvider>
        <OrderContextProvider>
          <Component {...pageProps} />
        </OrderContextProvider>
      </UserContextProvider>
    </SystemContextProvider>
  );
}
