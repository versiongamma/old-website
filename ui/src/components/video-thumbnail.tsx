import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { styled } from "goober";
import React from "react";
import { Link } from "react-router-dom";

import { YouTubeAPIVideo } from "../types";

type VideoThumbnailButtonProps = {
  $width: number;
  $height: number;
} & MuiButtonProps;

const VideoThumbnailButton = styled<VideoThumbnailButtonProps>(MuiButton)`
  && {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: ${({ $width }) => $width + 20}px;
    height: ${({ $height }) => $height + 50}px;
    margin: 0.4rem;

    span {
      overflow-wrap: break-word;
      text-transform: none;
      text-align: left;
      color: #fff;
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
