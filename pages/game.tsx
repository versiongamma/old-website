import { Typography, Box } from "@material-ui/core";

import Head from 'next/head'

import TopNavBar from "../components/TopNavBar";

const Game = () => {
  return (
    <>
      <Head>
        <title>Version Gamma | Game Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNavBar section={2} />

      <Box>
        <Typography variant="h1" style={{ textAlign: "center", paddingTop: "20%", fontFamily: "Josefin Sans" }}>Coming Soon...</Typography>
      </Box>
    </>
  );
}

export default Game;