import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { NavbarStyle } from './../../styles';

import { menuArray } from './../../resources';

class Navbar extends Component {
    state= {
        index: 0,
    }

    onMenuSelection = index => e => {
        this.setState({ index })
    }

    componentWillMount() {
        let initialLocationArray = window.location.href.split('/');
        let initialLocation = initialLocationArray[initialLocationArray.length - 1];
        if (!initialLocation.length){
            this.setState({ index: 0 });
        } else {
            this.setState({ index: menuArray.indexOf(initialLocation) })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root} elevation={0}>
                <Tabs
                    value={this.state.index}
                    indicatorColor='primary'
                    centered
                    className={classes.tabs}
                >
                    {menuArray.map((menuItem, index) => 
                        <Tab
                            key={menuItem}
                            label={menuItem}
                            to={`/${menuItem}`}
                            component={Link}
                            onClick={this.onMenuSelection(index)}
                            className={classes.tab}
                        />
                    )}
                </Tabs>
            </Paper>
        );
    }
}

export default withStyles (NavbarStyle) (Navbar);