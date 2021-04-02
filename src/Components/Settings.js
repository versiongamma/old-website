import { Switch,  List, ListItem, ListItemText, ListItemSecondaryAction, ListItemIcon} from '@material-ui/core';
import { useState } from 'react';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import createCookie from '../functions/createCookie';

export default function Settings(props) {

  const [settings, setSettings] = useState(props.settings);

  const themeSelectorChange = (event) => {
    setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }));
    createCookie('darkMode', !settings.darkMode, 365)
    props.update();
  }

  return (
    <List style={{ padding: '1vw 2vw 0 2vw', width: document.body.scrollWidth >= 600 ? 400 : '100vw' }}>
      <ListItem button onClick={themeSelectorChange}>
        <ListItemIcon><Brightness4Icon /></ListItemIcon>
        <ListItemText primary='Dark Mode' />
        <ListItemSecondaryAction>
          <Switch
            color='primary'
            checked={settings.darkMode}
            onChange={themeSelectorChange}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}