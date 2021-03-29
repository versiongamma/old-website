import { BottomNavigation, BottomNavigationAction, Box, Container, CssBaseline, Switch, ThemeProvider, FormGroup, FormControlLabel, Typography} from '@material-ui/core';
import { useState } from 'react';

export default function Settings(props) {
  const [themeSelector, setThemeSelector] = useState(props.settings.themeSelector);

  const themeSelectorChange = (event) => {
    setThemeSelector(prev => !prev);
    props.updateTheme();
  }

  return (
    <Container ml style={{paddingTop: '2vh', textAlign: 'center'}}>
      <FormGroup style={{paddingTop: '5vh'}}>
        <FormControlLabel 
          control={
            <Switch 
              color='primary'
              checked={themeSelector}
              onChange={themeSelectorChange}
            />}
          label='Dark Mode'
        />
      
      </FormGroup>
    </Container>
  );
}