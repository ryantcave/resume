import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Skills from './Skills';
import ConstructionBar from './ConstructionBar';
import WorkExp from './WorkExp';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
});

class ScrollableTabsButtonAuto extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        centered
                    >
                        <Tab label="Skills" />
                        <Tab label="Work Experience" />
                        <Tab label="About Me" />
                        <Tab label="Contact" />
                    </Tabs>
                </AppBar>
                {value === 0 && <Skills />}
                {value === 1 && <WorkExp />}
                {value === 2 && <ConstructionBar />}
                {value === 3 && <ConstructionBar />}
            </div>
        );
    }
}

ScrollableTabsButtonAuto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);