import { AppBar, Toolbar, IconButton, Grid, Hidden, SwipeableDrawer, Divider, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Fragment, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import LoginLogout from '../LoginLogout';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Settings from '../Settings';

import MobileSections from './MobileSections';


/** 
 * Component for rendering the app bar and drawer 
 */
export default function TopNavigation(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const windowSize = useWindowSize();

  const closeDrawer = () => { setDrawerOpen(false); }

  return (
    <Fragment>
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
            <Typography variant='h5' style={{ fontFamily: 'Josefin Sans', paddingTop: '1vh'}}>{['About', 'Game Design', 'Software Development', 'Photography', 'Videography'][props.settings.section]}</Typography>
          </Hidden>
          <Hidden smDown>
          <Grid container justify='center' style={{paddingRight: '.5vw'}}>
            <img
              src='https://i.imgur.com/u5vk60X.jpg'
              alt='logo'
              style={{ width: '15vw', padding: '0.5vh'}}
            />
          </Grid>
          <LoginLogout />
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
        <Settings update={props.update} settings={props.settings} />
        <Hidden mdUp>
          <Divider />
          <LoginLogout style={{paddingTop: '5vh'}}/>
        </Hidden>
      </SwipeableDrawer>
    </Fragment>
  );
}