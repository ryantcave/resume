import React from "react";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button/Button";


export default props =>
    <div>
        <Typography align="center" variant="overline">
            Hi, my name is Ryan Cave. I am an undergraduate Computer Science major at Baylor University.
        </Typography>
        <Typography align="center" variant="overline" gutterBottom="true">
            This website is a personal portfolio project implementing React.js, Material-UI, and Parcel.
        </Typography>

        <Button color="secondary" variant="contained" align="center" fullWidth='true' disabled>
            Under Construction
        </Button>
    </div>
