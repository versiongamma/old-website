import { Box, Fade, Typography, Hidden } from '@material-ui/core'
import  ArrowBackIcon  from '@material-ui/icons/ArrowBack';
import { useEffect, useState } from 'react';

type Props = {

}

const About: React.FunctionComponent<Props> = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  },[]);

  return (
    <Fade in={visible}>
    <Box>
      <Typography variant="h2" style={{textAlign: "center", paddingTop: "10vh", fontFamily: "Josefin Sans"}}>Coming Soon...</Typography>
      <Hidden mdUp>
        <Typography variant='h5' style={{textAlign: 'center', verticalAlign: 'center', paddingTop: '10vh'}}>Tap the menu icon <ArrowBackIcon /> to see more!</Typography>
      </Hidden>
    </Box>
    </Fade>
  );
}

export default About;