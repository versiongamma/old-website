import { CssBaseline, ThemeProvider } from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";
import { Route, Routes, useLocation } from "react-router-dom";

import Banner from "./components/banner";
import { usePageData } from "./hooks/use-page-data";
import useWindowSize from "./hooks/use-window-size";
import Games from "./pages/games";
import Home from "./pages/home";
import Photo from "./pages/photos";
import Software from "./pages/software";
import Video from "./pages/video-details";
import Videos from "./pages/videos";
import { theme } from "./themes/themes";

const DEFAULT_BACKGROUND_IMAGE = "https://i.imgur.com/5pHkLhw.jpg";
const HOME_BACKGROUND_IMAGE = "https://i.imgur.com/n3NaCpH.jpg";

const App = () => {
  const [windowSize] = useWindowSize();

  const pages = [
    {
      name: "About",
      href: "/",
      backgroundImage: HOME_BACKGROUND_IMAGE,
      element: <Home />,
    },
    {
      name: "YouTube",
      href: "/videos",
      backgroundImage: DEFAULT_BACKGROUND_IMAGE,
      element: <Videos />,
    },
    {
      name: "Software",
      href: "/software",
      backgroundImage: DEFAULT_BACKGROUND_IMAGE,
      element: <Software />,
    },
    {
      name: "Game Development",
      href: "/games",
      backgroundImage: DEFAULT_BACKGROUND_IMAGE,
      element: <Games />,
    },
    {
      name: "Photos",
      href: "/photos",
      backgroundImage: DEFAULT_BACKGROUND_IMAGE,
      element: <Photo />,
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
              <Route path="/videos/:id" element={<Video />} />
            </Routes>
          </Scrollbars>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
