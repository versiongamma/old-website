import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Paper as MuiPaper, Skeleton } from "@mui/material";
import { styled } from "goober";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

import { usePageData } from "../hooks/use-page-data";
import { YouTubeAPIVideoDetailItem, YouTubeAPIVideoDetails } from "../types";

const Main = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 2rem;
`;

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
  data: YouTubeAPIVideoDetailItem[];
};

const VideoDetailsPane = ({ title, data }: VideoDetailsPaneProps) => {
  return (
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
  );
};

const VideoDetails = () => {
  const { videos } = usePageData();
  const { id } = useParams();

  const [loadingPlayer, setLoadingPlayer] = useState(true);
  const [videoData, setVideoData] = useState<YouTubeAPIVideoDetails | null>(
    null
  );

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
    <Main>
      <VideoTitle>
        {youtubeAPIVideoData?.snippet.title ?? (
          <Skeleton variant="rectangular" width={700} height={60} />
        )}
      </VideoTitle>

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

      <VideoDescription>
        {videoData ? videoData.description : ""}
      </VideoDescription>

      {videoData?.references && (
        <VideoDetailsPane data={videoData?.references} title="References" />
      )}

      {videoData?.music && (
        <VideoDetailsPane data={videoData?.music} title="Music" />
      )}
    </Main>
  );
};

export default VideoDetails;
