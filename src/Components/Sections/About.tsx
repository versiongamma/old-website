import { Box, Fade, Typography, Container, Grid } from '@material-ui/core'
import { useEffect, useState } from 'react';

import useWindowSize from '../../hooks/useWindowSize';

type Props = {

}

const About: React.FunctionComponent<Props> = () => {
  const [visible, setVisible] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Fade in={visible}>
      <Box>
        <Container maxWidth='md'>
          <Typography variant="h4" style={{ textAlign: "center", fontFamily: "Josefin Sans" }}>Who... are you?</Typography>
          <Grid container justify='center'>
            <img src='https://i.imgur.com/js4jZDQl.jpg' alt='me' style={{ width: windowSize.width >= 960 ? 450 : '90vw', margin: 20, maxWidth: 450 }} />
          </Grid>
          <Typography style={{ textAlign: 'center', fontSize: windowSize.width >= 960 ? '1.5em' : '1em' }}>
            That's a great question. Many things, is probably the best answer for that. I'm Matt,
            and I make a bunch of stuff under the handle
            of 'Version Gamma'.
            <br /><br />
            I do a bunch of stuff, the first and most obvious probably being software developement
            (the thing I'm actually trained in), but I also dabble in game design (mainly in Valve's
            Source 2 engine, creating custom content for Half-Life: Alyx), I occasionally take photos
            (because cameras are cool), and sometimes I do some videography (again, because cameras
            are cool).
            <br /><br />
            If you would like to see some of my work, just {windowSize.width >= 960 ?
              'click on one of the icons below' : 'tap on the menu button in the top left corner'}!
            There you can see the stuff I've made over the years, as well as the specifics of what
            I actually do in these fields.
          </Typography>
        </Container>
      </Box>
    </Fade>
  );
}

export default About;