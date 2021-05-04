import { Switch,  List, ListItem, ListItemText, ListItemSecondaryAction, ListItemIcon } from '@material-ui/core';
import { useState } from 'react';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import createCookie from '../functions/createCookie';

import { Settings } from '../types';
import useWindowSize from '../hooks/useWindowSize';

type Props = {
  settings: Settings
  update: () => void
}
 
const DarkModeToggle: React.FunctionComponent<Props> = (props) => {

  const [settings, setSettings] = useState(props.settings);
  const windowSize = useWindowSize();

  const themeSelectorChange = (event: any) => {
    setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }));
    createCookie('darkMode', (!settings.darkMode).toString(), 365)
    props.update();
  }

  return (
    <List style={{ padding: windowSize.width < 960 ? '1vw 2vw 0 2vw' : 0, width: windowSize.width >= 960 ? 'auto' : 400}}>
      <ListItem button onClick={themeSelectorChange}>
        <ListItemIcon><Brightness4Icon style={{fill: windowSize.width >= 960 ? 'white' : ''}}/></ListItemIcon>
        <ListItemText primary={windowSize.width < 960 ? 'Dark Mode' : ''} />
        <ListItemSecondaryAction>
          <Switch
            color={windowSize.width < 960 ? 'primary' : 'secondary'}
            checked={settings.darkMode}
            onChange={themeSelectorChange}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default DarkModeToggle;