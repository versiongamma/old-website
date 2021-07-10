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

      <Box style={{ paddingTop: 20 }}>
        <Typography variant='h1'>gnuidfgbsk</Typography>
      </Box>
    </Box>
  );
}

export default About;