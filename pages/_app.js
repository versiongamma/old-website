import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./../themes/themes";
import { setup } from "goober";
import Head from "next/head";
import { createContext, createElement, useState, useMemo } from "react";

setup(createElement);

const App = ({ Component, pageProps }) => {
  const [subs, setSubs] = useState(0);

  useMemo(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCTxitBg-WrN_xTHKMbAzcIA&key=" +
        process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    )
      .then((res) => res.json())
      .then((res) => {
        setSubs(res.items[0].statistics.subscriberCount);
      });
  }, []);

  pageProps = { ...pageProps, subs };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant&family=Josefin+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
};

export default App;
