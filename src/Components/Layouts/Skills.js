import React from "react";
import banner from "../../img/skills_small.png";
import Grid from "@material-ui/core/Grid/Grid";

const styles = theme => ({
    imgContainer: {
        height: 600,
        backgroundImage: `url(${banner})`
    }
});

export default props =>
    <div>
        <Grid container justify="center" alignItems="center">
            <img src={banner} />
        </Grid>
    </div>

