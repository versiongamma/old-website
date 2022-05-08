import { Container, Grid, List as MuiList } from "@mui/material";
import { styled } from "goober";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import TopNavBar from "../components/TopNavBar";
import VideoListItem from "../components/video/VideoListItem";
import useWindowSize from "../hooks/useWindowSize";
import { YouTubeApiResponse } from "../types";

const FETCH_VIDEOS_BY_UPLOAD =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUTxitBg-WrN_xTHKMbAzcIA&key=";

const List = styled(MuiList)``;

const Video = () => {
  const [videos, setVideos] = useState<YouTubeApiResponse[]>([]);
  const windowSize = useWindowSize();

  useEffect(() => {
    fetch(FETCH_VIDEOS_BY_UPLOAD + process.env.NEXT_PUBLIC_GOOGLE_API_KEY)
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

      <Image
        src="https://i.imgur.com/5pHkLhw.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 60%"
        quality={100}
        alt="background"
        priority
      />

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
                ? videos.map((video) => (
                    <Grid item key={video.snippet.resourceId.videoId}>
                      <VideoListItem
                        key={video.snippet.resourceId.videoId}
                        {...video}
                      />
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
