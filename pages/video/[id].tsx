import {
  Container,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Typography as MuiTypography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import ReactPlayer from "react-player";

import TopNavBar from "../../components/TopNavBar";
import useWindowSize from "../../hooks/useWindowSize";
import { VideoDetails, YouTubeAPIVideo } from "../../types";
import { styled } from "goober";

const VideoTitle = styled(MuiTypography)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

type Props = {
  videos: YouTubeAPIVideo[] | null;
};

const VideoDetailsPage = ({ videos }: Props) => {
  const router = useRouter();
  const windowSize = useWindowSize();
  const { id } = router.query;

  const [loadingPlayer, setLoadingPlayer] = useState(true);
  const [videoData, setVideoData] = useState<VideoDetails | null>(null);

  useEffect(() => {
    fetch("/api/get-video-details", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => setVideoData(data));
  }, [id]);

  const videoURL = `https://www.youtube.com/watch?v=${id}`;
  const youtubeAPIVideoData = videos?.find(
    (video) => video.snippet.resourceId.videoId === id
  );

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
            <NextLink href={"/video"} passHref>
              <IconButton>
                <ArrowBackIcon fontSize="large" />
              </IconButton>
            </NextLink>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12}>
                <VideoTitle variant="h4" align="center">
                  {youtubeAPIVideoData?.snippet.title}
                </VideoTitle>
              </Grid>
              {loadingPlayer && (
                <Skeleton variant="rectangular" width={640} height={360} />
              )}
              <ReactPlayer
                url={videoURL}
                controls
                width={640}
                height={loadingPlayer ? 0 : 360}
                onReady={() => {
                  setLoadingPlayer(false);
                }}
              />
              <Grid item xs={6}>
                <Paper sx={{ background: "#303030" }}>
                  {videoData?.references?.map((reference, index) => {
                    console.log("reference", reference);
                    return (
                      <MuiTypography
                        key={reference.description}
                        sx={{ color: "white" }}
                      >
                        {`[${index}] - ${reference.description}`}
                      </MuiTypography>
                    );
                  })}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </>
      </Scrollbars>
    </>
  );
};

export default VideoDetailsPage;
