import { Container, Typography, IconButton } from '@mui/material';
import { styled, setup } from 'goober';
import { createElement } from 'react';

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from '@mui/icons-material/GitHub';

import Head from 'next/head'
import Image from 'next/image'

import TopNavBar from '../components/TopNavBar';
// import useWindowSize from './../hooks/useWindowSize';

setup(createElement);

const TextLink = styled('a')`
  color: #ac94d6;
  text-decoration: none;
  transition: filter .2s;

  &:hover {
    filter: brightness(60%);
  }
`;

const MainContainer = styled(Container)`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AboutTextHeader = styled(Typography)`
  color: white; 
  text-shadow: 4px 4px 1px black;

`;

const AboutText = styled(Typography)`
  font-size: 2em;
  color: white;
  text-shadow: 3px 3px 1px black;
`;

const Home = () => {
  //const windowSize = useWindowSize();

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

      <MainContainer maxWidth="md">
        <AboutTextHeader
          variant='h1'
        >
          Who... am I?
        </AboutTextHeader>
        <br />
        <AboutText>
          That is an excellent question. Many things, is probably the best
          answer to that, but the simplest is probably "maker of stuff"
          <br />
          <br />
          Alongside my professional work as a Software Developer, I also run
          the YouTube channel <TextLink href='https://youtube.com/c/versiongamma'>Version Gamma</TextLink>,
          where I make videos about games, game design, and really anything I find interesting.
        </AboutText>

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
        <IconButton onClick={() => window.open("https://github.com/versiongamma")}>
          <GitHubIcon style={{ fill: 'white' }} fontSize="large" />
        </IconButton>
      </MainContainer>
    </>
  )
}

export default Home;
