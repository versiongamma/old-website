import { BottomNavigation, BottomNavigationAction, Box, CssBaseline, ThemeProvider, Fade } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import GamesIcon from '@material-ui/icons/Games';
import InfoIcon from '@material-ui/icons/Info';
import ComputerIcon from '@material-ui/icons/Computer';


import { useEffect, useState } from 'react';

import About from './Sections/About';
import GameDev from './Sections/GameDev';
import Software from './Sections/Software';
import Photos from './Sections/Photos';
import Videos from './Sections/Videos';


import lightTheme from './../themes/lightTheme';
import darkTheme from './../themes/darkTheme';
import TopNavigation from './TopNavigation';

export default function App() {
  // Loading previous settings from session cookie data
  const [settings, setSettings] = useState({
    darkMode: document.cookie.split('; ').find(row => row.startsWith('darkMode')).split('=')[1] === 'true'
  })

  const update = () => {
    let updatedSettings = {};
    for (const cookie of document.cookie.split('; ')) {
      updatedSettings[cookie.split('=')[0]] = cookie.split('=')[1] === 'true'; 
    } 
    setSettings(updatedSettings);
  } 

  const [activeSection, setActiveSection] = useState(0);
  const [visible, setVisible] = useState(false)
  const sections = [<About />, <GameDev />, <Software />, <Photos />, <Videos />];

  useEffect(() => {
    setVisible(true);
  }, [])

  return (
    <ThemeProvider theme={settings.darkMode === false ? lightTheme : darkTheme}>
      <CssBaseline>
      <TopNavigation update={update} settings={settings} />
        <Fade in={visible}>
          <Box style={{ paddingTop: '12vh' }}>
            {sections[activeSection]}

            <BottomNavigation
              showLabels
              value={activeSection}
              onChange={(event, value) => { setActiveSection(value) }}
              style={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                backgroundColor: settings.darkMode === true ? '#303030' : '#fff'
              }}
            >
              <BottomNavigationAction icon={<InfoIcon />} label="About" />
              <BottomNavigationAction icon={<GamesIcon />} label="Game Design" />
              <BottomNavigationAction icon={<ComputerIcon />} label="Software Development" />
              <BottomNavigationAction icon={<PhotoIcon />} label="Photography" />
              <BottomNavigationAction icon={<VideocamIcon />} label="Videography" />
            </BottomNavigation>
          </Box>
        </Fade>
      </CssBaseline>
    </ThemeProvider>
  );
}


