import {
  Container,
  Container as MuiContainer,
  Grid,
  Typography,
} from "@material-ui/core";
import MuiYoutubeIcon from "@mui/icons-material/YouTube";
import { styled } from "goober";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import TopNavBar from "../components/TopNavBar";
import useWindowSize from "../hooks/useWindowSize";
import VideoElement from "../components/video/VideoIcon";
import { List } from "@mui/material";

const TopContainer = styled(MuiContainer)`
  margin-bottom: 4rem;
  text-align: center;
`;

const VideoContainer = styled(MuiContainer)`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10rem;
`;

const Text = styled(Typography)`
  font-size: 1.6rem;
`;

const YouTubeIcon = styled(MuiYoutubeIcon)`
  font-size: 64px;
  margin-top: 1rem;
`;

const FETCH_VIDEOS_BY_VIEWS =
  "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PUTxitBg-WrN_xTHKMbAzcIA&key=";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const windowSize = useWindowSize();

  useEffect(() => {
    fetch(FETCH_VIDEOS_BY_VIEWS + process.env.NEXT_PUBLIC_GOOGLE_API_KEY)
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
        <>
          <Container maxWidth="md">
            <List>
              {videos !== undefined
                ? videos.map((video, index) => (
                    <Grid item key={index}>
                      <VideoElement key={index} {...video} />
                    </Grid>
                  ))
                : null}
            </List>
          </Container>
        </>
      </Scrollbars>
    </>
  );
};

export default Video;
