import { styled } from "goober";
import VideoThumbnail from "../components/video-thumbnail";
import { usePageData } from "../hooks/use-page-data";

const Main = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 2rem;
`;

const VideosContainer = styled("div")`
  && {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: center;
    justify-content: safe center;
    margin: 0 5rem;
  }
`;

const Videos = () => {
  const { videos } = usePageData();
  return (
    <Main>
      <VideosContainer>
        {videos &&
          videos.map((video) => <VideoThumbnail key={video.id} {...video} />)}
      </VideosContainer>
    </Main>
  );
};

export default Videos;
