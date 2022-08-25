import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { styled } from "goober";

import Head from "next/head";
import Image from "next/image";

import Banner from "../components/banner";
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
  const [repos, setRepos] = useState();
  const windowSize = useWindowSize();

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: 40, marginBottom: 50 }}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12}>
            <GameContainer>
              <DetailsContainer>
                <Typography variant="h4">Console Object Orientation</Typography>
                <Text> - Console Application with Win32</Text>
                <Text> - Learning CPP, more specifically class based CPP</Text>
                <TextLink href="">Possibly a source code link?</TextLink>
              </DetailsContainer>
              <img
                src="img/oogjw.webp"
                alt=""
                width={600}
                style={{
                  clipPath: "inset(20% 16% 22% 13%)",
                  marginRight: -100,
                }}
              />
            </GameContainer>
          </Grid>

          <Grid item xs={12}>
            <GameContainer>
              <DetailsContainer>
                <Typography variant="h4">Game Engine V0.1</Typography>
                <Text> - Use of frameworks (OpenGL, SDL)</Text>
                <Text> - Rendering sprites with SDL_image and OpenGL</Text>
                <Text>
                  {" "}
                  - Game State logic (process & draw states, frame timings)
                </Text>
                <TextLink href="">Possibly a source code link?</TextLink>
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
                <Typography variant="h4">Pseudo Bullet Hell</Typography>
                <Text>
                  {" "}
                  - More game like logic (scoring, lives, object spawning)
                </Text>
                <Text> - Input, using the XInput API with SDL</Text>
                <Text> - Debugging with IMGUI</Text>
                <TextLink href="">Possibly a source code link?</TextLink>
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
                <Typography variant="h4">Asteroids Clone V1</Typography>
                <Text>
                  {" "}
                  - Creating a full game product, not a complete game but a
                  complete application
                </Text>
                <Text>
                  {" "}
                  - More advanced physics logic, using both acceleration and
                  velocity
                </Text>
                <Text>
                  {" "}
                  - Animated sprites, the concept of reducing texture swapping
                  with complete textures
                </Text>
                <Text> - FMOD integration</Text>
                <Text>
                  {" "}
                  - Text rendering with SDL_ttf, and how the dynamic text
                  rendering is actually bad
                </Text>
                <Text>
                  {" "}
                  - Concept of scene state, storing all entities in the scene to
                  be processes
                </Text>
                <TextLink href="">Possibly a source code link?</TextLink>
              </DetailsContainer>
              <img
                src="img/asteroids.webp"
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
                <Typography variant="h4">Asteroids Clone V2</Typography>
                <Text>
                  {" "}
                  - Lessons learned through the iteration, that the scene state
                  concept was not efficient, but could be repurposed for
                  debugging features
                </Text>
                <Text>
                  {" "}
                  - More advanced debugging, log trails, entity tracking,
                  texture manager viewer
                </Text>
                <TextLink href="">Possibly a source code link?</TextLink>
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

          <DetailsContainer>
            <Typography variant="h3">References</Typography>

            <Text>https://www.fmod.com/docs/2.02/api/core-guide.html</Text>
            <Text>https://wiki.libsdl.org/</Text>
          </DetailsContainer>
        </Grid>
      </Container>
    </>
  );
};

export default Games;
