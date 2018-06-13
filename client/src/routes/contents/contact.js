import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { ContactRouteStyle } from './../../styles';

/**
 * Root
 */
class Contact extends Component {
    /**
     * @return {jsx}
     */
    render() {
        return (
            <Fragment>
                <Paper>
                    <Typography variant='display1'>
                        Hello Contact
                    </Typography>
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles (ContactRouteStyle) (Contact);