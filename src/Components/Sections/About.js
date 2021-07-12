import { Box, Fade, Typography, Container, Grid } from '@material-ui/core'
import { useEffect, useState } from 'react';

import useWindowSize from '../../hooks/useWindowSize';

const About = () => {
  const [visible, setVisible] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Box>
      <img src='https://i.imgur.com/FwIVqF5.jpg'
        width={windowSize.width}
        height={windowSize.height - 56 - 104}
        style={{ objectFit: 'cover', position: 'absolute', zIndex: -1 }}
      />

      <Box style={{ paddingTop: 50, paddingLeft: '25vw', textAlign: 'center' }}>
        <Container maxWidth='md'>
          <Typography variant='h1'>Who... am I?</Typography>
          <br/>
          <Typography style={{ fontSize: '2em' }}>
            That is an excellent question. Many things, is probably the answer to that. 
            I'm Matt, and I create stuff under the handle of 'Version Gamma'
          </Typography>
          <br/>
          <Typography style={{ fontSize: '2em' }}>
            Videos, Photos, Software, 
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default About;