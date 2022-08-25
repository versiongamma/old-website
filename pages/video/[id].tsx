import {
  Container,
  Grid,
  IconButton,
  Paper as MuiPaper,
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

import TopNavBar from "../../ui/src/components/banner";
import useWindowSize from "../../hooks/useWindowSize";
import { VideoDetails, VideoDetailItem, YouTubeAPIVideo } from "../../types";
import { styled } from "goober";

const VideoTitle = styled("p")`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  text-align: center;
`;

const VideoDescription = styled("p")`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

const VideoDetailsPaper = styled(MuiPaper)`
  background-color: #303030;
  color: white;
  padding: 0rem 1rem;
  height
`;

const VideoDetailsListTitle = styled("p")`
  font-size: 2rem;
`;

const VideoDetailsListItem = styled("p")`
  font-size: 1rem;
  margin: 0;
`;

type VideoDetailsPaneProps = {
  title: string;
  data: VideoDetailItem[];
};

const VideoDetailsPane = ({ title, data }: VideoDetailsPaneProps) => {
  return (
    <Grid item xs={6}>
      <VideoDetailsPaper>
        <VideoDetailsListTitle>{title}</VideoDetailsListTitle>
        {data.map(({ name, timestamp }, index) => {
          return (
            <VideoDetailsListItem key={name}>
              <a href="">{`[${index + 1}] (${timestamp})`}</a>
              {` - ${name}`}
            </VideoDetailsListItem>
          );
        })}
      </VideoDetailsPaper>
    </Grid>
  );
};

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
                <VideoTitle>{youtubeAPIVideoData?.snippet.title}</VideoTitle>
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
              <Grid item xs={12}>
                <VideoDescription>
                  {videoData ? videoData.description : ""}
                </VideoDescription>
              </Grid>

              {videoData?.references && (
                <VideoDetailsPane
                  data={videoData?.references}
                  title="References"
                />
              )}

              {videoData?.music && (
                <VideoDetailsPane data={videoData?.music} title="Music" />
              )}
            </Grid>
          </Container>
        </>
      </Scrollbars>
    </>
  );
};

export default VideoDetailsPage;
