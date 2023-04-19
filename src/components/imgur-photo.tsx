import React from "react";

import { ImgurAPIPhoto } from "../types";

const ImgurPhotoComponent = ({
  link,
  description,
  width,
  height,
}: ImgurAPIPhoto) => {
  return (
    <>
      <img
        className="image"
        src={link.replace(".jpg", "l.jpg")}
        alt={description ?? ""}
        width={500}
        height={(500 * height) / width}
      />
    </>
  );
};

export default React.memo(ImgurPhotoComponent);
