import { Container, Grid, Card, CardMedia, Fade } from "@material-ui/core";
import { useEffect, useState } from "react";

const clientID = '8c3be964eba99d7';

export default function Photos(props) {
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setVisible(true);

    fetch("https://api.imgur.com/3/album/JKELiQA", {headers: {Authorization: 'CLIENT-ID ' + clientID}}).then(res => res.json())
    .then((result) => {
      console.log(result.data.images)
      setImages(result.data.images)
    });
  }, []);

  return (
    <Fade in={visible}>
      <Container maxWidth="xl" style={{textAlign: 'center'}}>
          {images.map((img, i) => (
              <img 
                id={i}
                src={img.link} 
                style={{width: '20vw', padding: 40}}
              />
          ))}
      </Container>
    </Fade>
  );
}
