import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const pallete = {
  primary: {
    main: '#9448e7',
  },
  secondary: {
    main: '#303030',
  },
  error: {
    main: red.A400,
  },
}

const typography = {
  fontFamily: "Assistant"
}

export const lightTheme = createMuiTheme({
  typography: typography,
  palette: pallete
});

export const darkTheme = createMuiTheme({
  typography: typography,
  palette: {...pallete, type: 'dark'}

});
