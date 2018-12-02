import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    input: {
        display: 'none',
    },
    container: {
        height: 1000,
        backgroundColor: 'secondary',
    }
});

export default props =>
    <div style={styles.container}>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            Java
        </Button>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            C++
        </Button>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            C
        </Button>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            JavaScript
        </Button>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            React.js
        </Button>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            JUnit
        </Button>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            SQL
        </Button>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            Git
        </Button>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            ElasticSearch
        </Button>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            Eclipse / IntelliJ / VisualStudio
        </Button>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            Microsoft Office Suite
        </Button>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            Photoshop CS6
        </Button>
        <Button variant="contained" align="center" fullWidth="true" disableRipple="true">
            Adobe Premiere Pro
        </Button>
    </div>