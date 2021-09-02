import { Divider, Hidden, Typography, Paper, Box, Grid } from '@material-ui/core'
import ReactPlayer from 'react-player';
import useWindowSize from './../hooks/useWindowSize';
import { useState } from 'react';

import { Skeleton } from '@material-ui/lab';

const VideoElement = (props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${props.snippet.resourceId.videoId}`} controls
        width={600}
        height={loaded ? 337 : 0}
        onReady={() => {setLoaded(true)}}
      />

      { !loaded ? <Skeleton variant='rect' width={600} height={337} /> : null }
    </Box>
  )
}

export default VideoElement;