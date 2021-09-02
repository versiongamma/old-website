import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { darkTheme, lightTheme } from './../themes/themes';
import { createContext, useState } from 'react';

export const DarkMode = createContext(false);

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkMode.Provider value={[darkMode, setDarkMode]}>
      <ThemeProvider theme={darkMode ? {...darkTheme} : {...lightTheme}}>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </DarkMode.Provider>
  )
}

export default App
