import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Fade, IconButton } from "@mui/material";
import { styled } from "goober";
import React from "react";

import { usePageData } from "../hooks/use-page-data";
import PatreonIcon from "../icons/Patreon";
import theme from "../themes/theme";

const Main = styled("div")`
  text-align: center;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50vw;
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

const AboutTextHeader = styled("p")`
  font-size: 5vw;
  color: white;
  margin: 0;
  padding: 0;
`;

const AboutText = styled("p")`
  font-size: 1.3vw;
  color: white;
  margin: 0;
  padding: 0;
`;

const TextLink = styled("a")`
  color: ${theme.text.link};
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

const Home = () => {
  const { subs } = usePageData();

  return (
    <Fade in={!!subs}>
      <div>
        <Main>
          <AboutTextHeader>Who... am I?</AboutTextHeader>
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
