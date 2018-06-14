import CONFIG from './../../config';

export default theme => ({
    profile_picture: {
        margin: 'auto',
        borderRadius: '50%',
        backgroundImage: `url(${`http://${CONFIG.server.ip}:${CONFIG.server.port}/img/portrait/portrait_picture_haram_choi.jpg`})`,
        backgroundPosition:'center top',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%',
        cursor: 'pointer',
    },
    resume_bodies: {
        position: 'absolute',
        left: '42.5vw',
        top: '5.5vh',
        borderRadius: '10%',
        width: '15vw',
        height: '20vh',
        cursor: 'pointer',
    }
});