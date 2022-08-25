import { styled } from "goober";
import { useMemo, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import Banner from "../components/banner";
import VideoThumbnail from "../components/video-thumbnail";
import useWindowSize from "../hooks/useWindowSize";
import { YouTubeAPIVideo } from "../types";

const FETCH_VIDEOS_BY_UPLOAD = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUTxitBg-WrN_xTHKMbAzcIA&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

const Main = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const VideosContainer = styled("div")`
  && {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
  }
`;

const Video = () => {
  const windowSize = useWindowSize();

  const [videos, setVideos] = useState<YouTubeAPIVideo[]>();

  useMemo(() => {
    fetch(FETCH_VIDEOS_BY_UPLOAD)
      .then((res) => res.json())
      .then((res) => {
        setVideos(res.items);
      });
  }, []);

  return (
    <Main>
      <VideosContainer>
        {videos &&
          videos.map((video) => <VideoThumbnail key={video.id} {...video} />)}
      </VideosContainer>
    </Main>
  );
};

export default Video;
