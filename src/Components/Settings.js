import { Container, Switch, FormGroup, FormControlLabel, Fade } from '@material-ui/core';
import { useEffect, useState } from 'react';

export default function Settings(props) {
  const [settings, setSettings] = useState({darkMode: false})

  const themeSelectorChange = () => {
    setSettings(prev => ({...prev, darkMode: !prev.darkMode}));
  }

  return (
    <FormGroup style={{ padding: '2vh' }}>
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
  );
}