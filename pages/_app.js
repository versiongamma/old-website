import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { darkTheme, lightTheme } from "./../themes/themes";
import Head from "next/head";
import { createContext, useState } from "react";

export const DarkMode = createContext(true);

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(true);
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
