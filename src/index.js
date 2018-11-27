import React from 'react';
import { render } from 'react-dom';
import App from "./Components/App";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#181712',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#B0ABA0',
            main: '#6ABED8',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#F0F0F0',
        },
        // error: will use the default color
    },
});


render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById("root"));
