import { Grid } from "@material-ui/core";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import TopNavBar from "../components/TopNavBar";
import useWindowSize from "../hooks/useWindowSize";
import VideoElement from "./../components/VideoElement";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const windowSize = useWindowSize();

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PUTxitBg-WrN_xTHKMbAzcIA&key=" +
        process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    )
      .then((res) => res.json())
      .then((res) => {
        setVideos(res.items);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Version Gamma | Video</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNavBar section={1} />

      <Scrollbars
        universal
        autoHide
        style={{ height: windowSize.height - 170 }}
      >
        <Grid container justifyContent="center" spacing={10}>
          {videos !== undefined
            ? videos.map((vid, i) => (
                <Grid item key={i}>
                  <VideoElement key={i} {...vid} />
                </Grid>
              ))
            : null}
        </Grid>
      </Scrollbars>
    </>
  );
};

export default Video;
