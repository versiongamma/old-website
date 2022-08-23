import { Grid, Box, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Head from 'next/head';
import Image from 'next/image';

import Repo from './../components/Repo';
import TopNavBar from "../components/topnavbar";
import useWindowSize from "../hooks/useWindowSize";

const Software = () => {

  const [repos, setRepos] = useState();
  const windowSize = useWindowSize();

  // useEffect(() => {
  //   fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=versiongamma')
  //     .then(res => res.json())
  //     .then(json => { setRepos(json) });
  // }, []);

  return (
    <>
      <Head>
        <title>Version Gamma | Software Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNavBar section={2} background hide/>

      <Image
        src="https://i.imgur.com/gAT8u7V.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 60%"
        quality={100}
        alt="background"
        priority
      />

      <Typography variant="h1" style={{ textAlign: "center", marginTop: "20%", fontFamily: "Josefin Sans", position: "relative", zIndex: 999 }}>Coming Soon...</Typography>

      {/* <Scrollbars universal autoHide style={{ height: windowSize.height - 170 }}>
        <Box
          style={{
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Grid container justifyContent='center' spacing={10}>

            {repos !== undefined ? repos.map((repo, i) => (
              <Grid item key={i}>
                <Repo key={i} {...repo} />
              </Grid>
            )) : null}
          </Grid>
        </Box>
      </Scrollbars> */}
    </>
  );
}

export default Software;
