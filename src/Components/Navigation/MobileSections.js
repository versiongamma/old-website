import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import lightTheme from '../../themes/lightTheme';

import { useState } from 'react';

import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import GamesIcon from '@material-ui/icons/Games';
import InfoIcon from '@material-ui/icons/Info';
import ComputerIcon from '@material-ui/icons/Computer';
import createCookie from '../../functions/createCookie';

/**
 * Compenent that handles the section navigation when in mobile view
 * @param {*} props closeDrawer: Function that closes the drawer, settings: The application settings
 * @returns 
 */
export default function MobileSections(props) {
  const [settings, setSettings] = useState(props.settings);

  const icons = [<InfoIcon />, <GamesIcon />, <ComputerIcon />, <PhotoIcon />, <VideocamIcon /> ]
  const names = ['About', 'Game Design', 'Software Development', 'Photography', 'Videography']

  const handleAbout = (event) => handleClick(event, 0);
  const handleGames = (event) => handleClick(event, 1);
  const handleSoftware = (event) => handleClick(event, 2);
  const handlePhotos = (event) => handleClick(event, 3);
  const handleVideos = (event) => handleClick(event, 4);

  const handleClick = (event, i) => {
    props.closeDrawer();
    setSettings(prev => ({ ...prev, section: i }));
    createCookie('section', i, 0);
    props.update();
  }

  return (
    <List>
      {icons.map((icon, i) => (
        <ListItem button key={i}
          style={{ backgroundColor: settings.section === i ? lightTheme.palette.primary.main : '' }} 
          onClick={[handleAbout, handleGames, handleSoftware, handlePhotos, handleVideos][i]}>
        <ListItemIcon style={{ color: settings.section === i ? 'white' : '' }}>{icon}</ListItemIcon>
        <ListItemText style={{ color: settings.section === i ? 'white' : '' }} primary={names[i]} />
      </ListItem>
      ))}
    </List>
  );
}