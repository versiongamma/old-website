import Image from "next/image";
import React from "react";

import { ImgurPhoto } from "../types";

const PhotoElement = ({ link, description, width, height }: ImgurPhoto) => {
  return (
    <>
      <Image
        className="image"
        src={link.replace(".jpg", "l.jpg")}
        alt={description ?? "no description"}
        width={500}
        height={(500 * height) / width}
      />
    </>
  );
};

export default React.memo(PhotoElement);
