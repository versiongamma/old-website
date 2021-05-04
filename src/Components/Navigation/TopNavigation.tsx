import { AppBar, Toolbar, IconButton, Grid, Hidden, Drawer, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useState } from 'react';

import MobileSections from './MobileSections';

import { Settings } from '../../types';
import DarkModeToggle from '../DarkModeToggle';

type Props = {
  settings: Settings,
  update: () => void
}

const TopNavigation: React.FunctionComponent<Props> = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => { setDrawerOpen(false); }

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>

          {/** Left corner elements */}

          <Hidden mdUp>
            <IconButton
              color='inherit'
              edge='start'
              onClick={() => setDrawerOpen(prev => !prev)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdUp>
            <Typography variant='h6' style={{ fontFamily: 'Josefin Sans', paddingTop: '1vh' }}>{['VERSION GAMMA', 'GAME DESIGN', 'SOFTWARE DEVELOPMENT', 'PHOTOGRAPHY', 'VIDEOGRAPHY'][props.settings.section]}</Typography>
          </Hidden>

          {/** Center elements */}

          <Hidden smDown>
            <Grid container justify='center' style={{ paddingRight: '.5vw' }}>
              <img
                src='https://i.imgur.com/u5vk60X.jpg'
                alt='logo'
                style={{ width: '15vw', padding: '0.5vh' }}
              />
            </Grid>
          </Hidden>

          {/** Right corner elements */}

          <Hidden smDown>
            <div style={{position: 'absolute', right: 0}}>
              <DarkModeToggle settings={props.settings} update={props.update} />
            </div>
          </Hidden>
          <Hidden mdUp>
            <img src='https://i.imgur.com/k9iE2gH.jpg'
              alt='logo'
              style={{ height: 40, position: 'absolute', right: '3vw' }} />
          </Hidden>


        </Toolbar>
      </AppBar>

      {/** Drawer */}

      <Hidden mdUp>
        <Drawer
          anchor='left'
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <div style={{ textAlign: 'right', padding: '0 5vw 0 0' }}>
            <IconButton onClick={closeDrawer}><ArrowBackIcon /></IconButton>
          </div>
          <MobileSections closeDrawer={closeDrawer} settings={props.settings} update={props.update} />
        </Drawer>
      </Hidden>
    </>
  );
}

export default TopNavigation