import { Button, Avatar, Snackbar, Typography } from '@material-ui/core';
import React, { Fragment, useState } from "react";
import { useGoogleLogout, useGoogleLogin } from 'react-google-login';

import Alert from './Alert';

const clientID = '832619183791-r534f3obl501j6og7frtue8qrathjv76.apps.googleusercontent.com';



export default function LoginLogout(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [logoutAlert, setLogoutAlert] = useState(false);
  const [icon, setIcon] = useState();
  const [name, setName] = useState();

  /** Alert handlers */

  const handleLogoutAlertClose = (event, reason) => {
    if (reason === 'clickaway') { return; }
    setLogoutAlert(false);
  }

  const handleLoginAlertClose = (event, reason) => {
    if (reason === 'clickaway') { return; }
    setLoginAlert(false);
  }

  /** Handlers for Login API interfacing */

  const onLoginSuccess = (res) => {
    // Setting an ass ton of state
    setLoggedIn(true);
    setName(res.profileObj.name);
    // Don't alert the user if they are already signed in, i.e. it's happening on a refresh
    if (document.cookie.split('; ').find(row => row.startsWith('previouslySignedIn')).split('=')[1] === 'false') {
      setLogoutAlert(false);
      setLoginAlert(true);
    }
    setIcon(res.profileObj.imageUrl);

    document.cookie = 'previouslySignedIn = true';

    console.log(res.profileObj);
  }

  const onLogoutSuccess = (res) => {
    setLoggedIn(false);
    setLoginAlert(false);
    setLogoutAlert(true);
    setIcon('');

    document.cookie = 'previouslySignedIn = false';
  }

  const onLoginFailure = (res) => { }
  const onLogoutFailure = (res) => { }

  const { signIn } = useGoogleLogin({
    onSuccess: onLoginSuccess,
    onFailure: onLoginFailure,
    clientId: clientID,
    isSignedIn: true,
    accessType: 'offline',
    cookiePolicy: 'single_host_origin'
  })

  const { signOut } = useGoogleLogout({
    onLogoutSuccess: onLogoutSuccess,
    onFailure: onLogoutFailure,
    clientId: clientID,
    cookiePolicy: 'single_host_origin'
  })

  /** Component Rendering */

  return (
    <Fragment>
      <Button
        color='inherit'
        style={{position: document.body.scrollWidth >= 960 ? 'absolute' : '', right: 5, ...props.style}}
        endIcon={<Avatar src={icon} />}
        onClick={loggedIn ? signOut : signIn}
      >
        <Typography variant='h6' style={{fontWeight: 600}}>{loggedIn ? 'Sign Out' : 'Sign In'}</Typography>
      </Button>
      <Snackbar open={loginAlert} autoHideDuration={6000} onClose={handleLoginAlertClose} style={{bottom: '5vh'}}>
        <Alert severity='success' onClose={handleLoginAlertClose}>{`You have been signed in as: ${name}`}</Alert>
      </Snackbar>
      <Snackbar open={logoutAlert} autoHideDuration={6000} onClose={handleLogoutAlertClose} style={{bottom: '5vh'}}>
        <Alert severity='info' onClose={handleLogoutAlertClose}>You have been signed out</Alert>
      </Snackbar>
    </Fragment>

  );
}