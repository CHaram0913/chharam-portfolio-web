import CONFIG from './../../config';

export default theme => ({
    root: {
        width: '100%',
        height: '100%',
    },
    swipeable_views: {
        height: '100%',
    },
    swipe_paper: {
        width: '100%',
        height: '100%',
    },
    slide_component_paper: {
        width: '100%',
        height: '100%',
        // backgroundImage: `url(${`http://${CONFIG.server.ip}:${CONFIG.server.port}/img/portfolios/twitch_logger_project.png`})`,
        // backgroundOpacity: 0.1,
        // backgroundPosition:'center top',
        // backgroundRepeat:'no-repeat',
        // backgroundSize:'100%',
    },
    chip: {
        margin: '0 5px'
    }
});