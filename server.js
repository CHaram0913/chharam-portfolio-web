const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const envResult = require('dotenv').config();
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;
const CONFIGS = process.env.ENV === 'prod' ?
    require('./configs/production') :
    process.env.ENV === 'dev' ?
        require('./configs/development') :
        require('./configs/default');

/**
 * Logger Setting
 **/
const logger = createLogger({
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [new transports.Console()],
});

const app = express();

/**
 * Middlewares
 **/
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(expressSession({
    secret: CONFIGS.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: process.env.ENV === 'prod' ?
        {
            secure: true,
            maxAge: CONFIGS.SESSION_LIFE,
        } :
        {
            maxAge: CONFIGS.SESSION_LIFE,
        },
}));

/**
 * Start
 **/
app.listen(CONFIGS.PORT, () => {
    logger.info(`Server Running at PORT : ${CONFIGS.PORT}`);
});
