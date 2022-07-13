/***
 * SacHack 2022 Web Application Gateway
 * <Component {...pageProps} /> CANNOT BE REMOVED (WILL CAUSE APP CRASH)
 * <Layout /> can be removed upon future modification
 */

/**
 * Tailwind & App Stylesheets Import HERE
 */
import "../styles/tailwind.css";
import "../styles/app.css";

import type { AppProps } from "next/app";
import Layout from "@/components/layout-components/Layout";

const SacHacks2022: ({ Component, pageProps }: AppProps) => JSX.Element = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default SacHacks2022;
