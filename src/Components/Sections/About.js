import { Box, Fade, Typography, Container, IconButton } from '@material-ui/core'
import { useEffect, useState } from 'react';

import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import useWindowSize from '../../hooks/useWindowSize';
import Twitter from '@material-ui/icons/Twitter';

const About = () => {
  const [visible, setVisible] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
      <Box style={{ paddingTop: 50, paddingLeft: '25vw', textAlign: 'center' }}>
        <Container maxWidth='md'>
          <Typography variant='h1'>Who... am I?</Typography>
          <br/>
          <Typography style={{ fontSize: '2em' }}>
            That is an excellent question. Many things, is probably the best answer to that. 
            I'm Matt, and I create stuff under the handle of 'Version Gamma'
            <br/>
            <br/>
            What kind of stuff? Computer stuff, to put it simply, but if you want something a little less vauge, 
            well just have a look below! Have a look around and see the dumb stuff I've conconcted over my many 
            years of messing around with cameras and computers.
          </Typography>
          <br/>
          <br/>
          <IconButton><YouTubeIcon fontSize='large'/></IconButton>
          <IconButton><InstagramIcon fontSize='large'/></IconButton>
          <IconButton><TwitterIcon fontSize='large'/></IconButton>
        </Container>
      </Box>
  );
}

export default About;