//paste here your theme]
import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#3F616D',
        },
        secondary: {
            main: '#A272CC',
        },
        warning: {
            main: '#E47C8C',
        },
    },
};

const theme=createTheme(themeOptions);
export default theme