import React, { Component, Fragment } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import history from '../services/history';
import { mainRoutes } from '../routes';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Navbar } from './../components';

/**
 * Animation Props
 **/
function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
}

function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
}

const bounceTransition = {
    atEnter: {
      opacity: 0,
      scale: 1.2,
    },
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
};

/**
 * Pages
 **/
const mainSwitch = (
    <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className='route-wrapper'
    >
        {mainRoutes.map(function (item, index) {
            if (!index) {
                return (
                    <Route exact key={index} path={item.path} component={item.component} />
                )
            } else {
                return (
                    <Route key={index} path={item.path} component={item.component} />
                )
            }
        })}
        <Redirect to={'/'} />
    </AnimatedSwitch>
);

/**
 * App
 **/
export default class App extends Component {
    /**
     * @return {jsx}
     **/
    render() {
        return (
            <Fragment>
                <CssBaseline />
                <Router history={history}>
                    <Fragment>
                        <Navbar />
                        {mainSwitch}
                    </Fragment>
                </Router>
            </Fragment>
        );
    }
}
