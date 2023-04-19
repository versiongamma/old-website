import { CssBaseline, ThemeProvider } from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";
import { Route, Routes, useLocation } from "react-router-dom";

import Banner from "./components/banner";
import useWindowSize from "./utils/use-window-size";
import Games from "./pages/games";
import Home from "./pages/home";
import Photo from "./pages/photos";
import Videos from "./pages/videos";
import { theme } from "./themes/mui-theme";
import { PageData } from "./types";

const DEFAULT_BACKGROUND_IMAGE = "https://i.imgur.com/5pHkLhw.jpg";
const HOME_BACKGROUND_IMAGE = "https://i.imgur.com/n3NaCpH.jpg";

const App = () => {
  const windowSize = useWindowSize();

  const pages: PageData[] = [
    {
      name: "About",
      href: "/",
      backgroundImage: HOME_BACKGROUND_IMAGE,
      component: Home,
    },
    {
      name: "YouTube",
      href: "/videos",
      backgroundImage: DEFAULT_BACKGROUND_IMAGE,
      component: Videos,
    },
    {
      name: "Game Development",
      href: "/games",
      backgroundImage: DEFAULT_BACKGROUND_IMAGE,
      component: Games,
    },
    {
      name: "Photos",
      href: "/photos",
      backgroundImage: DEFAULT_BACKGROUND_IMAGE,
      component: Photo,
    },
  ];

  const { pathname } = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${
              pages.find(
                (page) => pathname.split("/")[1] === page.href.split("/")[1]
              )?.backgroundImage
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <Banner pages={pages} background={pathname === "/"} />

          <Scrollbars
            universal
            autoHide
            style={{ height: windowSize.height - 170 }}
          >
            <Routes>
              {pages.map((page) => (
                <Route
                  key={page.name}
                  path={page.href}
                  element={<page.component pageData={page} />}
                />
              ))}
            </Routes>
          </Scrollbars>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
