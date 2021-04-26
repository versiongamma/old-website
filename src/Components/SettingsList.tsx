import { Switch,  List, ListItem, ListItemText, ListItemSecondaryAction, ListItemIcon} from '@material-ui/core';
import { useState } from 'react';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import createCookie from '../functions/createCookie';

import { Settings } from '../types';

type Props = {
  settings: Settings
  update: () => void
}
 
const SettingsList: React.FunctionComponent<Props> = (props) => {

  const [settings, setSettings] = useState(props.settings);

  const themeSelectorChange = (event: any) => {
    setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }));
    createCookie('darkMode', (!settings.darkMode).toString(), 365)
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

export default SettingsList;