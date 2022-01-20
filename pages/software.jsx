import { Grid, Box, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Head from 'next/head'

import Repo from './../components/Repo';
import TopNavBar from "../components/TopNavBar";
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

      <TopNavBar section={2} />

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

      <Box>
        <Typography variant="h1" style={{ textAlign: "center", paddingTop: "20%", fontFamily: "Josefin Sans" }}>Coming Soon...</Typography>
      </Box>
    </>
  );
}

export default Software;
