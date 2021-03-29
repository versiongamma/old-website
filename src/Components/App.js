import { BottomNavigation, BottomNavigationAction, Box, CssBaseline, ThemeProvider} from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import GamesIcon from '@material-ui/icons/Games';
import InfoIcon from '@material-ui/icons/Info';
import ComputerIcon from '@material-ui/icons/Computer';
import SettingsIcon from '@material-ui/icons/Settings';
import { useState } from 'react';

import Photos from './Sections/Photos';
import Settings from './Sections/Settings';

import lightTheme from './../themes/lightTheme';
import darkTheme from './../themes/darkTheme';
 
export default function App() {
  const updateTheme = () => {
    setTheme(prev => prev == 'lightTheme' ? 'darkTheme' : 'lightTheme');
    setSettings(prev => ({...prev, themeSelector: !prev.themeSelector}))
  }

  const [settings, setSettings] = useState({
    themeSelector: false
  });
  const [activeSection, setActiveSection] = useState(0); 
  const [theme, setTheme] = useState('lightTheme');
  const sections = [<br />, <br />, <br />, <Photos />, <br />, <Settings updateTheme={updateTheme} settings={settings}/>];

  return (
    <ThemeProvider theme={theme == 'lightTheme' ? lightTheme : darkTheme}>
      <CssBaseline>
        <Box>
          {sections[activeSection]}
          <BottomNavigation 
            showLabels 
            value={activeSection}
            onChange={(event, value) => {setActiveSection(value)}}
            style={{width: '100%', position: 'fixed', bottom: 0, backgroundColor: theme == 'darkTheme' ? '#303030' : '#fff'}}
          >
            <BottomNavigationAction icon={<InfoIcon />} label="About" />
            <BottomNavigationAction icon={<GamesIcon />} label="Game Design" />
            <BottomNavigationAction icon={<ComputerIcon />} label="Software Development" />
            <BottomNavigationAction icon={<PhotoIcon />} label="Photography" />
            <BottomNavigationAction icon={<VideocamIcon />} label="Videography" />
            <BottomNavigationAction icon={<SettingsIcon />} label="Settings" />
          </BottomNavigation>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}


