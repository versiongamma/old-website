import { CircularProgress, Fade } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useState } from "react";


export default function Photo(props) {
  const [visible, setVisible] = useState(false);

  const imageLoaded = () => {
    console.log("loaded");
    setVisible(true)
  }

  return (
    <Fade in={visible}>
      <img
        src={props.url}
        onLoad={imageLoaded}
        style={{ width: '20vw', padding: 40 }}
      />
    </Fade>
  );
}
