import ReactPlayer from "react-player";
import { useState } from "react";
import Image from "next/image";

import { YouTubeApiResponse } from "../../types";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText as MuiListItemText,
} from "@mui/material";
import { styled } from "goober";

import ReadMoreIcon from "@mui/icons-material/ReadMore";

const ListItemText = styled(MuiListItemText)`
  margin: 0 2rem;

  .MuiListItemText-primary {
    font-size: 1.2rem;
  }

  .MuiListItemText-secondary {
    color: #cccccc;
  }
`;

const VideoElement = ({
  snippet: { thumbnails, title, description },
}: YouTubeApiResponse) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end">
          <ReadMoreIcon />
        </IconButton>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <Image
            src={thumbnails.medium.url}
            alt="video"
            width={thumbnails.medium.width / 2}
            height={thumbnails.medium.height / 2}
          />
          {/* <ReactPlayer
        url={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`}
        controls
        width={600}
        height={loaded ? 337 : 0}
        onReady={() => {
          setLoaded(true);
        }}
      /> */}
        </ListItemIcon>
        <ListItemText primary={title} secondary={""} />
      </ListItemButton>
    </ListItem>
  );
};

export default VideoElement;
