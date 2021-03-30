import { Drawer, Switch, FormGroup, FormControlLabel, Fade, Divider, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
import { Fragment, useEffect, useState } from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function Settings(props) {

  const [settings, setSettings] = useState(props.settings);

  const themeSelectorChange = (event) => {
    setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }));
    document.cookie = "darkMode = " + !settings.darkMode;
    props.update();
  }

  return (
    <Fragment>
      <div style={{ textAlign: 'right', padding: '.5vw'}}>
        <IconButton onClick={props.closeDrawer}><ArrowBackIcon /></IconButton>
      </div>

      <Divider />

      <FormGroup style={{ padding: '1vw 2vw 0 2vw' }}>
        <FormControlLabel
          control={
            <Switch
              color='primary'
              checked={settings.darkMode}
              onChange={themeSelectorChange}
            />}
          label='Dark Mode'
        />
      </FormGroup>
    </Fragment>
  );
}