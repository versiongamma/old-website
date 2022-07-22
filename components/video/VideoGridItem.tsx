import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Grid as MuiGrid, Button as MuiButton } from "@mui/material";
import { styled } from "goober";
import Image from "next/image";
import NextLink from "next/link";

import { YouTubeAPIVideo } from "../../types";

const GridItem = styled(MuiGrid)`
  margin: 1rem;
`;

const VideoIconButton = styled(MuiButton)`
  flex-direction: column;
  text-transform: none;
  color: #fff;
  font-family: Josefin Sans;
  font-size: 1rem;
  line-height: 1.2rem;
`;

const VideoGridItem = ({
  snippet: {
    thumbnails,
    title,
    resourceId: { videoId },
  },
}: YouTubeAPIVideo) => {
  return (
    <GridItem xs={3}>
      <NextLink href={`/video/${videoId}`} passHref>
        <VideoIconButton>
          <Image
            src={thumbnails.medium.url}
            alt="video"
            width={thumbnails.medium.width}
            height={thumbnails.medium.height}
          />
          <span style={{ marginTop: "0.2rem" }}>{title}</span>
        </VideoIconButton>
      </NextLink>
    </GridItem>
  );
};

export default VideoGridItem;
