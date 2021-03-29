import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const darkTheme = createMuiTheme({
  typography: {
    fontFamily: "Assistant"
  },

  palette: {
    type: 'dark',
    primary: {
      main: '#9448e7',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  }
});

export default darkTheme;