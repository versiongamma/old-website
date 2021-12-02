import { Container, Typography, IconButton, Hidden } from "@mui/material";
import { styled } from "goober";

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import PatreonIcon from "../icons/Patreon";

import Head from "next/head";
import Image from "next/image";

import TopNavBar from "../components/TopNavBar";
import { Fade } from "@material-ui/core";
// import useWindowSize from './../hooks/useWindowSize';

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

const TextLink = styled("a")`
  color: #ac94d6;
  text-decoration: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(60%);
  }
`;

type Props = {
  subs: number;
};

const Home = ({ subs }: Props) => {
  //const windowSize = useWindowSize();

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

      {/* This stuff is just a placeholder until I get around to mobile optimising the site */}
      <Hidden smUp>
        <Main>
          <AboutText>
            This site isn't mobile optimised yet. It will be, but it's not yet.
            <br />
            <br />
            When will it be? Man idk, whenever I get around to it, gimme a
            break.
          </AboutText>
        </Main>
      </Hidden>

      {/* These hiddens can be removed when mobile optimisation is ready */}
      <Hidden smDown>
        <TopNavBar section={0} />

        <Fade in={subs > 0}>
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
              , where I talk about games, game design, and really anything I
              find interesting. It's a fun time, I wouldn't recommend it, but
              apparently
              {" " + subs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              people would, so there's that.
              <br />
              <br />
              I'm also a Software Engineer, an appreciator of photography,
              pretending that I know how to design games, and an idiot, but I
              know you don't care about that. Except maybe that last one.
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
        </Fade>
      </Hidden>
    </>
  );
};

export default Home;
