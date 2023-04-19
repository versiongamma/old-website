import { styled } from "goober";
import React from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";
import { PageData } from "../types";
import useResponsiveDimension, {
  ScreenSize,
} from "../utils/use-responsive-dimension";

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

type ContentsContainerProps = {
  $onlyLogo: boolean;
};

const ContentsContainer = styled<ContentsContainerProps>("div")`
  display: flex;
  justify-content: ${({ $onlyLogo }) =>
    $onlyLogo ? "center" : "space-between"};
  align-items: center;
`;

type LinkButtonProps = {
  $outline: boolean;
} & LinkProps;

const LinkButton = styled<LinkButtonProps>((props) => (
  <Link
    // Yes this sucks, but styled components doesn't like
    // transient props of the link component due to it having to
    // be typecast to any, so we have to manually filter them out
    {...(Object.fromEntries(
      Object.entries(props).filter(([key]) => key[0] !== "$")
    ) as any)}
  />
))`
  && {
    color: white;
    font-size: 1.2rem;
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
  pages: PageData[];
  background?: boolean;
};

const Banner = ({ pages, background }: Props) => {
  const { pathname } = useLocation();
  const screenSize = useResponsiveDimension();

  return (
    <BannerContainer $background={background ?? false}>
      <ContentsContainer $onlyLogo={screenSize !== ScreenSize.DESKTOP}>
        <img
          alt="logo"
          src={"https://i.imgur.com/Jpy6jiE.png"}
          width={330}
          height={104}
        />
        {screenSize === ScreenSize.DESKTOP && (
          <div>
            {pages.map((page) => (
              <LinkButton
                key={page.name}
                to={page.href}
                $outline={pathname.split("/")[1] === page.href.split("/")[1]}
              >
                {page.name}
              </LinkButton>
            ))}
          </div>
        )}
      </ContentsContainer>
    </BannerContainer>
  );
};

export default React.memo(Banner);
