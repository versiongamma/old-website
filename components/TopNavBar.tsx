import { Box, Button, ButtonProps, Grid } from "@material-ui/core";
import { styled } from "goober";
import Image from "next/image";
import NextLink from "next/link";
import React, { useContext } from "react";

const Link = styled(Button)`
  font-size: 20px;
`;

const pages = [
  { name: "About", href: "/" },
  { name: "YouTube", href: "/video" },
  { name: "Software", href: "/software" },
  { name: "Photos", href: "/photo" },
];

type Props = {
  section: number;
};

const TopNavBar = ({ section }: Props) => {
  // @ts-ignore

  return (
    <>
      <Box style={{ margin: 30 }}>
        <Grid container>
          <Grid item xs={6}>
            <Image
              alt="logo"
              src={"https://i.imgur.com/Jpy6jiE.png"}
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
                    <Link variant={section === i ? "outlined" : "text"}>
                      {page.name}
                    </Link>
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default React.memo(TopNavBar);
