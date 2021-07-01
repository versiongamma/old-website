import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { lightTheme } from '../../themes';

import { useState } from 'react';

import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import GamesIcon from '@material-ui/icons/Games';
import InfoIcon from '@material-ui/icons/Info';
import ComputerIcon from '@material-ui/icons/Computer';
import createCookie from '../../functions/createCookie';
import DarkModeToggle from '../Elements/DarkModeToggle';

type Props = {
  settings: Settings,
  closeDrawer: () => void,
  update: () => void
}

type Settings = {
  darkMode: boolean,
  section: number
}

const MobileSections: React.FunctionComponent<Props> = (props) => {
  const [settings, setSettings] = useState<Settings>(props.settings);

  const icons = [<InfoIcon />, <GamesIcon />, <ComputerIcon />, <PhotoIcon />, <VideocamIcon /> ]
  const names = ['About', 'Game Design', 'Software Development', 'Photography', 'Videography']

  const handleAbout = (event: any) => handleClick(event, 0);
  const handleGames = (event: any) => handleClick(event, 1);
  const handleSoftware = (event: any) => handleClick(event, 2);
  const handlePhotos = (event: any) => handleClick(event, 3);
  const handleVideos = (event: any) => handleClick(event, 4);

  const handleClick = (event: any, i: number) => {
    props.closeDrawer();
    setSettings(prev => ({ ...prev, section: i }));
    createCookie('section', i.toString(), 0);
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
      <Divider />
      <DarkModeToggle settings={props.settings} update={props.update} />
    </List>
  );
}

export default MobileSections;