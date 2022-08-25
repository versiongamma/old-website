import React from "react";

import { ImgurPhoto } from "../types";

const ImgurPhotoComponent = ({
  link,
  description,
  width,
  height,
}: ImgurPhoto) => {
  return (
    <>
      <img
        className="image"
        src={link.replace(".jpg", "l.jpg")}
        alt={description ?? "no description"}
        width={500}
        height={(500 * height) / width}
      />
    </>
  );
};

export default React.memo(ImgurPhotoComponent);
