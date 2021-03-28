import { BottomNavigation, BottomNavigationAction, Box, Typography} from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import GamesIcon from '@material-ui/icons/Games';
import InfoIcon from '@material-ui/icons/Info';
import ComputerIcon from '@material-ui/icons/Computer';
import { useState } from 'react';

import Photos from './Sections/Photos';

 
export default function App() {
  const [activeSection, setActiveSection] = useState(3); 
  const sections = [<br />, <br />, <br />, <Photos />, <br />];
  return (
    <Box>
      {sections[activeSection]}
      <BottomNavigation 
        showLabels 
        value={activeSection}
        onChange={(event, value) => {setActiveSection(value)}}
        style={{width: '100%', position: 'fixed', bottom: 0}}
      >
        <BottomNavigationAction icon={<InfoIcon />} label="About" />
        <BottomNavigationAction icon={<GamesIcon />} label="Game Design" />
        <BottomNavigationAction icon={<ComputerIcon />} label="Software Development" />
        <BottomNavigationAction icon={<PhotoIcon />} label="Photography" />
        <BottomNavigationAction icon={<VideocamIcon />}label="Videography" />
      </BottomNavigation>
    </Box>
  );
}


