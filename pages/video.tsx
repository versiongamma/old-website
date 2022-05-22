import { Container, Grid, List as MuiList } from "@mui/material";
import { styled } from "goober";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import TopNavBar from "../components/TopNavBar";
import VideoListItem from "../components/video/VideoListItem";
import useWindowSize from "../hooks/useWindowSize";
import { YouTubeAPIVideo } from "../types";

const List = styled(MuiList)``;

type Props = {
  videos: YouTubeAPIVideo[];
};

const Video = ({ videos }: Props) => {
  const windowSize = useWindowSize();

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
              {videos &&
                videos.map((video) => (
                  <Grid item key={video.id}>
                    <VideoListItem key={video.id} {...video} />
                  </Grid>
                ))}
            </List>
          </Container>
        </>
      </Scrollbars>
    </>
  );
};

export default Video;
