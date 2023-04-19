import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Fade, IconButton } from "@mui/material";
import { styled } from "goober";
import React from "react";

import { usePageData } from "../utils/use-page-data";
import PatreonIcon from "../icons/Patreon";
import theme from "../themes/theme";
import useResponsiveDimension, {
  ScreenSize,
} from "../utils/use-responsive-dimension";

const SCREEN_SIZE_TO_FONT_SIZE_MAP: Record<ScreenSize, string> = {
  [ScreenSize.DESKTOP]: "1.1vw",
  [ScreenSize.TABLET]: "2.1vw",
  [ScreenSize.MOBILE]: "3.1vw",
};

const SCREEN_SIZE_TO_HEADER_SIZE_MAP: Record<ScreenSize, string> = {
  [ScreenSize.DESKTOP]: "4vw",
  [ScreenSize.TABLET]: "7vw",
  [ScreenSize.MOBILE]: "10vw",
};

type MainProps = {
  $isDesktop: boolean;
};

const Main = styled<MainProps>("div")`
  text-align: center;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: ${({ $isDesktop }) => ($isDesktop ? "50vw" : "80vw")};
`;

const Footer = styled("div")`
  text-align: center;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  padding: 0.5rem;

  && {
    margin: 1rem;
  }
`;

type TextProps = {
  $screenSize: ScreenSize;
};

const AboutTextHeader = styled<TextProps>("p")`
  font-size: ${({ $screenSize }) =>
    SCREEN_SIZE_TO_HEADER_SIZE_MAP[$screenSize]};
  color: white;
  margin: 0;
  padding: 0;
`;

const AboutText = styled<TextProps>("p")`
  font-size: ${({ $screenSize }) => SCREEN_SIZE_TO_FONT_SIZE_MAP[$screenSize]};
  color: white;
  margin: 0;
  padding: 0;
`;

const TextLink = styled("a")`
  text-decoration: none;
  transition: filter 0.2s;
  font-weight: 700;

  &:hover {
    filter: brightness(80%);
  }
`;

const VersionGammaTextLink = styled(TextLink)`
  color: ${theme.text.link.versiongamma};
`;

const JoyousTextLink = styled(TextLink)`
  color: ${theme.text.link.joyous};
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
  const screenSize = useResponsiveDimension();

  return (
    <Fade in={!!subs}>
      <div>
        <Main $isDesktop={screenSize === ScreenSize.DESKTOP}>
          <AboutTextHeader $screenSize={screenSize}>
            Who... am I?
          </AboutTextHeader>
          <br />
          <br />
          <AboutText $screenSize={screenSize}>
            That is an excellent question. Many things, is probably the best
            answer to that, but the simplest is probably "maker of stuff".
            <br />
            <br />I work as a full stack web developer at{" "}
            <JoyousTextLink href="https://joyoushq.com">Joyous</JoyousTextLink>,
            using a modern and highly flexible tech stack including
            <br />
            <strong>React, NodeJS, GraphQL, TypeScript, MongoDB, AWS</strong>
            <br />
            and more to deliver enterprise employee feedback software that
            focuses on open communication.
            <br />
            <br />I also make videos for the YouTube channel{" "}
            <VersionGammaTextLink href="https://youtube.com/c/versiongamma">
              Version Gamma
            </VersionGammaTextLink>
            , where I mostly discuss game design (although I occasionally branch
            out into other topics I'm passionate about). It's a fun time, I
            wouldn't recommend it, but apparently
            {" " +
              (subs ?? "some")
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            people would, so there's that.
            <br />
            <br />
            You might also notice I'm a little bit of an appreciator of things
            involving cameras, from the personal photography I do, to the
            videography that goes into the videos I produce. It's been a hobby
            of mine for many years, and I use it as an excuse to visit
            interesting and beautiful places, which we have in great abundance
            here in my home of Aotearoa.
          </AboutText>
        </Main>
        {screenSize === ScreenSize.DESKTOP && (
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
        )}
      </div>
    </Fade>
  );
};

export default React.memo(Home);
