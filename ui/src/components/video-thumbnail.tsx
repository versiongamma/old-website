import ReadMoreIcon from "@mui/icons-material/ReadMore";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { styled } from "goober";
import React from "react";

import { YouTubeAPIVideo } from "../types";

type VideoThumbnailButtonProps = {
  $width: number;
} & MuiButtonProps;

const VideoThumbnailButton = styled<VideoThumbnailButtonProps>(MuiButton)`
  && {
    flex-direction: column;
    width: ${({ $width }) => $width}px;

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
    <a href={`/video/${videoId}`}>
      <VideoThumbnailButton $width={thumbnails.medium.width}>
        <img
          src={thumbnails.medium.url}
          alt="video"
          width={thumbnails.medium.width}
          height={thumbnails.medium.height}
        />
        <span style={{ marginTop: "0.2rem" }}>{title}</span>
      </VideoThumbnailButton>
    </a>
  );
};

export default React.memo(VideoThumbnail);
