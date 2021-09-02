import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { darkTheme, lightTheme } from './../themes/themes';
import { createContext, useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

export const DarkMode = createContext(false);

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkMode.Provider value={[darkMode, setDarkMode]}>
      <ThemeProvider theme={darkMode ? { ...darkTheme } : { ...lightTheme }}>
        <CssBaseline>
          <AnimateSharedLayout>
            <Component {...pageProps} />
          </AnimateSharedLayout>
        </CssBaseline>
      </ThemeProvider>
    </DarkMode.Provider>
  )
}

export default App
