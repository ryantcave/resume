import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import ava from '../../img/avatar.png';
import banner from '../../img/banner.jpg'
import Typography from "@material-ui/core/Typography/Typography";

const styles = {
    avatar: {
        margin: 25,
        width: 125,
        height: 125,
    },
    container: {
        height: 250,
        backgroundImage: `url(${banner})`
    }
};

function ImageAvatars(props) {
    const { classes } = props;
    return (
        <div style={styles.container}>
        <Grid container justify="center" alignItems="center">
            <Avatar alt="RyanCave" src={ava} className={classes.avatar} />
        </Grid>
            <Typography align="center" variant="overline" gutterBottom="true">
                Hi, my name is Ryan Cave. I am an undergraduate Computer Science major at Baylor University graduating in May 2019. <br/>
                This website is a personal portfolio project implementing React.js, Material-UI, and Parcel. <br />
            </Typography>
        </div>
    );
}

export default withStyles(styles)(ImageAvatars);