import React from 'react';
import { render } from 'react-dom';
import App from "./Components/App";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#131313',
            dark: '#131313',

        },
        background: {
            default: '#131313',
        }
    },
});

render(<MuiThemeProvider theme={theme}><CssBaseline /><App /></MuiThemeProvider>, document.getElementById("root"));
