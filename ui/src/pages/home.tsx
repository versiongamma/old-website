import { Fade } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Hidden, IconButton, Typography } from "@mui/material";
import { styled } from "goober";
import React from "react";

import Banner from "../components/banner";
import PatreonIcon from "../icons/Patreon";

const Main = styled("div")`
  text-align: center;
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 900px;
`;

const Footer = styled("div")`
  text-align: center;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  padding: 0 10px;

  && {
    margin: 1rem;
  }
`;

const AboutTextHeader = styled(Typography)`
  font-size: 6em;
  color: white;

  @media (max-width: 900px) {
    font-size: 4em !important;
  }

  @media (max-width: 600px) {
    font-size: 3em !important;
  }
`;

const AboutText = styled(Typography)`
  font-size: 1.7em !important;
  color: white;

  @media (max-width: 900px) {
    font-size: 1.4em !important;
  }

  @media (max-width: 600px) {
    font-size: 1em !important;
  }
`;

const TextLink = styled("a")`
  color: #c79bf7;
  text-decoration: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(80%);
  }
`;

const iconProps: {
  // This type declaration is done so that TS understands the
  // unionized type of fontSize, otherwise it throws errors
  sx: { color: string; margin: string };
  fontSize: "small" | "medium" | "large" | "inherit";
} = {
  sx: { color: "white", margin: "0.4rem" },
  fontSize: "large",
};

type Props = {
  subs: number;
};

const Home = ({ subs }: Props) => {
  //const windowSize = useWindowSize();

  return (
    <Fade in={subs > 0}>
      <div>
        <Main>
          <AboutTextHeader variant="h1">Who... am I?</AboutTextHeader>
          <br />
          <br />
          <AboutText>
            That is an excellent question. Many things, is probably the best
            answer to that, but the simplest is probably "maker of stuff".
            <br />
            <br />I make videos for the YouTube channel{" "}
            <TextLink href="https://youtube.com/c/versiongamma">
              Version Gamma
            </TextLink>
            , where I talk about games, game design, and really anything I find
            interesting. It's a fun time, I wouldn't recommend it, but
            apparently
            {" " +
              (subs ?? "some")
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            people would, so there's that.
            <br />
            <br />
            I'm also a Software Engineer, an appreciator of photography,
            pretending that I know how to design games, and an idiot, but I know
            you don't care about that. Except maybe that last one.
          </AboutText>
        </Main>
        <Footer>
          <IconButton
            onClick={() => window.open("https://youtube.com/c/versiongamma")}
          >
            <YouTubeIcon {...iconProps} />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://instagram.com/variantgamma")}
          >
            <InstagramIcon {...iconProps} />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://twitter.com/versiongamma")}
          >
            <TwitterIcon {...iconProps} />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://github.com/versiongamma")}
          >
            <GitHubIcon {...iconProps} />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://patreon.com/versiongamma")}
          >
            <PatreonIcon {...iconProps} />
          </IconButton>
        </Footer>
      </div>
    </Fade>
  );
};

export default React.memo(Home);
