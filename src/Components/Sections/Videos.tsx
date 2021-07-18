import { Container, Fade, Snackbar } from '@material-ui/core'
import Alert from "@material-ui/lab/Alert";
import { useEffect, useState } from 'react';

import { VideoType } from './../../types';

import Video from './../Elements/Video';

const Videos: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const [videos, setVideos] = useState<VideoType[]>([]);

  useEffect(() => {
    setVisible(true);

    fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PUTxitBg-WrN_xTHKMbAzcIA&key=' + process.env.REACT_APP_GOOGLE_API_KEY)
      .then(res => res.json())
      .then(res => { setVideos(res.items) });
  }, [])

  return (
    <Fade in={visible} mountOnEnter unmountOnExit timeout={700}>
      <Container maxWidth='md' style={{paddingTop: 40}}>
        {videos !== undefined ? videos.map(vid => (
         <Video {...vid} />
        )) :  
        <Snackbar open={true} autoHideDuration={6000} style={{bottom: '5vh'}}>
          <Alert severity='error'>Videos Failed to Load!</Alert>
        </Snackbar>}
      </Container>
    </Fade>
  );
}

export default Videos;

