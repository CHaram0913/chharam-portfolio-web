import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { RootRouteStyle } from './../../styles';

/**
 * Root
 */
class Root extends React.Component {
    /**
     * @return {jsx}
     */
    render() {
        return (
            <Fragment>
                <Paper>
                    <Typography variant='display1'>
                        Hello World
                    </Typography>
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles (RootRouteStyle) (Root);
