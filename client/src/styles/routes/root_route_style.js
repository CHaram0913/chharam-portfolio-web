import CONFIG from './../../config';

export default theme => ({
    root: {
        height: 'auto',
    },
    my_name: {
        color: 'white',
        textAlign: 'center',
        margin: '5px 0 0 0',
        fontSize: 90,
        fontFamily: 'Rajdhani, sans-serif',
    },
    title_container: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Oxygen, sans-serif',
    },
    profile_picture: {
        width: 450,
        height: 450,
        margin: '20px auto',
        borderRadius: '50%',
        backgroundImage: `url(${`http://${CONFIG.server.ip}:${CONFIG.server.port}/img/portrait/portrait_picture_haram_choi.jpg`})`,
        backgroundPosition:'center top',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%',
        cursor: 'pointer',
    },
    detail_container: {
        background: 'none',
        height: 'auto',
        width: '700px',
        margin: 'auto',
    },
    detail: {
        color: 'white',
        textAlign: 'justify',
        fontSize: 22,
        marginTop: '3px',
        fontFamily: 'Titillium Web, sans-serif',
    },
    detail2: {
        color: 'white',
        textAlign: 'justify',
        fontSize: 21,
        marginTop: '15px',
        fontFamily: 'Titillium Web, sans-serif',
    },
    resume_link: {
        textDecoration: 'none !important',
        color: 'white'
    },
    icon_button: {
        height: '70px',
        width: '70px',
        margin: '20px 30px 0 0',
        borderRadius: '20%',
    },
    profile: {
        transition: 'opacity 300ms ease-in-out 1s'
    },
    summary_container_grid: {
        height: '100%',
        paddingLeft: '100px',
    },
    summary_container_paper: {
        padding: '20px',
        width: '100%',
        height: '100%',
    },
    summary_subheading: {
        color: 'black',
        textAlign: 'justify',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: '8px',
        fontFamily: 'Titillium Web, sans-serif',
    },
    summary_detail: {
        paddingLeft: '10px',
        color: 'black',
        textAlign: 'justify',
        fontSize: 22,
        marginTop: '3px',
        fontFamily: 'Titillium Web, sans-serif',
    },
});