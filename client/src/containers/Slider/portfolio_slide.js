import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import CONFIG from './../../config';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Chip, Avatar } from '@material-ui/core';
import { PortfolioSlideStyle } from './../../styles';

import { changeSlideIndex } from './../../actions';

import { portfolioArray } from './../../resources';

const portfolioSliderSteps = (classes, slider) => {
    let sliderArray = [];

    for (let i = 0; i < portfolioArray.length; i++) {
        portfolioArray[i].content = (
            <Paper className={classes.slide_component_paper}>
                <Typography variant='display1'>
                    {portfolioArray[i].label}
                </Typography>
                {portfolioArray[i].keywords.map((keyword, index) => (
                    <Chip 
                        avatar={<Avatar src={`http://${CONFIG.server.ip}:${CONFIG.server.port}/img/icons/${keyword}.png`} />}
                        key={index}
                        label={keyword}
                        className={classes.chip}
                    />
                ))}
            </Paper>
        )
        sliderArray.push(portfolioArray[i]);
    }

    return sliderArray;
};

class PortfolioSlider extends Component {
    state = {
        activeSlide: 0,
    };

    constructor(props) {
        super(props);

        this.handleStepChange = this.handleStepChange.bind(this);
    }

    componentWillMount() {
        this.props.changeSlideIndex(0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeSlide !== this.props.activeSlide) {
            this.setState({ activeSlide: this.props.activeSlide });
        }
    }

    async handleStepChange(activeSlide) {
        await this.props.changeSlideIndex(activeSlide);
        this.setState({ activeSlide: this.props.activeSlide });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <Fragment>
                <Paper className={classes.root}>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.activeSlide}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                        className={classes.swipeable_views}
                    >
                        {portfolioSliderSteps(classes, this).map(slide => (
                            <Paper
                                key={slide.label}
                                alt={slide.label}
                                className={classes.swipe_paper}
                            >
                                {slide.content}
                            </Paper>
                        ))}
                    </SwipeableViews>
                </Paper>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return { 
        activeSlide: state.activeIndex
    }
}

export default withStyles (PortfolioSlideStyle, { withTheme: true }) (connect (mapStateToProps, { changeSlideIndex }) (PortfolioSlider));


