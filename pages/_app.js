import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { darkTheme, lightTheme } from "./../themes/themes";
import { setup } from "goober";
import Head from "next/head";
import { createContext, createElement, useState, useMemo } from "react";

export const DarkMode = createContext(true);
setup(createElement);

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(true);
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

      <DarkMode.Provider value={[darkMode, setDarkMode]}>
        <ThemeProvider theme={darkMode ? { ...darkTheme } : { ...lightTheme }}>
          <CssBaseline>
            <Component {...pageProps} />
          </CssBaseline>
        </ThemeProvider>
      </DarkMode.Provider>
    </>
  );
};

export default App;
