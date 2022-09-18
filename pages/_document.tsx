/***
 * You can remove this file, if you want to
 * It is present because we want to give default language 'en' & body class of default backgroundColor & color
 */
import { Html, Head, Main, NextScript } from "next/document";

const SacHacks2022AppDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="w-full bg-[#161036] text-highlight ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default SacHacks2022AppDocument;
