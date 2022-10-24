/* eslint-disable @next/next/no-img-element */
import { Container, Divider, IconButton } from "@mui/material";
import { Grid, Typography } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars-2";
import { styled } from "goober";

import Head from "next/head";
import Image from "next/image";

import TopNavBar from "../components/TopNavBar";
import useWindowSize from "../hooks/useWindowSize";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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

const Footer = styled("div")`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  padding: 0 10px;
  && {
    margin: 1rem;
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
            <Grid container justifyContent="center" spacing={10}>
              <Grid item xs={12}>
                <GameContainer>
                  <DetailsContainer>
                    <Typography variant="h4">Redacted</Typography>
                    <Text>
                      Redacted was a team project I created with three others. A
                      stealth game, in which you're tasked with stealing a range
                      of items whilst sneaking around a variety of levels. You
                      can use your abilities to disable the enemies, otherwise
                      you better prepare for them to chase you.
                      <br />
                      <br />
                      This game has a number of complex features, mainly in our
                      use of external libraries for collision detection and pathfinding.
                      We used Box2D to handle our collision detection and raycasting calls,
                      and NavMesh for enemy navigation. To drive these features and generate
                      geometry, we created a level loading system that would dynamically generate
                      both our own custom entities, the enemies, items and sprite tiling, and the
                      Box2D and NavMesh entities.
                      <br />
                      <br />
                      During the development of this game, my main focus was on the enemy logic,
                      creating their vision system to see the player, their node pathing to create
                      patrol paths that they follow, an AI state machine to handle their different
                      states (whether they are chasing the player, patrolling, etc), and implementing
                      the NavMesh framework to enable the enemies to path back to their patrol routes
                      when they loose sight of the player.
                    </Text>
                    <TextLink href="https://www.github.com/MattAUT/redacted">Source Code</TextLink>
                  </DetailsContainer>
                  <img
                    src="img/redacted.webp"
                    alt=""
                    width={550}
                    style={{marginLeft: 20}}
                  />
                </GameContainer>
              </Grid>

              <Grid item xs={12}>
                <GameContainer>
                  <DetailsContainer>
                    <Typography variant="h4">Horde</Typography>
                    <Text>
                      Horde (or HORDE) was the first complete game project I
                      created in the C++ engine. A 2D, horde based shooter (wow)
                      where you use a variety of weapons to fight through rounds
                      of enemies.
                      <br />
                      <br />
                      This game includes rudimentary pathfinding using a graph
                      system for the enemies, UI for the weapons including icon
                      sprites and a recharge bar, as well as the level
                      load system, which allowed the game to load in custom data
                      to generate the levels, allowing for (relatively) easy
                      level creation. Much of the game's feel comes from the
                      custom sprite effect work and sound effects, which while
                      simple, create a sense of power while using the weapons.
                    </Text>
                    <TextLink href="https://www.github.com/MattAUT/horde">
                      Source Code
                    </TextLink>
                  </DetailsContainer>
                  <img
                    src="img/horde.webp"
                    alt=""
                    width={550}
                    style={{marginLeft: 20}}
                  />
                </GameContainer>
              </Grid>

              <Grid item xs={12}>
                <GameContainer>
                  <DetailsContainer>
                    <Typography variant="h4">Asteroids Clone</Typography>
                    <Text>
                      Although this Asteroids Clone was never fully completed,
                      creating it meant implementing a bunch of features into
                      the C++ engine that would later be very useful. I
                      integrated the framework FMOD for sound, added a lot of
                      debugging features including viewing the currently loaded
                      textures, log trails and entity tracking, and added (and
                      then later revised) a method for storing, processing and
                      drawing entities in the scene.
                    </Text>
                    <TextLink href="https://www.github.com/MattAUT/asteroidsclone">
                      Source Code
                    </TextLink>
                  </DetailsContainer>
                  <img
                    src="img/asteroidsv2.webp"
                    alt=""
                    width={700}
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
                    <Text>
                      This project was the beginning of me using my C++ engine,
                      utilising the XInput API as it was build into SDL, adding
                      debug windows with the IMGUI framework, and creating
                      actual game logic, including scoring, lives, and spawning
                      and despawning objects.
                    </Text>
                    <TextLink href="https://www.github.com/MattAUT/ballgame">
                      Source Code
                    </TextLink>
                  </DetailsContainer>
                  <img
                    src="img/ballgame.webp"
                    alt=""
                    width={700}
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
                    <Text>
                      This project was the beginnings of my C++ Game
                      Development. Although basic, this engine was the building
                      block for my future projects, implementing rendering with
                      OpenGL, window management with SDL, and was setup for the
                      basics of game logic, creating init, process and draw
                      states. To demo this engine, a simple scene of bouncing
                      balls was created.
                    </Text>
                    <TextLink href="https://www.github.com/MattAUT/engine">
                      Source Code
                    </TextLink>
                  </DetailsContainer>
                  <img
                    src="img/balls.webp"
                    alt=""
                    width={700}
                    style={{
                      clipPath: "inset(0 14% 0% 13%)",
                      marginRight: -90,
                    }}
                  />
                </GameContainer>
              </Grid>

              <DetailsContainer>
                <Footer>
                  <IconButton
                    onClick={() =>
                      window.open("https://github.com/versiongamma")
                    }
                  >
                    <GitHubIcon {...iconProps} />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/matthew-tribble-77a155197/"
                      )
                    }
                  >
                    <LinkedInIcon {...iconProps} />
                  </IconButton>
                </Footer>
              </DetailsContainer>
            </Grid>
          </Container>
        </>
      </Scrollbars>
    </>
  );
};

export default Games;
