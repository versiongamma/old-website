import { Box, Fade, Typography, Container, IconButton, Hidden } from "@material-ui/core";
import { useEffect, useState } from "react";

import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const About = () => {
  const [showText, setShowText] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(1);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box style={{ width: "100%", height: "100%" }}>
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
        <Fade in={showText > 0} timeout={1000}>
          <Box>

            {/** Text to be displayed on desktop */}
            <Hidden smDown>
              <Typography
                variant="h1"
                style={{ color: "white", textShadow: "5px 5px 2px black" }}
              >
                Who... am I?
              </Typography>
              <br />
              <Typography
                style={{
                  fontSize: "2em",
                  color: "white",
                  textShadow: "4px 4px 1px black",
                }}
              >
                That is an excellent question. Many things, is probably the best
                answer to that. I'm Matt, and I create stuff under the handle of
                'Version Gamma'
                <br />
                <br />
                What kind of stuff? Computer stuff, to put it simply, but if you
                want something a little less vauge, well just take a look below!
                Have a look around and see the dumb stuff I've conconcted over
                my many years of messing around with cameras and computers.
              </Typography>
            </Hidden>

            {/** Text to be displayed on mobile */}
            <Hidden mdUp>
              <Typography
                variant="h3"
                style={{ color: "white", textShadow: "5px 5px 2px black" }}
              >
                Who... am I?
              </Typography>
              <br />
              <br />
              <Typography
                style={{
                  fontSize: "1em",
                  color: "white",
                  textShadow: "4px 4px 1px black",
                }}
              >
                That is an excellent question. Many things, is probably the best
                answer to that. I'm Matt, and I create stuff under the handle of
                'Version Gamma'
                <br />
                <br />
                What kind of stuff? Computer stuff, to put it simply, but if you
                want something a little less vauge, well just take a look in the top
                left menu! Have a look around and see the dumb stuff I've conconcted over
                my many years of messing around with cameras and computers.
              </Typography>
            </Hidden>

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
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default About;
