/**
 * Root
 **/
import RootRoute from './root/root';

/**
 * Other Route Contents
 **/
import Portfolio from './contents/portfolio';
import Resume from './contents/resume';
import Contact from './contents/contact';

/**
 * Export Every Routes as mainRoutes
 **/
const mainRoutes = [
    {
        path: '/',
        component: RootRoute,
        wrapper: '',
    },
    {
        path: '/Resume',
        component: Resume,
        wrapper: '',
    },
    {
        path: '/Portfolio',
        component: Portfolio,
        wrapper: '',
    },
    {
        path: '/Contact',
        component: Contact,
        wrapper: '',
    },
];

export {
    mainRoutes,
};
