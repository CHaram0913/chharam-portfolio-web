import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { ResumeRouteStyle } from './../../styles';

import CONFIG from './../../config';

/**
 * Root
 */
class Timeline extends Component {
    /**
     * @return {jsx}
     */
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Paper className={classes.root}>
                    <img 
                        src={`http://${CONFIG.server.ip}:${CONFIG.server.port}/img/resume/CV.png`} 
                        className={classes.CV_image}
                        alt='Haram Choi Resume'
                        useMap='#CV-map' 
                    />
                    <map name='CV-map'>
                        <area alt='college-seciton' shape='rect' coords={`${'0px'}, ${'0px'}, ${'150px'}, ${'150px'}`} style={{ display: 'block', backgroundColor: 'black' }} onMouseEnter={() => console.log('mouse enter')}/>
                    </map>
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles (ResumeRouteStyle) (Timeline);