import { Box, Button, ButtonProps, Grid } from "@material-ui/core";
import { styled } from "goober";
import Image from "next/image";
import NextLink from "next/link";
import React, { useContext } from "react";

import { DarkMode } from "./../pages/_app";
import DarkModeToggle from "./DarkModeToggle";

type LinkProps = {
  $white: boolean;
} & ButtonProps;

const Link = styled<LinkProps>(Button)`
  color: ${({ $white }) => ($white ? "#fff" : "#000")};
  font-size: 20px;
`;

const pages = [
  { name: "About", href: "/" },
  { name: "YouTube", href: "/video" },
  { name: "Software", href: "/software" },
  { name: "Game Design", href: "/game" },
  { name: "Photos", href: "/photo" },
];

type Props = {
  section: number;
};

const TopNavBar = ({ section }: Props) => {
  // @ts-ignore
  const [darkMode] = useContext(DarkMode);

  return (
    <>
      <Box style={{ margin: 30 }}>
        <Grid container>
          <Grid item xs={6}>
            <Image
              alt="logo"
              src={
                darkMode || section === 0
                  ? "https://i.imgur.com/Jpy6jiE.png"
                  : "https://i.imgur.com/jA3OUSL.png"
              }
              width={330}
              height={104}
            />
          </Grid>

          <Grid item xs={6}>
            <Grid
              container
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              {pages.map((page, i) => (
                <Grid item key={i}>
                  <NextLink href={page.href} passHref>
                    <Link
                      variant={section === i ? "outlined" : "text"}
                      $white={darkMode || section === 0}
                    >
                      {page.name}
                    </Link>
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <DarkModeToggle />
    </>
  );
};

export default React.memo(TopNavBar);
