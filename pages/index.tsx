import { Container, Typography, IconButton } from '@material-ui/core';

import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import Head from 'next/head'
import Image from 'next/image'

import TopNavBar from '../components/TopNavBar';
import useWindowSize from './../hooks/useWindowSize';

const Home = () => {
  const windowSize = useWindowSize();

  return (
    <>
      <Head>
        <title>Version Gamma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src='https://i.imgur.com/Iwv6Ly5.jpg'
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <TopNavBar section={0} />

      <Container
        maxWidth="md"
        style={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h1"
          style={{ color: "white", textShadow: "3px 3px 1px black" }}
        >
          Who... am I?
        </Typography>
        <br />
        <Typography
          style={{
            fontSize: "2em",
            color: "white",
            textShadow: "2px 2px 1px black",
          }}
        >
          That is an excellent question. Many things, is probably the best
          answer to that. I'm Matt, and I create stuff under the handle of
          'Version Gamma'
          <br />
          <br />
          What kind of stuff? Computer stuff, to put it simply, but if you
          want something a little less vauge, well just take a look in the top right!
          Have a look around and see the dumb stuff I've concocted over
          my many years of messing around with cameras and computers.
        </Typography>

        {/** Social Icons */}
        <br />
        <br />
        <IconButton onClick={() => window.open("https://youtube.com/c/versiongamma")}>
          <YouTubeIcon style={{ fill: 'white' }} fontSize="large" />
        </IconButton>
        <IconButton onClick={() => window.open("https://instagram.com/variantgamma")}>
          <InstagramIcon style={{ fill: 'white' }} fontSize="large" />
        </IconButton>
        <IconButton onClick={() => window.open("https://twitter.com/versiongamma")}>
          <TwitterIcon style={{ fill: 'white' }} fontSize="large" />
        </IconButton>
      </Container>
    </>
  )
}

export default Home;
