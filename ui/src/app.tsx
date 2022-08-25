import { CssBaseline, ThemeProvider } from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Banner from "./components/banner";
import useWindowSize from "./hooks/useWindowSize";
import Games from "./pages/games";
import Home from "./pages/home";
import Photo from "./pages/photo";
import Software from "./pages/software";
import Video from "./pages/video";
import { theme } from "./themes/themes";

const App = () => {
  const [windowSize] = useWindowSize();

  const pages = [
    { name: "About", href: "/", element: <Home subs={1580} /> },
    { name: "YouTube", href: "/video", element: <Video /> },
    { name: "Software", href: "/software", element: <Software /> },
    { name: "Game Development", href: "/games", element: <Games /> },
    { name: "Photos", href: "/photo", element: <Photo /> },
  ];

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              backgroundImage: "url(https://i.imgur.com/n3NaCpH.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <Banner pages={pages} background />

            <Scrollbars
              universal
              autoHide
              style={{ height: windowSize.height - 170 }}
            >
              <Routes>
                {pages.map((page) => (
                  <Route path={page.href} element={page.element} />
                ))}
              </Routes>
            </Scrollbars>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </Router>
  );
};

export default App;
