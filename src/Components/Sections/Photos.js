import { Container, Grid, Card, CardMedia, Fade } from "@material-ui/core";
import { Skeleton } from '@material-ui/lab';
import { useEffect, useState } from "react";

import image from './../../img/Wallpaper.jpg'

export default function Photos(props) {
  const importAll = (r) => { return r.keys().map(r); }
  const images = importAll(require.context('./../../img/', false, /\.(png|jpe?g|svg)$/));

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Fade in={visible}>
      <Container maxWidth="xl" style={{textAlign: 'center'}}>
          {images.map((img) => (
              <img 
                src={img.default} 
                style={{width: '20vw', padding: 40}}
              />
          ))}
      </Container>
    </Fade>
  );
}

/**
 * <Card style={{ minWidth: 500, margin: 20 }}>
                <CardMedia
                  style={{ height: 0, paddingTop: '56.25%' }}
                  image={img.default}
                />
              </Card>
 * 
 */