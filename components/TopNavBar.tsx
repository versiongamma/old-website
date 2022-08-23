import { Button } from "@mui/material";
import { styled } from "goober";
import Image from "next/image";
import NextLink from "next/link";
import React, { useContext } from "react";

type NavBarContainerProps = {
  $background: boolean;
};

const NavBarContainer = styled<NavBarContainerProps>("div")`
  padding: 30px;
  background-color: rgba(
    0,
    0,
    0,
    ${({ $background }) => ($background ? 0.2 : 0)}
  );
  position: relative;
  z-index: 999;
`;

const ContentsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinksContainer = styled("div")`
  && {
    a {
      margin: 10px;
    }
  }
`;

const Link = styled(Button)`
  font-size: 20px;
  font-family: Assistant;
`;

const pages = [
  { name: "About", href: "/" },
  { name: "YouTube", href: "/video" },
  { name: "Software", href: "/software" },
  { name: "Game Development", href: "/games" },
  { name: "Photos", href: "/photo" },
];

type Props = {
  section: number;
  background?: boolean;
  hide?: boolean;
};

const TopNavBar = ({ section, background, hide }: Props) => {
  return (
    <NavBarContainer $background={background ?? false}>
      <ContentsContainer>
        <NextLink href="/" passHref>
          <a>
            <Image
              alt="logo"
              src={"https://i.imgur.com/Jpy6jiE.png"}
              width={330}
              height={104}
            />
          </a>
        </NextLink>
        <LinksContainer>
          {pages.map((page, index) => {
            if (hide && (index === 0 || index == 1)) return;
            return (
              <NextLink href={page.href} key={page.name} passHref>
                <Link
                  variant={section === index ? "outlined" : "text"}
                  color="inherit"
                >
                  {page.name}
                </Link>
              </NextLink>
            );
          })}
        </LinksContainer>
      </ContentsContainer>
    </NavBarContainer>
  );
};

export default React.memo(TopNavBar);
