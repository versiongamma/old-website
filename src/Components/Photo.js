import { Grow } from "@material-ui/core";
import { useState } from "react";

export default function Photo(props) {
  const [visible, setVisible] = useState(false);

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
          width: document.body.scrollWidth >= 600 ?'20vw' : '90vw', 
          padding: document.body.scrollWidth >= 600 ? 40 : 15, 
          borderRadius: document.body.scrollWidth >= 600 ? 50 : 30}}
      />
    </Grow>
  );
}
