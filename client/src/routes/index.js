/**
 * Root
 **/
import RootRoute from './root/root';

/**
 * Export Every Routes as mainRoutes
 **/
const mainRoutes = [
    {
        path: '/',
        component: RootRoute,
        wrapper: '',
    },
];

export {
    mainRoutes,
};
