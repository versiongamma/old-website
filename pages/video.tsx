import { useEffect, useState } from 'react';
import { Box, Snackbar, Grid } from '@material-ui/core'
import Alert from "@material-ui/lab/Alert";

import Head from 'next/head';

import { Scrollbars } from 'react-custom-scrollbars-2'; 

import TopNavBar from "../components/TopNavBar"
import Video from './../components/Video';
import useWindowSize from '../hooks/useWindowSize';

const video = () => {
  const [videos, setVideos] = useState([]);
  const windowSize = useWindowSize();

  useEffect(() => {
    fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PUTxitBg-WrN_xTHKMbAzcIA&key=' + process.env.NEXT_PUBLIC_GOOGLE_API_KEY)
      .then(res => res.json())
      .then(res => { setVideos(res.items) });
  }, [])

  return (
    <>
      <Head>
        <title>Version Gamma | Video</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNavBar section={4} />

      <Scrollbars universal autoHide style={{height: windowSize.height - 170}}>
          <Grid container justifyContent='center' spacing={10}>
            {videos !== undefined ? videos.map((vid, i) => (
              <Grid item key={i}>
                <Video key={i} {...vid} />
              </Grid>
            )) :
              <Snackbar open={true} autoHideDuration={6000} style={{ bottom: '5vh' }}>
                <Alert severity='error'>Videos Failed to Load!</Alert>
              </Snackbar>}
          </Grid>

      </Scrollbars>

    </>
  )
}

export default video;