import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { darkTheme, lightTheme } from './../themes/themes';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
