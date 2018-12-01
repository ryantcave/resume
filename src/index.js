import React from 'react';
import { render } from 'react-dom';
import App from "./Components/App";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#181712',
        },
        secondary: {
            light: '#B0ABA0',
            main: '#6ABED8',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#F0F0F0',
        },
        background: {
            background: '#6ABED8',

        }
    },
});

render(<MuiThemeProvider theme={theme}><CssBaseline /><App /></MuiThemeProvider>, document.getElementById("root"));
