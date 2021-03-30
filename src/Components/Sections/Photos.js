import { Container, Fade, Snackbar, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useEffect, useState } from "react";

import Photo from './../Photo';

const clientID = '8c3be964eba99d7';

export default function Photos(props) {
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setVisible(true);

    fetch("https://api.imgur.com/3/album/JKELiQA", { headers: { Authorization: 'CLIENT-ID ' + clientID } })
      .then(res => res.json())
      .then(result => setImages(result.data.images));
  }, []);

  return (
    <Fade in={visible} mountOnEnter unmountOnExit>
      <Container maxWidth="xl" style={{ textAlign: 'center' }}>
        {images !== undefined ? images.map((img, i) => (
          <Photo key={i} photo={img} />
        )) :
          <Snackbar open={true} autoHideDuration={6000} style={{bottom: '5vh'}}>
            <Alert severity='error'>Images Failed to Load!</Alert>
          </Snackbar>
        }
      </Container>
    </Fade>
  );
}
