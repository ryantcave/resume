import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    grow: {
        flexGrow: 1,
    },
    button: {
        marginRight: 15,
    },
};

const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 32,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="overline" color="inherit" className={classes.grow}>
                        RYAN CAVE
                    </Typography>
                    <StyledButton href="https://www.linkedin.com/in/ryan-cave/" className={classes.button}>
                        <Typography variant="button">
                            LinkedIn
                        </Typography>
                    </StyledButton>
                    <StyledButton href="https://github.com/ryantcave/" className={classes.button}>
                        <Typography variant="button">
                                Github
                        </Typography>
                    </StyledButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(ButtonAppBar);