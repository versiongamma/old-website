import { Switch,  List, ListItem, ListItemText, ListItemSecondaryAction, ListItemIcon, Hidden } from '@material-ui/core';
import { useState } from 'react';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
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
    <List style={{ padding: windowSize.width < 960 ? '1vw 2vw 0 2vw' : 0, width: windowSize.width >= 960 ? 55 : 400}}>
      <ListItem button onClick={themeSelectorChange}>
        <ListItemIcon>
            {settings.darkMode ? 
              <Brightness7Icon style={{fill: windowSize.width >= 960 ? 'white' : ''}}/> :
              <Brightness4Icon style={{fill: windowSize.width >= 960 ? 'white' : ''}}/> }
        </ListItemIcon>
        <ListItemText primary={windowSize.width < 960 ? 'Dark Mode' : ''} />
        <ListItemSecondaryAction>
          <Hidden mdUp>
          <Switch
            color={windowSize.width < 960 ? 'primary' : 'secondary'}
            checked={settings.darkMode}
            onChange={themeSelectorChange}
          />
          </Hidden>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default DarkModeToggle;