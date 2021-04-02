import { Container, Divider, Fade, Hidden, Typography } from '@material-ui/core'
import { FormatTextdirectionLToR } from '@material-ui/icons';
import { useEffect, useState, Fragment } from 'react';
import ReactPlayer from 'react-player';
import useWindowSize from '../../hooks/useWindowSize';

export default function Videos(props) {
  const [visible, setVisible] = useState(false);
  const windowSize = useWindowSize();

  const [videos, setVideos] = useState([])

  useEffect(() => {
    setVisible(true);

    fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLAI9kflqAm9E0d_ExQ2tYdk9UwdD2PKD4&key=AIzaSyBGrWo2FzmCmxRIl14m2ivIIwnrsfNydmU')
      .then(res => res.json())
      .then(res => {
        setVideos(res.items)
        console.log(res.items[0]);
      });
  }, [])

  return (
    <Fade in={visible}>
      <Container maxWidth='md'>
        {videos.map(vid => (
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
        ))}
      </Container>
    </Fade>
  );
}