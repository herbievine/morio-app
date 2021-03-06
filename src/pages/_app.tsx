import "../styles/globals.css";
import type { AppProps } from "next/app";
import ModalProvider from "../contexts/Modal";
import Root from "../layouts/Root";
import HubProvider from "../contexts/Hub";
import SignerProvider from "../contexts/Signer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

declare global {
  interface Window {
    ethereum: any;
  }
}

dayjs.extend(relativeTime);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SignerProvider>
      <HubProvider>
        <ModalProvider>
          <Root component={<Component {...pageProps} />} />
        </ModalProvider>
      </HubProvider>
    </SignerProvider>
  );
};

export default MyApp;
