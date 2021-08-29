import { IconButton } from '@material-ui/core';
import { useState } from 'react';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import useWindowSize from './../hooks/useWindowSize';

const DarkModeToggle = (props) => {
  const windowSize = useWindowSize();
  const [darkMode, setDarkMode] = useState(true);


  return (
    <IconButton style={{position: 'absolute', bottom: 10, left: 10}}>
      {darkMode ?
        <Brightness7Icon style={{ fill: windowSize.width >= 960 ? 'white' : '' }} /> :
        <Brightness4Icon style={{ fill: windowSize.width >= 960 ? 'white' : '' }} />}
    </IconButton>
  );
}

export default DarkModeToggle;