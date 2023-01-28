import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { styled } from "goober";
import React from "react";
import { Link } from "react-router-dom";
import theme from "../themes/theme";
import { YouTubeAPIVideo } from "../types";

type VideoThumbnailButtonProps = {
  $width: number;
  $height: number;
} & MuiButtonProps;

const VideoThumbnailButton = styled<VideoThumbnailButtonProps>((props) => (
  // TODO: Figure out why the transient props don't work for mui
  <MuiButton
    {...(Object.fromEntries(
      Object.entries(props).filter(([key]) => key[0] !== "$")
    ) as any)}
  />
))`
  && {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: ${({ $width }) => $width + 35}px;
    margin: 0.4rem;
    padding: 1rem;

    &:hover {
      background-color: ${theme.button.hover};
    }

    span {
      overflow-wrap: break-word;
      text-transform: none;
      text-align: left;
      color: white;
      font-family: Josefin Sans;
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }
`;

const VideoThumbnail = ({
  snippet: {
    thumbnails,
    title,
    resourceId: { videoId },
  },
}: YouTubeAPIVideo) => {
  return (
    <Link to={`/videos/${videoId}`}>
      <VideoThumbnailButton
        $width={thumbnails.medium.width}
        $height={thumbnails.medium.height}
      >
        <img
          src={thumbnails.medium.url}
          alt="video"
          width={thumbnails.medium.width}
          height={thumbnails.medium.height}
        />
        <span style={{ marginTop: "0.2rem" }}>{title}</span>
      </VideoThumbnailButton>
    </Link>
  );
};

export default React.memo(VideoThumbnail);
