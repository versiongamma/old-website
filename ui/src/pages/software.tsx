import { Typography } from "@mui/material";

import TopNavBar from "../components/banner";
import useWindowSize from "../hooks/useWindowSize";

const Software = () => {
  return (
    <>
      <Typography
        variant="h1"
        style={{
          textAlign: "center",
          paddingTop: "15%",
          fontFamily: "Josefin Sans",
        }}
      >
        Coming Soon...
      </Typography>
    </>
  );
};

export default Software;
