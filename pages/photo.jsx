import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

import TopNavBar from "../components/TopNavBar";
import Photo from '../components/Photo';

import { Scrollbars } from 'react-custom-scrollbars-2';
import useWindowSize from "../hooks/useWindowSize";

const photo = () => {

  const [response, setResponse] = useState();
  const windowSize = useWindowSize();

  useEffect(() => {

    fetch("https://api.imgur.com/3/album/JKELiQA", { headers: { Authorization: 'CLIENT-ID ' + process.env.NEXT_PUBLIC_IMGUR_API_KEY } })
      .then(res => res.json())
      .then(result => {
        setResponse(result);
      });
  }, []);

  return (
    <>
      <TopNavBar section={3} />

      <Scrollbars universal autoHide style={{ height: windowSize.height - 170 }}>
        <Grid container justifyContent='center' spacing={10}>
          {response !== undefined ? response.data.images.map((img, i) => (
            <Grid item key={i}>
              <Photo key={i} {...img} />
            </Grid>
          )) : null}
        </Grid>
      </Scrollbars>
    </>
  );
}

export default photo;