import "../styles/globals.css";
import type { AppProps } from "next/app";
import { OrderContextProvider } from "../contexts/OrderContext";
import { UserContextProvider } from "../contexts/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <OrderContextProvider>
        <Component {...pageProps} />
      </OrderContextProvider>
    </UserContextProvider>
  );
}
