import { Grow } from "@material-ui/core";
import { useState } from "react";
import useWindowSize from './../hooks/useWindowSize';

/**
 * 
 * @param {*} props photo: The photo to render
 * @returns 
 */
export default function Photo(props) {
  const [visible, setVisible] = useState(false);
  const windowSize = useWindowSize();

  const imageLoaded = () => {
    setVisible(true)
  }

  return (
    <Grow in={visible}>
      <img
        src={props.photo.link}
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
