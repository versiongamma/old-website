import { Grid, Snackbar } from "@material-ui/core";
import { useEffect, useState } from "react";
import Alert from "@material-ui/lab/Alert";

import Head from 'next/head'

import TopNavBar from "../components/TopNavBar";
import PhotoElement from '../components/PhotoElement';

import { Scrollbars } from 'react-custom-scrollbars-2';
import useWindowSize from "../hooks/useWindowSize";

const Photo = () => {

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
      <Head>
        <title>Version Gamma | Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNavBar section={4} />

      <Scrollbars universal autoHide style={{ height: windowSize.height - 170 }}>
        <Grid container justifyContent='center' spacing={10}>
          {response !== undefined ? response.data.images.map((img, i) => (
            <Grid item key={i}>
              <PhotoElement key={i} {...img} />
            </Grid>
          )) : null}
        </Grid>
      </Scrollbars>
    </>
  );
}

export default Photo;