/* eslint-disable @next/next/no-img-element */
import { Container } from "@mui/material";
import { Grid, Box, Typography, StylesProvider } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { styled } from "goober";

import Head from "next/head";
import Image from "next/image";

import TopNavBar from "../components/topnavbar";
import useWindowSize from "../hooks/useWindowSize";

const GameContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DetailsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const Text = styled("p")`
  font-size: 0.8rem;
  word-wrap: break-word;
  margin: 0.2rem 0;
`;

const TextLink = styled("a")`
  color: #c79bf7;
  text-decoration: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(80%);
  }
`;

const Games = () => {
  const windowSize = useWindowSize();

  // useEffect(() => {
  //   fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=versiongamma')
  //     .then(res => res.json())
  //     .then(json => { setRepos(json) });
  // }, []);

  return (
    <>
      <Head>
        <title>Version Gamma | Game Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNavBar section={3} background hide />

      <Image
        src="https://i.imgur.com/gAT8u7V.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 60%"
        quality={100}
        alt="background"
        priority
      />

      <Scrollbars
        universal
        autoHide
        style={{ height: windowSize.height - 170 }}
      >
        <>
          <Container maxWidth="lg" style={{ marginTop: 40, marginBottom: 50 }}>
            <Grid container justifyContent="center" spacing={3}>

            <Grid item xs={12}>
                <GameContainer>
                  <DetailsContainer>
                    <Typography variant="h4">Redacted</Typography>
                    <Text>
                      - NavMesh
                    </Text>
                    <TextLink href="">Source Code</TextLink>
                  </DetailsContainer>
                  <img
                    src="img/balls.webp"
                    alt=""
                    width={600}
                    style={{
                      clipPath: "inset(0 14% 0% 13%)",
                      marginRight: -90,
                    }}
                  />
                </GameContainer>
              </Grid>

            <Grid item xs={12}>
                <GameContainer>
                  <DetailsContainer>
                    <Typography variant="h4">Horde</Typography>
                    <Text>Horde (or HORDE) was the first complete game project I created in the C++ engine. A 2D, horde based shooter (wow)
                      where you use a variety of weapons to fight through rounds of enemies. This game includes rudimentary pathfinding using a
                      graph system for the enemies, UI
                    </Text>
                    <TextLink href="">Source Code</TextLink>
                  </DetailsContainer>
                  <img
                    src="img/balls.webp"
                    alt=""
                    width={600}
                    style={{
                      clipPath: "inset(0 14% 0% 13%)",
                      marginRight: -90,
                    }}
                  />
                </GameContainer>
              </Grid>

            <Grid item xs={12}>
                <GameContainer>
                  <DetailsContainer>
                    <Typography variant="h4">Asteroids Clone</Typography>
                    <Text>Although this Asteroids Clone was never fully completed, creating it meant implementing a bunch of
                      features into the C++ engine that would later be very useful. I integrated the framework FMOD for sound,
                      added a lot of debugging features including viewing the currently loaded textures, log trails and entity tracking,
                      and added (and then later revised) a method for storing, processing and drawing entities in the scene.
                    </Text>
                    <TextLink href="">Source Code</TextLink>
                  </DetailsContainer>
                  <img
                    src="img/asteroidsv2.webp"
                    alt=""
                    width={600}
                    style={{
                      clipPath: "inset(0 14%)",
                      marginRight: -90,
                    }}
                  />
                </GameContainer>
              </Grid>

              <Grid item xs={12}>
                <GameContainer>
                  <DetailsContainer>
                    <Typography variant="h4">Pseudo Bullet Hell</Typography>
                    <Text>This project was the beginning of me using my C++ engine, utilising the XInput API as it was build into SDL,
                      adding debug windows with the IMGUI framework, and creating actual game logic, including scoring, lives, and
                      spawning and despawning objects.
                    </Text>
                    <TextLink href="">Source Code</TextLink>
                  </DetailsContainer>
                  <img
                    src="img/ballgame.webp"
                    alt=""
                    width={600}
                    style={{
                      clipPath: "inset(0 14% 0% 13%)",
                      marginRight: -90,
                    }}
                  />
                </GameContainer>
              </Grid>

              <Grid item xs={12}>
                <GameContainer>
                  <DetailsContainer>
                    <Typography variant="h4">Game Engine V0.1</Typography>
                    <Text>This project was the beginnings of my C++ Game Development. Although basic, this engine was the building block for
                      my future projects, implementing rendering with OpenGL, window management with SDL, and was setup for the basics of game
                      logic, creating init, process and draw states. To demo this engine, a simple scene of bouncing balls was created.
                    </Text>
                    <TextLink href="">Source Code</TextLink>
                  </DetailsContainer>
                  <img
                    src="img/balls.webp"
                    alt=""
                    width={600}
                    style={{
                      clipPath: "inset(0 14% 0% 13%)",
                      marginRight: -90,
                    }}
                  />
                </GameContainer>
              </Grid>

              <DetailsContainer>
                <Typography variant="h3">References</Typography>

                <Text>https://www.fmod.com/docs/2.02/api/core-guide.html</Text>
                <Text>https://wiki.libsdl.org/</Text>
                <Text>https://glew.sourceforge.net/</Text>
                <Text>https://github.com/ilyanikolaevsky/navmesh</Text>
              </DetailsContainer>
            </Grid>
          </Container>
        </>
      </Scrollbars>
    </>
  );
};

export default Games;
