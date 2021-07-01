import { Container, Fade, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useEffect, useState } from "react";

import Photo from '../Elements/Photo';

type ImgurResponse = {
  data: {
    images: [{
      link: string,
      description: string
    }]
  }
}

const Photos: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const [wait, setWait] = useState(true);
  const [response, setResponse] = useState<ImgurResponse>();

  // Get the API response
  useEffect(() => {
    setVisible(true);

    fetch("https://api.imgur.com/3/album/JKELiQA", { headers: { Authorization: 'CLIENT-ID ' + process.env.REACT_APP_IMGUR_API_KEY } })
      .then(res => res.json())
      .then(result => setResponse(result));
  }, []);

  // Wait 1 second before allowing the error to display, to prevent it displaying in the gap of time
  // where the image data is being fetched
  useEffect(() => {
    const timer = setTimeout(() => {
      setWait(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fade in={visible} mountOnEnter unmountOnExit>
      <Container maxWidth="xl" style={{ textAlign: 'center' }}>
        {response?.data.images !== undefined ? response.data.images.map((img, i) => (
          <Photo key={i} photo={img} />
        )) : wait ? '' :
          <Snackbar open={true} autoHideDuration={6000} style={{bottom: '5vh'}}>
            <Alert severity='error'>Images Failed to Load!</Alert>
          </Snackbar>
        }
      </Container>
    </Fade>
  );
}

export default Photos;
