import { AppBar, Toolbar, IconButton, Grid, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Fragment, useState } from 'react';
import LoginLogout from './LoginLogout';

import Settings from './Settings';

export default function TopNavigation(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => { setDrawerOpen(false); }

  return (
    <Fragment>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            color='inherit'
            edge='start'
            onClick={() => setDrawerOpen(prev => !prev)}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justify='center' style={{paddingRight: '.5vw'}}>
            <img
              src='https://i.imgur.com/u5vk60X.jpg'
              alt='logo'
              style={{ width: '15vw', padding: '0.5vh'}}
            />
          </Grid>
          <LoginLogout />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Settings update={props.update} settings={props.settings} closeDrawer={closeDrawer} />
      </Drawer>
    </Fragment>
  );
}