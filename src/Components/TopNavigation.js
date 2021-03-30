import { AppBar, Toolbar, IconButton, Grid, Avatar, Drawer, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import { Fragment, useState } from 'react';

import Settings from './Settings';

export default function TopNavigation(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Fragment>
      <nav style={{ flexGrow: 1 }}>
        <AppBar position='fixed' style={{ flexGrow: 1 }}>
          <Toolbar>
            <IconButton
              color='inherit'
              edge='start'
              onClick={() => setDrawerOpen(prev => !prev)}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justify='center'>
              <img
                src='http://i.imgur.com/u5vk60X.jpg'
                alt='logo'
                style={{ width: '15vw', padding: '0.5vh' }}
              />
            </Grid>
            <IconButton edge='end'>
              <Avatar style={{ color: '#bbb', backgroundColor: "#fff" }}>
                <PersonIcon />
              </Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
      </nav>

      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
          <Settings updateTheme={props.updateTheme}/>
      </Drawer>
    </Fragment>
  );
}