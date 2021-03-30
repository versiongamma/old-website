import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

// Creating default settings if they do not exist yet
if (document.cookie.split('; ').find(row => row.startsWith('darkMode')) === undefined) { document.cookie = 'darkMode = false' }
if (document.cookie.split('; ').find(row => row.startsWith('previouslySignedIn')) === undefined) { document.cookie = 'previouslySignedIn = false' }

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
