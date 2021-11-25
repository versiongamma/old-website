import { Container, Typography, IconButton } from "@mui/material";
import { styled, setup } from "goober";
import { createElement, useEffect, useState } from "react";

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import PatreonIcon from "../icons/Patreon";

import Head from "next/head";
import Image from "next/image";

import TopNavBar from "../components/TopNavBar";
// import useWindowSize from './../hooks/useWindowSize';

setup(createElement);

const TextLink = styled("a")`
  color: #ac94d6;
  text-decoration: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(60%);
  }
`;

const Main = styled(Container)`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AboutTextHeader = styled(Typography)`
  font-size: 6em;
  color: white;
  text-shadow: 2px 2px 1px black, 5px 5px 1px black, 7px 7px 1px black;
`;

const AboutText = styled(Typography)`
  font-size: 1.7em;
  color: white;
  text-shadow: 2px 2px 1px black, 4px 4px 1px black;
`;

const Home = () => {
  //const windowSize = useWindowSize();
  const [sub, setSub] = useState(0);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCTxitBg-WrN_xTHKMbAzcIA&key=" +
        process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.items[0].statistics.subscriberCount);
        setSub(res.items[0].statistics.subscriberCount);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Version Gamma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://i.imgur.com/Iwv6Ly5.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="background"
      />

      <TopNavBar section={0} />

      <Main maxWidth="md">
        <AboutTextHeader variant="h1">Who... am I?</AboutTextHeader>
        <br />
        <AboutText>
          That is an excellent question. Many things, is probably the best
          answer to that, but the simplest is probably "maker of stuff."
          <br />
          <br />I make videos for the YouTube channel{" "}
          <TextLink href="https://youtube.com/c/versiongamma">
            Version Gamma
          </TextLink>
          , where I talk about games, game design, and really anything I find
          interesting. It's a fun time, I wouldn't recommend it, but apparently
          {" " + sub} people would, so there's that.
          <br />
          <br />
          I'm also a Software Engineer, an appreciator of photography,
          pretending that I know how to design games, and an idiot, but I know
          you don't care about that. Except maybe that last one.
        </AboutText>

        {/** Social Icons */}
        <br />
        <br />
        <IconButton
          onClick={() => window.open("https://youtube.com/c/versiongamma")}
        >
          <YouTubeIcon style={{ fill: "white" }} fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://instagram.com/variantgamma")}
        >
          <InstagramIcon style={{ fill: "white" }} fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://twitter.com/versiongamma")}
        >
          <TwitterIcon style={{ fill: "white" }} fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://github.com/versiongamma")}
        >
          <GitHubIcon style={{ fill: "white" }} fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://patreon.com/versiongamma")}
        >
          <PatreonIcon style={{ fill: "white" }} fontSize="large" />
        </IconButton>
      </Main>
    </>
  );
};

export default Home;
