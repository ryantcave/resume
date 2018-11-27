import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BackupIcon from '@material-ui/icons/Backup';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 15,
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Under Construction
                    </Typography>
                    <Button href="https://www.linkedin.com/in/ryan-cave/" variant="contained" color="secondary" className={classes.menuButton}>
                        <Typography variant="button" color="inherit" align="left" className={classes.grow}>
                            LinkedIn
                        </Typography>
                    </Button>
                    <Button href="https://github.com/ryantcave/" variant="contained" color="secondary" className={classes.button}>
                        <Typography variant="button" color="inherit" align="left" className={classes.grow}>
                                Github
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);