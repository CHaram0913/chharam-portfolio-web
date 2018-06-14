import React, { Component, Fragment } from 'react';
import { Motion, spring } from 'react-motion';
import history from './../../services/history';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';
import { RootRouteStyle } from './../../styles';

/**
 * Root
 */
class Root extends Component {
    state = {
        detailActive: 0
    }

    componentDidUpdate(prevProps) {
        if(this.state.detailActive >= 2) {
            this.setState({ detailActive: 0 });
            history.push('/Resume');
        }
    }

    handleProfileClick = (isActive) => e => {
        this.setState({ detailActive: isActive + 1 });
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
                        <i><b>CLICK</b></i> on the image for details. You can click it more than <i><b>ONCE</b></i>!
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
                        <Motion 
                            defaultStyle={{ x: 200 }} 
                            style={{ x: spring(0) }}
                        >
                            {style => (
                                <Grid item xs={5} className={classes.profile} zeroMinWidth>
                                    <div style={{ transform: `translateX(${style.x}px)` }}>
                                        {this.renderProfile(classes, style)}
                                    </div>
                                </Grid>
                            )}
                        </Motion>

                        <Motion 
                            defaultStyle={{ x: 700, opacity: 0 }} 
                            style={{ x: spring(0), opacity: spring(1) }}
                        >
                            {style => (
                                <Grid item xs={4} className={classes.summary_container_grid} zeroMinWidth>
                                    <Paper 
                                        className={classes.summary_container_paper}
                                        style={{
                                            transform: `translateX(${style.x}px)`,
                                            opacity: style.opacity
                                        }}
                                    >
                                        <Typography className={classes.summary_subheading}>
                                            Email
                                        </Typography>
                                        <Typography className={classes.summary_detail}>
                                            CHaram0913@gmail.com
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
                            )}
                            
                        </Motion>
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
