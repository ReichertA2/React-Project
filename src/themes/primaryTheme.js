//paste here your theme]
import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#3F616D",
    },
    secondary: {
      main: "#3F616D",
      root: {
        padding: "0px",
      },
    },
    warning: {
      main: "#3F616D",
    },
  },
  styleOverrides: {
    MuiBox: {
      root: {
        padding: "0px",
      },
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
