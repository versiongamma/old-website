import { styled } from "goober";
import React from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

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

type LinkButtonProps = {
  $outline: boolean;
} & LinkProps;

const LinkButton = styled<LinkButtonProps>(Link as any)`
  && {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.8rem;
    margin: 0.6rem;
    border-radius: 0.5rem;
    border: ${({ $outline }) => ($outline ? "1px" : 0)} solid white;
    transition: background-color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
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

        <div>
          {pages.map((page) => (
            <LinkButton
              to={page.href}
              $outline={pathname.split("/")[1] === page.href.split("/")[1]}
            >
              {page.name}
            </LinkButton>
          ))}
        </div>
      </ContentsContainer>
    </BannerContainer>
  );
};

export default React.memo(Banner);
