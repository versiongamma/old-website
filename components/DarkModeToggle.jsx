import { IconButton } from '@material-ui/core';
import { useContext } from 'react';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import useWindowSize from './../hooks/useWindowSize';
import { DarkMode } from './../pages/_app';

const DarkModeToggle = (props) => {
  const windowSize = useWindowSize();
  const [darkMode, setDarkMode] = useContext(DarkMode);


  return (
    <IconButton 
      style={{position: 'absolute', bottom: 10, left: 10, zIndex: 1}}
      onClick={() => setDarkMode(!darkMode)}
      
    >
      {darkMode ?
        <Brightness7Icon style={{ fill: 'white' }} /> :
        <Brightness4Icon style={{ fill: 'black' }} />}
    </IconButton>
  );
}

export default DarkModeToggle;