//paste here your theme]
import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
        type: 'dark',
        mode: 'dark',
        primary: {
            main: '#3F616D',
        },
        secondary: {
            main: '#3F616D',
        },
        warning: {
            main: '#3F616D',
        },
    },
};

const theme=createTheme(themeOptions);
export default theme