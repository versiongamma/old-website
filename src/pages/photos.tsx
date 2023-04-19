import { styled } from "goober";
import React, { useEffect, useState } from "react";

import ImgurPhoto from "../components/imgur-photo";
import { usePageData } from "../utils/use-page-data";
import { ImgurAPIResponse } from "../types";

const ImagesContainer = styled("div")`
  && {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    img {
      margin: 2rem;
    }
  }
`;

const Photos = () => {
  const { photos } = usePageData();
  return (
    <ImagesContainer>
      {photos && photos.data.images
        ? photos.data.images.map((img, i) => <ImgurPhoto key={i} {...img} />)
        : null}
    </ImagesContainer>
  );
};

export default React.memo(Photos);
