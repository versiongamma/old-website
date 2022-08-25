import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "../themes/themes";
import { setup } from "goober";
import Head from "next/head";
import type { AppProps } from "next/app";
import { createElement, useState, useMemo } from "react";

import { YouTubeAPIVideo } from "../types";

setup(createElement);

const FETCH_SUBSCRIBERS = `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCTxitBg-WrN_xTHKMbAzcIA&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
const FETCH_VIDEOS_BY_UPLOAD = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUTxitBg-WrN_xTHKMbAzcIA&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;

const App = ({ Component, pageProps }: AppProps) => {
  const [subs, setSubs] = useState(0);
  const [videos, setVideos] = useState<YouTubeAPIVideo[]>();

  useMemo(() => {
    fetch(FETCH_SUBSCRIBERS)
      .then((res) => res.json())
      .then((res) => {
        setSubs(res.items[0].statistics.subscriberCount);
      });

    fetch(FETCH_VIDEOS_BY_UPLOAD)
      .then((res) => res.json())
      .then((res) => {
        setVideos(res.items);
      });
  }, []);

  pageProps = { ...pageProps, subs, videos };

  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
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
