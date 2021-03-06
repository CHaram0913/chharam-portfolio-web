import React, { Component, Fragment } from 'react';
import { StaggeredMotion, TransitionMotion, spring, presets } from 'react-motion';
import history from './../../services/history';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { ResumeRouteStyle } from './../../styles';

import { resumeBodiesArray, resumeDetailsArray } from './../../resources';

Object.prototype.checkForTrue = function() {
    for (let i in this) {
        if (this[i] === false) {
            return true;
        }
    }
    return false;
}

/**
 * Root
 */
class Timeline extends Component {
    state = {
        programmingChild: false,
        personalChild: false,
        educationChild: false,
        engineeringChild: false,
    }

    handleProfileClick = () => e => {
        if (this.state.checkForTrue()) {
            this.setState({
                programmingChild: true,
                personalChild: true,
                educationChild: true,
                engineeringChild: true,
            });
        } else {
            this.setState({
                programmingChild: false,
                personalChild: false,
                educationChild: false,
                engineeringChild: false,
            });
        }
    }

    handleBoxClick = resume_detail => e => {
        if (resume_detail === 'programmingChild') {
            history.push('/Portfolio');
        }
        this.setState({ [resume_detail]: !this.state[resume_detail] });
    }

    getDefaultStyles = () => {
        return resumeDetailsArray.map(detail => ({ ...detail, style: { opacity: 0 } }));
    }

    getStyles = (childState) => {
        return resumeDetailsArray.map(detail => {
            let childStateNum;

            if (childState[detail.key]) {
                childStateNum = 1;
            } else {
                childStateNum = 0;
            }

            return (
                { ...detail, style: { opacity: spring(1 * childStateNum, presets.gentle) } }
            )});
    }

    willEnter() {
        return {
            opacity: 0,
        };
    }

    willLeave() {
        return {
            opacity: spring(0),
        }
    }

    /**
     * @return {jsx}
     */

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <StaggeredMotion 
                    defaultStyles={[
                        { x: -15, y: 20, length: 45 }, 
                        { x: 0, y: 30, opacity: 0, r: 194, g: 194, b: 194 }, 
                        { x: 0, y: 30, opacity: 0, r: 194, g: 194, b: 194 }, 
                        { x: 0, y: 30, opacity: 0, r: 194, g: 194, b: 194 }, 
                        { x: 0, y: 30, opacity: 0, r: 194, g: 194, b: 194 }
                    ]}
                    styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, index) => { 
                        if (index === 0) {
                            return { x: spring(0), y: spring(30), length: spring(30) };
                        } else if (index !== 0 && prevInterpolatedStyles[0].x < -0.1) {
                            return { x: spring(0), y: spring(30), opacity: spring(0), r: spring(194), g: spring(194), b: spring(194) };
                        } else if (index !== 0 && prevInterpolatedStyles[0].x >= -0.1) {
                            return { 
                                x: spring(-Math.cos(Math.PI * index / 2 + Math.PI/4) * Math.sqrt(2) * 15), 
                                y: spring(30 - Math.sin(Math.PI * index / 2 + Math.PI/4) * Math.sqrt(2) * 22), 
                                opacity: spring(0.6),
                                r: spring(resumeBodiesArray[index - 1].colorCodes.r),
                                g: spring(resumeBodiesArray[index - 1].colorCodes.g),
                                b: spring(resumeBodiesArray[index - 1].colorCodes.b),
                            };
                        }
                    })}
                >
                    {interpolatingStyles => (
                        <Fragment>
                            {interpolatingStyles.map((style, index) => {
                                return index === 0
                                    ? (
                                        <Paper 
                                            key={index}
                                            className={classes.profile_picture} 
                                            style={{
                                                transform: `translateX(${style.x}vw) translateY(${style.y}vh)`,
                                                height: `${style.length}vh`,
                                                width: `${style.length}vh`,
                                            }}
                                            onClick={this.handleProfileClick()}
                                        />
                                    ) : (
                                        <Paper 
                                            key={index}
                                            className={classes.resume_bodies} 
                                            style={{
                                                transform: `translateX(${style.x}vw) translateY(${style.y}vh)`,
                                                opacity: `${style.opacity}`,
                                                backgroundColor: `rgba(${style.r}, ${style.g}, ${style.b}, 0.8)`,
                                                '&:hover': {
                                                    backgroundColor: `red`
                                                }
                                            }}
                                            onClick={this.handleBoxClick(resumeBodiesArray[index - 1].equivalentChild)}
                                        >
                                            <Typography variant='display3' style={{ color:'white' }}>
                                                {resumeBodiesArray[index - 1].title}
                                            </Typography>
                                        </Paper>
                                    )
                            })}
                        </Fragment>
                    )}
                </StaggeredMotion>
                <TransitionMotion
                    defaultStyles={this.getDefaultStyles()}
                    styles={this.getStyles(this.state)}
                    willLeave={this.willLeave}
                    willEnter={this.willEnter}
                >
                    {styles => (
                        <Fragment>
                            {styles.map(({ style, key, data }) => (
                                <Paper style={{ background: 'none', width: '400px', height: '100px', opacity: style.opacity }}>
                                    {data.map(singleSubdata => (
                                        <Typography
                                            style={{ color: 'white' }}
                                            key={singleSubdata.subkey}
                                        >
                                            {singleSubdata.subdata}
                                        </Typography>
                                    ))}
                                </Paper>
                            ))}
                        </Fragment>
                    )}
                </TransitionMotion>
            </Fragment>
        );
    }
}

export default withStyles (ResumeRouteStyle) (Timeline);