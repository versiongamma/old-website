import { AppBar, Toolbar, IconButton, Grid, Hidden, SwipeableDrawer, Divider, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';


import SettingsList from '../SettingsList';
import MobileSections from './MobileSections';

import { Settings } from '../../types';

type Props = {
  settings: Settings,
  update: () => void
}

const TopNavigation: React.FunctionComponent<Props> = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const windowSize = useWindowSize();

  const closeDrawer = () => { setDrawerOpen(false); }

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Hidden smDown>
            <IconButton
              color='inherit'
              edge='start'
              onClick={() => setDrawerOpen(prev => !prev)}
            >
            <MenuIcon />
          </IconButton>
          </Hidden>
          <Hidden mdUp>
            <Typography variant='h6' style={{ fontFamily: 'Josefin Sans', paddingTop: '1vh'}}>{['ABOUT', 'GAME DESIGN', 'SOFTWARE DEVELOPMENT', 'PHOTOGRAPHY', 'VIDEOGRAPHY'][props.settings.section]}</Typography>
          </Hidden>
          <Hidden smDown>
          <Grid container justify='center' style={{paddingRight: '.5vw'}}>
            <img
              src='https://i.imgur.com/u5vk60X.jpg'
              alt='logo'
              style={{ width: '15vw', padding: '0.5vh'}}
            />
          </Grid>
          </Hidden>
          <Hidden mdUp>
            <img src='https://i.imgur.com/k9iE2gH.jpg' 
              alt='logo'
              style={{height: 40, position: 'absolute', right: '3vw'}}/>
          </Hidden>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor='left'
        swipeAreaWidth={windowSize.width < 960 ? 150 : 0}
        open={drawerOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
      >
        <div style={{ textAlign: 'right', padding: '.5vw' }}>
          <IconButton onClick={closeDrawer}><ArrowBackIcon /></IconButton>
        </div>

        {/** Navigation in the drawer for mobile */}
        <Hidden mdUp>
          <MobileSections closeDrawer={closeDrawer} settings={props.settings} update={props.update}/>
        </Hidden>

        {/** Settings implementation into drawer */}
        <Divider />
        <SettingsList update={props.update} settings={props.settings} />
      </SwipeableDrawer>
    </>
  );
}

export default TopNavigation