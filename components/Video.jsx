import { Divider, Hidden, Typography, Fade, Box } from '@material-ui/core'
import ReactPlayer from 'react-player';
import useWindowSize from './../hooks/useWindowSize';
import { useState } from 'react';

import { Skeleton } from '@material-ui/lab';

const Video = (props) => {
  const windowSize = useWindowSize();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Typography 
        variant={windowSize.width >= 960 ? 'h4' : 'h6' } 
        style={{ fontFamily: 'Josefin Sans', textAlign: 'center', paddingBottom: '2vh' }}
      >
        {props.snippet.title}
      </Typography>
      <Hidden smDown>
        <Typography style={{ paddingBottom: '2vh' }}>{props.snippet.description.split('\n')[0]}</Typography>
      </Hidden>
      {/**loading ?
        <Skeleton variant='rect'
          width={windowSize.width >= 960 ? 960 : '90vw'}
          height={windowSize.width >= 800 ? 450 : windowSize.width * .9 * (9 / 16)}
      /> : null*/}
      <Fade in={!loading} timeout={1000}>
        <Box>
          {/* 
            The height needs to be set to 0 in order to not take up double the space with the skeleton and the video,
            however if both are set to 0 before the load, the thumbnail fetched will be the lowest resolution available,
            as it seems thumbnail fetching is dynamic to the player's size, so width NEEDS to remain constant, to fetch 
            thumbnails at the required size
          */}
          <ReactPlayer url={`https://www.youtube.com/watch?v=${props.snippet.resourceId.videoId}`} controls
            width={windowSize.width >= 960 ? 800 : '90vw'}
            height={loading ? 0 : windowSize.width >= 960 ? 450 : windowSize.width * .9 * (9 / 16)}
            onReady={() => setLoading(false)}
            style={{position: 'sticky'}}
          />
        </Box>
      </Fade>

    </>
  )
}

export default Video;