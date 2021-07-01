import { Container, Divider, Fade, Hidden, Typography, Snackbar } from '@material-ui/core'
import Alert from "@material-ui/lab/Alert";
import { useEffect, useState, Fragment } from 'react';
import ReactPlayer from 'react-player';
import useWindowSize from '../../hooks/useWindowSize';

type VideoAPIResponse = {
  snippet: { description: string, title: string, resourceId: {videoId: string} }
}

const Videos: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const windowSize = useWindowSize();

  const [videos, setVideos] = useState<VideoAPIResponse[]>([]);

  useEffect(() => {
    setVisible(true);

    fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PUTxitBg-WrN_xTHKMbAzcIA&key=' + process.env.REACT_APP_GOOGLE_API_KEY)
      .then(res => res.json())
      .then(res => { setVideos(res.items) });
  }, [])

  return (
    <Fade in={visible}>
      <Container maxWidth='md'>
        {videos !== undefined ? videos.map(vid => (
          <Fragment>
            <Typography variant='h4' style={{ fontFamily: 'Josefin Sans', textAlign: 'center', paddingBottom: '2vh' }}>{vid.snippet.title}</Typography>
            <Hidden smDown>
              <Typography style={{paddingBottom: '2vh'}}>
                { vid.snippet.description.length > 50 ?
                  `${vid.snippet.description.substring(0, 400)}
                  ${vid.snippet.description.substring(0, 400).length === vid.snippet.description.length ? '' : '...'}` : ''
                }
              </Typography>
            </Hidden>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${vid.snippet.resourceId.videoId}`} controls
              width={windowSize.width >= 960 ? 960 : '90vw'}
              height={windowSize.width >= 960 ? 540 : windowSize.width * .9 * (9 / 16)}
            />

            <Divider style={{ margin: 50 }} />
          </Fragment>
        )) :  
        <Snackbar open={true} autoHideDuration={6000} style={{bottom: '5vh'}}>
          <Alert severity='error'>Videos Failed to Load!</Alert>
        </Snackbar>}
      </Container>
    </Fade>
  );
}

export default Videos;

