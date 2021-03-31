import { AppBar, Toolbar, IconButton, Grid, Hidden, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Divider, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Fragment, useState } from 'react';
import LoginLogout from './LoginLogout';

import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import GamesIcon from '@material-ui/icons/Games';
import InfoIcon from '@material-ui/icons/Info';
import ComputerIcon from '@material-ui/icons/Computer';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Settings from './Settings';

import lightTheme from './../themes/lightTheme';

export default function TopNavigation(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [settings, setSettings] = useState(props.settings);

  const closeDrawer = () => { setDrawerOpen(false); }

  // TODO: Move all of this junk to a seperate file and make it not garbage but it's 2am and I'm tired I just want it to work
  const handleClickAbout = (event) => {
    // I've got this function may as well use it
    closeDrawer();
    setSettings(prev => ({...prev, section: 0}));
    document.cookie = 'section = 0';
    props.update();
  }

  const handleClickGames = (event) => {
    closeDrawer();
    setSettings(prev => ({...prev, section: 1}));
    document.cookie = 'section = 1'
    props.update();
    }

  const handleClickSoftware = (event) => {
    closeDrawer();
    setSettings(prev => ({...prev, section: 2}));
    document.cookie = 'section = 2'
    props.update();
  }

  const handleClickPhotos = (event) => {
    closeDrawer();
    setSettings(prev => ({...prev, section: 3}));
    document.cookie = 'section = 3'
    props.update();
  }

  const handleClickVideos = (event) => {
    closeDrawer();
    setSettings(prev => ({...prev, section: 4}));
    document.cookie = 'section = 4'
    props.update();
  }

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
          <Hidden mdUp>
            <Typography variant='h5' style={{fontFamily: 'Josefin Sans', paddingTop: '1vh'}}>{['About', 'Game Design', 'Software Development', 'Photography', 'Videography'][settings.section]}</Typography>
          </Hidden>
          <Hidden smDown>
          <Grid container justify='center' style={{paddingRight: '.5vw'}}>
            <img
              src='https://i.imgur.com/u5vk60X.jpg'
              alt='logo'
              style={{ width: '15vw', padding: '0.5vh'}}
            />
          </Grid>
          {/**<LoginLogout />*/}
          </Hidden>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor='left'
        swipeAreaWidth={130}
        open={drawerOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
      >
        <div style={{ textAlign: 'right', padding: '.5vw'}}>
          <IconButton onClick={closeDrawer}><ArrowBackIcon /></IconButton>
        </div>

        {/** Navigation in the drawer for mobile */}
        <Hidden mdUp>
          <List>
            <ListItem button style={{backgroundColor: settings.section === 0 ? lightTheme.palette.primary.main : ''}} onClick={handleClickAbout}>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary='About' />
            </ListItem>
            <ListItem button style={{backgroundColor: settings.section === 1 ? lightTheme.palette.primary.main : ''}} onClick={handleClickGames}>
              <ListItemIcon><GamesIcon /></ListItemIcon>
              <ListItemText primary='Game Design' />
            </ListItem>
            <ListItem button style={{backgroundColor: settings.section === 2 ? lightTheme.palette.primary.main : ''}} onClick={handleClickSoftware}>
              <ListItemIcon><ComputerIcon /></ListItemIcon>
              <ListItemText primary='Software Development' />
            </ListItem>
            <ListItem button style={{backgroundColor: settings.section === 3 ? lightTheme.palette.primary.main : ''}} onClick={handleClickPhotos}>
              <ListItemIcon><PhotoIcon /></ListItemIcon>
              <ListItemText primary='Photography' />
            </ListItem>
            <ListItem button style={{backgroundColor: settings.section === 4 ? lightTheme.palette.primary.main : ''}} onClick={handleClickVideos}>
              <ListItemIcon><VideocamIcon /></ListItemIcon>
              <ListItemText primary='Videography' />
            </ListItem>
          </List>
        </Hidden>

        {/** Settings implementation into drawer */}
        <Divider />
        <Settings update={props.update} settings={settings} />
        <Hidden mdUp>
          <Divider />
          {/**<LoginLogout style={{paddingTop: '5vh'}}/>*/}
        </Hidden>
      </SwipeableDrawer>
    </Fragment>
  );
}