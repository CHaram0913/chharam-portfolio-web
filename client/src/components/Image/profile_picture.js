import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { ProfilePictureStyle } from './../../styles';

class ProfilePicture extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root} />
        );
    }
}

export default withStyles (ProfilePictureStyle) (ProfilePicture);