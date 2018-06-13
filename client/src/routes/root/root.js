import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';
import { RootRouteStyle } from './../../styles';

import CONFIG from './../../config';

/**
 * Root
 */
class Root extends Component {
    state = {
        detailActive: false
    }

    handleProfileClick = (isActive) => e => {
        if (isActive) {
            this.setState({ detailActive: false });
        } else {
            this.setState({ detailActive: true });
        }
    }

    renderProfile(classes) {
        return (
            <Fragment>
                <Typography className={classes.my_name}>
                    HARAM CHOI
                </Typography>
                <Typography className={classes.title_container}>
                    <span style={{ color: '#FFDEDE' }}>FULL STACK DEVELOPER </span>
                    <span style={{ color: '#FFFFFF' }}> / </span>
                    <span style={{ color: '#BCFFFF' }}> CHEMICAL ENGINEER  </span>
                </Typography>
                <Paper className={classes.profile_picture} onClick={this.handleProfileClick(this.state.detailActive)} />
                <Paper className={classes.detail_container} elevation={0}>
                    <Typography className={classes.detail}>
                        Welcome to my potfolio!
                    </Typography>
                    <Typography className={classes.detail}>
                        I am a <span style={{ color: '#FFDEDE' }}>web developer</span>, <span style={{ color: '#BCFFFF' }}>chemical engineer</span> and <b>enthusiastic learner</b>.
                    </Typography>
                    <Typography className={classes.detail2}>
                        I started programming after graduating Imperial College London and fell in love with it. <i><b>Click</b></i> on the image if you wish to see a brief summary about me. Navigate to <a href='http://localhost:3000/Resume' className={classes.resume_link}><i>RESUME</i></a> if you want some details.
                    </Typography>
                </Paper>
            </Fragment>
        );
    }

    renderRoot(classes) {
        if (!this.state.detailActive) {
            return (
                <Fragment>
                    {this.renderProfile(classes)}
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <Grid container alignItems='center' justify='center' className={classes.root} zeroMinWidth>
                        <Grid item xs={5} className={classes.profile} zeroMinWidth>
                            {this.renderProfile(classes)}
                        </Grid>

                        <Grid item xs={4} className={classes.summary_container_grid} zeroMinWidth>
                            <Paper className={classes.summary_container_paper}>
                                <Typography className={classes.summary_subheading}>
                                    University
                                </Typography>
                                <Typography className={classes.summary_detail}>
                                    Imperial College London
                                </Typography>
                                <Typography className={classes.summary_subheading}>
                                    University
                                </Typography>
                                <Typography className={classes.summary_detail}>
                                    Imperial College London
                                </Typography>
                                <Typography className={classes.summary_subheading}>
                                    Degree
                                </Typography>
                                <Typography className={classes.summary_detail}>
                                    Masters in Chemical Engineering (M.Eng)
                                </Typography>
                                <Typography className={classes.summary_subheading}>
                                    Language Proficiency
                                </Typography>
                                <Typography className={classes.summary_detail}>
                                    English (fluent)
                                </Typography>
                                <Typography className={classes.summary_detail}>
                                    Korean (native)
                                </Typography>
                                <Typography className={classes.summary_detail}>
                                    Japanese (conversational)
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Fragment>
            )
        }
    }
    /**
     * @return {jsx}
     */
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                {this.renderRoot(classes)}
                {/* <a href='https://github.com/CHaram0913' target='blank'>
                    <img 
                        className={classes.icon_button} 
                        alt='GitHub'
                        src={`http://${CONFIG.server.ip}:${CONFIG.server.port}/img/link_icons/GitHub.png`}
                    />
                </a>
                <a href='https://www.linkedin.com/in/haram-choi-136487b1/' target='blank'>
                    <img 
                        className={classes.icon_button} 
                        alt='Linkedin'
                        src={`http://${CONFIG.server.ip}:${CONFIG.server.port}/img/link_icons/LinkedIn.png`}
                    />
                </a>
                <a href='https://www.facebook.com/haram.choi.921' target='blank'>
                    <img 
                        className={classes.icon_button} 
                        alt='Facebook'
                        src={`http://${CONFIG.server.ip}:${CONFIG.server.port}/img/link_icons/Facebook.png`}
                    />
                </a>
                <a href='https://www.upwork.com/o/profiles/users/_~01826cf89088d181e6/' target='blank'>
                    <img 
                        className={classes.icon_button} 
                        alt='UpWork'
                        src={`http://${CONFIG.server.ip}:${CONFIG.server.port}/img/link_icons/UpWork.png`}
                    />
                </a> */}
            </Fragment>
        );
    }
}

export default withStyles (RootRouteStyle) (Root);
