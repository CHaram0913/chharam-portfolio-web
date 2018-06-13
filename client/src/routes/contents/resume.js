import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { ResumeRouteStyle } from './../../styles';

/**
 * Root
 */
class Timeline extends Component {
    /**
     * @return {jsx}
     */
    render() {
        return (
            <Fragment>
                <Paper>
                    <Typography variant='display1'>
                        Hello Resume
                    </Typography>
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles (ResumeRouteStyle) (Timeline);