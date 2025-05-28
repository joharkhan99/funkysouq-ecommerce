import Layout from "@/components/Layout";
import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // wwrap the whole app in Provider for the state management
    <Provider store={store}>
      <Head>
        <title>FunkySouq: E-commerce</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
