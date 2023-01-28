import { createTheme } from "@mui/material";

export const palette = {
  primary: {
    main: "#9448e7",
  },
  secondary: {
    main: "#303030",
  },
};

const typography = {
  fontFamily: "Assistant",
};

export const theme = createTheme({
  typography: typography,
  palette: { ...palette, mode: "dark" },
});
