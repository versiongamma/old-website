import { Grow } from "@material-ui/core";
import { useState } from "react";
import useWindowSize from '../../hooks/useWindowSize';

type Props = {
  photo: {
    link: string,
    description: string
  }
}

const Photo = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const windowSize = useWindowSize();

  const imageLoaded = () => {
    setVisible(true)
  }

  return (
    <Grow in={visible}>
      <img
        src={props.photo.link.replace('.jpg', 'l.jpg')}
        alt={props.photo.description}
        onLoad={imageLoaded}
        style={{ 
          width: windowSize.width > 960 ? windowSize.width > 1920 ? '20vw' : '40vw' : '90vw', 
          padding: document.body.scrollWidth >= 960 ? 40 : 15, 
          borderRadius: document.body.scrollWidth >= 960 ? 50 : 30}}
      />
    </Grow>
  );
}

export default Photo;
