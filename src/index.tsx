import ReactDOM from 'react-dom';

import { BottomNavigation, BottomNavigationAction, Box, CssBaseline, ThemeProvider, Fade, Hidden } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import GamesIcon from '@material-ui/icons/Games';
import InfoIcon from '@material-ui/icons/Info';
import ComputerIcon from '@material-ui/icons/Computer';

import { useEffect, useState } from 'react';

import About from './Components/Sections/About';
import GameDev from './Components/Sections/GameDev';
import Software from './Components/Sections/Software';
import Photos from './Components/Sections/Photos';
import Videos from './Components/Sections/Videos';

import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import TopNavigation from './Components/Navigation/TopNavigation';
import createCookie from './functions/createCookie';

import { Settings } from './types';


// Creating default settings if they do not exist yet
if (document.cookie.split('; ').find(row => row.startsWith('darkMode')) === undefined) { document.cookie = 'darkMode = false' }
if (document.cookie.split('; ').find(row => row.startsWith('section')) === undefined) { document.cookie = 'section = 0' }

const App = () => {
  // Loading previous settings from session cookie data
  const [settings, setSettings] = useState<Settings>({
    darkMode: false,
    section: 0
  })

  const update = () => {
    let updatedSettings: Settings = {darkMode: false, section: 0};
    for (const cookie of document.cookie.split('; ')) {
      // If the cookie is boolean, pass it as boolean
      if (cookie.split('=')[1] === 'true' || cookie.split('=')[1] === 'false') {
        updatedSettings[cookie.split('=')[0]] = cookie.split('=')[1] === 'true'
      // If it is a number, parse it as a number
      } else if (!Number.isNaN(cookie.split('=')[1])) {
        updatedSettings[cookie.split('=')[0]] = parseInt(cookie.split('=')[1]);
      // Else parse it as a string
      } else {
        updatedSettings[cookie.split('=')[0]] = cookie.split('=')[1];
      }
    
    } 
    setSettings(updatedSettings);
  } 

  const [visible, setVisible] = useState(false);

  const sections = [<About />, <GameDev />, <Software />, <Photos />, <Videos />];

  useEffect(() => {
    setVisible(true);
    update();
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
                createCookie('section', value, 0);
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

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
