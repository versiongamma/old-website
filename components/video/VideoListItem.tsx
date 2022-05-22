import ReadMoreIcon from "@mui/icons-material/ReadMore";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText as MuiListItemText,
} from "@mui/material";
import { styled } from "goober";
import Image from "next/image";
import NextLink from "next/link";

import { YouTubeAPIVideo } from "../../types";

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
  snippet: {
    thumbnails,
    title,
    resourceId: { videoId },
  },
}: YouTubeAPIVideo) => {
  return (
    <ListItem>
      <NextLink href={`/video/${videoId}`} passHref>
        <ListItemButton>
          <ListItemIcon>
            <Image
              src={thumbnails.medium.url}
              alt="video"
              width={thumbnails.medium.width / 2}
              height={thumbnails.medium.height / 2}
            />
          </ListItemIcon>
          <ListItemText primary={title} secondary={""} />
          <ListItemIcon>
            <ReadMoreIcon sx={{ color: "white" }} />
          </ListItemIcon>
        </ListItemButton>
      </NextLink>
    </ListItem>
  );
};

export default VideoElement;
