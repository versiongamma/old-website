import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import ImgurPhoto from "../components/imgur-photo";
import Banner from "../components/banner";
import useWindowSize from "../hooks/useWindowSize";
import { ImgurAPIResponse } from "../types";
import { styled } from "goober";

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

const Photo = () => {
  const [response, setResponse] = useState<ImgurAPIResponse | undefined>();

  useEffect(() => {
    fetch("https://api.imgur.com/3/album/JKELiQA", {
      headers: {
        Authorization: "CLIENT-ID " + process.env.REACT_APP_IMGUR_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setResponse(result);
      });
  }, []);

  return (
    <ImagesContainer>
      {response && response.data.images
        ? response.data.images.map((img, i) => <ImgurPhoto key={i} {...img} />)
        : null}
    </ImagesContainer>
  );
};

export default React.memo(Photo);
