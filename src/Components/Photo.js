import { Grow } from "@material-ui/core";
import { useState } from "react";

export default function Photo(props) {
  const [visible, setVisible] = useState(false);

  const imageLoaded = () => {
    console.log("loaded");
    setVisible(true)
  }

  return (
    <Grow in={visible}>
      <img
        src={props.url}
        onLoad={imageLoaded}
        style={{ width: '20vw', padding: 40, borderRadius: 50}}
      />
    </Grow>
  );
}
