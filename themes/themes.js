import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

export const pallette = {
  primary: {
    main: "#9448e7",
  },
  secondary: {
    main: "#303030",
  },
  error: {
    main: red.A400,
  },
};

const typography = {
  fontFamily: "Assistant",
};

export const theme = createTheme({
  typography: typography,
  palette: { ...pallette, type: "dark" },
});
