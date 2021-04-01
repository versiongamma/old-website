import { Container, Divider, Fade, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import useWindowSize from '../../hooks/useWindowSize';

export default function Videos(props) {
  const [visible, setVisible] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    setVisible(true);
    console.log(windowSize)
  }, []);

  return (
    <Fade in={visible}>
      <Container maxWidth='md'>
        <Typography variant='h4' style={{ fontFamily: 'Josefin Sans', textAlign: 'center' }}>Title of the fuckin video</Typography>
        <Typography>Description or some shit idk</Typography>
        <ReactPlayer url='https://www.youtube.com/watch?v=QjvzUMy3zF0' controls
          width={windowSize.width >= 960 ? 960 : '90vw'}
          height={windowSize.width >= 960 ? 540 : windowSize.width * .9 * (9 / 16)}
        />

        <Divider style={{ margin: 50 }} />
        <Typography variant='h4' style={{ fontFamily: 'Josefin Sans', textAlign: 'center' }}>Title of the fuckin video</Typography>
        <Typography>Description or some shit idk</Typography>
        <ReactPlayer url='https://www.youtube.com/watch?v=QjvzUMy3zF0' controls
          width={windowSize.width >= 960 ? 960 : '90vw'}
          height={windowSize.width >= 960 ? 540 : windowSize.width * .9 * (9 / 16)} />
        <Divider style={{ margin: 50 }} />
      </Container>
    </Fade>
  );
}