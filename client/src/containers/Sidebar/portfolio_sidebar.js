import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, List, ListItem, Divider } from '@material-ui/core';
import { PortfolioSidebarStyle } from './../../styles';

import { changeSlideIndex } from './../../actions';
import { portfolioArray } from './../../resources';

class PortfolioSidebar extends Component {
    state = {
        activeSlide: 0,
    };

    constructor(props) {
        super(props);

        this.handleSlideSelection = this.handleSlideSelection.bind(this);
    }

    componentWillMount() {
        this.props.changeSlideIndex(0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeIndex !== this.props.activeIndex) {
            this.setState({ activeSlide: this.props.activeSlide });
        }
    }

    handleSlideSelection = activeSlide => async e => {
        await this.props.changeSlideIndex(activeSlide);
        this.setState({ activeSlide: this.props.activeSlide });
    };

    render() {
        const { classes } = this.props;

        return(
            <Paper className={classes.root}>
                <List>
                    {portfolioArray.map((slide, index) => {
                        return (
                            <Fragment key={index}>
                                <Divider className={classes.divider} />
                                <ListItem 
                                    button
                                    onClick={this.handleSlideSelection(index)}
                                    className={classes.list_item}
                                >
                                    <Typography 
                                        variant="subheading"
                                        className={classes.navLinks}
                                    >
                                        {slide.label}
                                    </Typography>
                                </ListItem>
                            </Fragment>
                        );
                    })}
                </List>
            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return { 
        activeSlide: state.activeIndex
    }
}

export default withStyles (PortfolioSidebarStyle) (connect (mapStateToProps, { changeSlideIndex }) (PortfolioSidebar));

