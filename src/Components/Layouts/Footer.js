import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import signature from '../../img/signature.png'

const styles = {
    footer: {
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",

    },
    container: {
        height: 43,
        width: 183,
        backgroundImage: `url(${signature})`,
    }
};

function ImageAvatars() {
    return (
        <div style={styles.footer}>
            <Grid container justify="center" alignItems="center">
                <div style={styles.container}>
                </div>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(ImageAvatars);