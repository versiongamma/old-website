import { colorWithOpacity } from "./utils";

const color = {
  primary: "#9448e7",
};

const theme = {
  text: {
    primary: "white",
    link: { versiongamma: "#c78bf7", joyous: "#eb6122" },
  },

  button: {
    iconColor: color.primary,
    hover: colorWithOpacity("#a246e3", 0.2),
  },
};

export default theme;
