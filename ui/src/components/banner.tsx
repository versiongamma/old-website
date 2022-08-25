import { Button } from "@mui/material";
import { styled } from "goober";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

type NavBarContainerProps = {
  $background: boolean;
};

const BannerContainer = styled<NavBarContainerProps>("div")`
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
`;
type Props = {
  pages: {
    name: string;
    href: string;
    element: JSX.Element;
  }[];
  background?: boolean;
};

const Banner = ({ pages, background }: Props) => {
  const { pathname } = useLocation();

  return (
    <BannerContainer $background={background ?? false}>
      <ContentsContainer>
        <img
          alt="logo"
          src={"https://i.imgur.com/Jpy6jiE.png"}
          width={330}
          height={104}
        />

        <LinksContainer>
          {pages.map((page) => (
            <Link
              href={page.href}
              variant={page.href === pathname ? "outlined" : "text"}
              color="inherit"
            >
              {page.name}
            </Link>
          ))}
        </LinksContainer>
      </ContentsContainer>
    </BannerContainer>
  );
};

export default React.memo(Banner);
