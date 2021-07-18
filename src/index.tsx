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

import { lightTheme, darkTheme } from './themes';
import TopNavigation from './Components/Navigation/TopNavigation';
import createCookie from './functions/createCookie';

import { Settings } from './types';
import useWindowSize from './hooks/useWindowSize';

//@ts-ignore
import { Scrollbars } from 'react-custom-scrollbars';

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
    let updatedSettings: Settings = { darkMode: false, section: 0 };
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
  const [topBarHeight, setTopBarHeight] = useState(0);
  const windowSize = useWindowSize();

  const sections = [<About />, <GameDev />, <Software />, <Photos />, <Videos />];

  useEffect(() => {
    setVisible(true);
    update();
  }, [])

  // Have to wait 1ms to have the class names load, otherwise shit hits the fan real fast
  useEffect(() => {
    const timer = setTimeout(() => {
      setTopBarHeight(document.getElementsByClassName('logo')[0].clientHeight);
    }, 1);

    return () => clearTimeout(timer);
  }, []);


  return (
    <ThemeProvider theme={settings.darkMode === false ? lightTheme : darkTheme}>
      <CssBaseline>
        <TopNavigation update={update} settings={settings} />
        <Fade in={visible}>
          <>
            <Box
              style={{
                overflow: 'hidden',
                paddingTop: topBarHeight,
                height: windowSize.width >= 960 ? windowSize.height - 56 : windowSize.height
              }}>
              <Scrollbars>
                { /** If first section, display background image */
                settings.section === 0 ?
                  <img src='https://i.imgur.com/Iwv6Ly5.jpg'
                    width={windowSize.width}
                    height={windowSize.width >= 960 ? windowSize.height - 56 - topBarHeight : windowSize.height - 56}
                    alt='bg'
                    style={{ objectFit: 'cover', position: 'absolute', zIndex: -1 }}
                  /> : null }

                {/** Display the selected section */}
                {sections[settings.section]}         
            </Scrollbars>
            </Box>
            <Hidden smDown>
              <BottomNavigation
                showLabels
                value={settings.section}
                onChange={(event, value) => {
                  setSettings(prev => ({ ...prev, section: value }));
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
          </>
        </Fade>
      </CssBaseline>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
