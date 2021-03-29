import { Container, Switch, FormGroup, FormControlLabel, Fade } from '@material-ui/core';
import { useEffect, useState } from 'react';

export default function Settings(props) {
  const [themeSelector, setThemeSelector] = useState(props.settings.themeSelector);
  const [visible, setVisible] = useState(false);

  const themeSelectorChange = (event) => {
    setThemeSelector(prev => !prev);
    props.updateTheme();
  }

  useEffect(() => {
    setVisible(true)
  }, []);

  return (
    <Fade in={visible} mountOnEnter unmountOnExit>
      <Container ml style={{ textAlign: 'center' }}>
        <FormGroup style={{ paddingTop: '2vh' }}>
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
    </Fade>
  );
}