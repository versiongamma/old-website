import { Container, Fade } from '@material-ui/core'
import { useEffect, useState } from 'react';

const Software: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  },[]);

  return (
    <Fade in={visible}>
     <Container maxWidth="md" style={{ textAlign: 'center' }}>

     </Container>
    </Fade>
  );
}

export default Software;