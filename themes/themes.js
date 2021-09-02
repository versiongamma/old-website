import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

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

export const lightTheme = createTheme({
  typography: typography,
  palette: pallete
  
});

export const darkTheme = createTheme({
  typography: typography,
  palette: {...pallete, type: 'dark'},
});
