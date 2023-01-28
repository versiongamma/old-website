import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import { IconButton, Skeleton } from "@mui/material";
import { styled } from "goober";
import { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import useWindowSize from "../hooks/use-window-size";
import theme from "../themes/theme";
import { YouTubeAPIVideoDetails } from "../types";

const VIDEO_PLAYER_MARGIN = 400;

const Main = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 0 12rem;
  height: 100%;
`;

const VideoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// const VideoTitle = styled("p")`
//   margin-top: 2rem;
//   margin-bottom: 1rem;
//   font-size: 2.5rem;
//   text-align: center;
// `;

// const VideoDescription = styled("p")`
//   margin-top: 1rem;
//   margin-bottom: 1rem;
//   font-size: 1.4rem;
// `;

// const VideoDetailsPaper = styled(MuiPaper)`
//   background-color: #303030;
//   color: white;
//   padding: 0rem 1rem;
// `;

// const VideoDetailsListTitle = styled("p")`
//   font-size: 2rem;
// `;

// const VideoDetailsListItem = styled("p")`
//   font-size: 1rem;
//   margin: 0;
// `;

// type VideoDetailsPaneProps = {
//   title: string;
//   data: YouTubeAPIVideoDetailItem[];
// };

// const VideoDetailsPane = ({ title, data }: VideoDetailsPaneProps) => {
//   return (
//     <VideoDetailsPaper>
//       <VideoDetailsListTitle>{title}</VideoDetailsListTitle>
//       {data.map(({ name, timestamp }, index) => {
//         return (
//           <VideoDetailsListItem key={name}>
//             <a href="">{`[${index + 1}] (${timestamp})`}</a>
//             {` - ${name}`}
//           </VideoDetailsListItem>
//         );
//       })}
//     </VideoDetailsPaper>
//   );
// };

const BackButton = styled(IconButton)`
  && {
    margin: 1rem;

    &:hover {
      background-color: ${theme.button.hover};
    }
  }
`;

const VideoDetails = () => {
  // const { videos } = usePageData();
  const { id } = useParams();
  const [windowSize] = useWindowSize();

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
  // const youtubeAPIVideoData = videos?.find(
  //   (video) => video.snippet.resourceId.videoId === id
  // );

  const videoPlayerDimentions = useMemo(() => {
    const width = windowSize.width - VIDEO_PLAYER_MARGIN;
    return {
      width,
      height: width / 2,
    };
  }, [windowSize]);

  return (
    <Main>
      <Link to={"/videos"}>
        <BackButton>
          <ArrowBackIosNew />
        </BackButton>
      </Link>
      <VideoContainer>
        {loadingPlayer && (
          <Skeleton variant="rectangular" {...videoPlayerDimentions} />
        )}
        <ReactPlayer
          url={videoURL}
          controls
          width={videoPlayerDimentions.width}
          height={loadingPlayer ? 0 : videoPlayerDimentions.height}
          onReady={() => {
            setLoadingPlayer(false);
          }}
        />

        {/* <VideoDescription>
        {videoData ? videoData.description : ""}
      </VideoDescription>

      {videoData?.references && (
        <VideoDetailsPane data={videoData?.references} title="References" />
      )}

      {videoData?.music && (
        <VideoDetailsPane data={videoData?.music} title="Music" />
      )} */}
      </VideoContainer>
    </Main>
  );
};

export default VideoDetails;
