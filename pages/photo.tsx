import { Grid } from "@material-ui/core";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Image from "next/image";

import PhotoElement from "../components/PhotoElement";
import TopNavBar from "../components/TopNavBar";
import useWindowSize from "../hooks/useWindowSize";
import { ImgurAPIResponse } from "../types";

const Photo = () => {
  const [response, setResponse] = useState<ImgurAPIResponse | undefined>();
  const windowSize = useWindowSize();

  useEffect(() => {
    fetch("https://api.imgur.com/3/album/JKELiQA", {
      headers: {
        Authorization: "CLIENT-ID " + process.env.NEXT_PUBLIC_IMGUR_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setResponse(result);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Version Gamma | Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNavBar section={4} background hide />

      <Image
        src="https://i.imgur.com/gAT8u7V.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 60%"
        quality={100}
        alt="background"
        priority
      />

      <Scrollbars
        universal
        autoHide
        style={{ height: windowSize.height - 170 }}
      >
        <Grid container justifyContent="center" spacing={10}>
          {response && response.data.images
            ? response.data.images.map((img, i) => (
                <Grid item key={i}>
                  <PhotoElement key={i} {...img} />
                </Grid>
              ))
            : null}
        </Grid>
      </Scrollbars>
    </>
  );
};

export default React.memo(Photo);
