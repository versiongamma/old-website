import { BottomNavigation, BottomNavigationAction, Box, CssBaseline, ThemeProvider, AppBar, Toolbar, Fade } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import GamesIcon from '@material-ui/icons/Games';
import InfoIcon from '@material-ui/icons/Info';
import ComputerIcon from '@material-ui/icons/Computer';
import SettingsIcon from '@material-ui/icons/Settings';
import { useEffect, useState } from 'react';

import About from './Sections/About';
import GameDev from './Sections/GameDev';
import Software from './Sections/Software';
import Photos from './Sections/Photos';
import Videos from './Sections/Videos';
import Settings from './Sections/Settings';


import lightTheme from './../themes/lightTheme';
import darkTheme from './../themes/darkTheme';

export default function App() {
  const updateTheme = () => {
    setTheme(prev => prev === 'lightTheme' ? 'darkTheme' : 'lightTheme');
    setSettings(prev => ({ ...prev, themeSelector: !prev.themeSelector }))
  }

  const [settings, setSettings] = useState({
    themeSelector: false
  });

  const [activeSection, setActiveSection] = useState(0);
  const [theme, setTheme] = useState('lightTheme');
  const [visible, setVisible] = useState(false)
  const sections = [<About />, <GameDev />, <Software />, <Photos />, <Videos />, <Settings updateTheme={updateTheme} settings={settings} />];

  useEffect(() => {
    setVisible(true);
  }, [])

  return (
    <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
      <CssBaseline>
        <Fade in={visible}>
          <AppBar position='fixed' style={{ alignItems: 'center' }}>
            <Toolbar>
              <img
                src='http://i.imgur.com/u5vk60X.jpg'
                alt='logo'
                style={{ width: '15vw', padding: '0.5vh' }} />
            </Toolbar>
          </AppBar>
        </Fade>
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
                backgroundColor: theme === 'darkTheme' ? '#303030' : '#fff' }}
            >
              <BottomNavigationAction icon={<InfoIcon />} label="About" />
              <BottomNavigationAction icon={<GamesIcon />} label="Game Design" />
              <BottomNavigationAction icon={<ComputerIcon />} label="Software Development" />
              <BottomNavigationAction icon={<PhotoIcon />} label="Photography" />
              <BottomNavigationAction icon={<VideocamIcon />} label="Videography" />
              <BottomNavigationAction icon={<SettingsIcon />} label="Settings" />
            </BottomNavigation>

          </Box>
        </Fade>
      </CssBaseline>
    </ThemeProvider>
  );
}


