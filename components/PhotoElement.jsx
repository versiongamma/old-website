import { Box, Grow } from "@material-ui/core";
import { useState } from "react";
import useWindowSize from '../hooks/useWindowSize';

import Image from 'next/image';

const PhotoElement = (props) => {
  return (
    <>
      <Image
        className='image'
        src={props.link.replace('.jpg', 'l.jpg')}
        alt={props.description}
        width={500}
        height={500 * props.height / props.width}
      />
    </>
  );
}

export default PhotoElement;