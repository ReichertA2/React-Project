//paste here your theme]
import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
        type: 'dark',
        mode: 'dark',
        primary: {
            main: '#000014',
        },
        secondary: {
            main: '#000014',
        },
        warning: {
            main: '#000014',
        },
    },
};

const theme=createTheme(themeOptions);
export default theme