import { Box, Typography, Fade } from '@material-ui/core'
import { useEffect, useState } from 'react';

export default function Software(props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  },[]);

  return (
    <Fade in={visible}>
    <Box>
      <Typography variant="h1" style={{textAlign: "center", paddingTop: "20%", fontFamily: "Josefin Sans"}}>Coming Soon...</Typography>
    </Box>
    </Fade>
  );
}