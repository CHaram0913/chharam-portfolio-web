import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import { PortfolioRouteStyle } from './../../styles';

import { PortfolioSlider, PortfolioSidebar } from './../../containers';

/**
 * Root
 */
class Portfolio extends Component {
    /**
     * @return {jsx}
     */
    render() {
        const { classes } = this.props; 

        return (
            <Paper className={classes.root}>
                <Grid container alignItems='center' justify='center' className={classes.container} zeroMinWidth>
                    <Grid item xs={2} className={classes.grid_item_sidebar} zeroMinWidth>
                        <PortfolioSidebar />
                    </Grid>

                    <Grid item xs={10} className={classes.grid_item_slider} zeroMinWidth>
                        <PortfolioSlider />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles (PortfolioRouteStyle) (Portfolio);