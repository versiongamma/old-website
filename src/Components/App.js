import { BottomNavigation, BottomNavigationAction, Box, CssBaseline, ThemeProvider, Fade, Hidden } from '@material-ui/core';
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
    darkMode: document.cookie.split('; ').find(row => row.startsWith('darkMode')).split('=')[1] === 'true',
    section: parseInt(document.cookie.split('; ').find(row => row.startsWith('section')).split('=')[1])
  })

  const update = () => {
    let updatedSettings = {};
    for (const cookie of document.cookie.split('; ')) {
      // If the cookie is boolean, pass it as boolean
      if (cookie.split('=')[1] === 'true' || cookie.split('=')[1] === 'false') {
        updatedSettings[cookie.split('=')[0]] = cookie.split('=')[1] === 'true'
      // If it is a number, parse it as a number
      } else if (Number.isNaN(cookie.split('=')[1])) {
        updatedSettings[cookie.split('=')[0]] = parseInt(cookie.split('=')[1]);
      // Else parse it as a string
      } else {
        updatedSettings[cookie.split('=')[0]] = cookie.split('=')[1];
      }
    
    } 
    setSettings(updatedSettings);
  } 

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
            {sections[settings.section]}

            <Hidden smDown>
            <BottomNavigation
              showLabels
              value={settings.section}
              onChange={(event, value) => { 
                setSettings(prev => ({...prev, section: value}));
                let now = new Date(); now.setTime(now.getTime() + 24*60*60);
                document.cookie = `section = ${value};expires=${now.toUTCString()}` ;
              }}
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
            </Hidden>
          </Box>
        </Fade>
      </CssBaseline>
    </ThemeProvider>
  );
}


