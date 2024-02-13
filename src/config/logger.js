import config from './config.js';
import winston from 'winston'

const customLevelsOptions = {
    levels : {
        debug : 0,
        http : 1,
        info : 2,
        warning : 3,
        error : 4,
        fatal : 5,
    },
    colors:{
        debug : 'white',
        http : 'green',
        info : 'cyan',
        warning : 'blue',
        error : 'yellow',
        fatal : 'red',
    }
}

const loggerProd = winston.createLogger({
    levels: customLevelsOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize({colors: customLevelsOptions.colors}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: './error.log',
            level: 'error',
            format: winston.format.combine(
                winston.format.colorize({colors: customLevelsOptions.colors}),
                winston.format.simple()
            )
        })
    ]
})
const loggerDev = winston.createLogger({
    levels: customLevelsOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
                winston.format.colorize({colors: customLevelsOptions.colors}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: './errorDev.log',
            level: 'error',
            format: winston.format.combine(
                winston.format.colorize({colors: customLevelsOptions.colors}),
                winston.format.simple()
            )
        })
    ]
});


export const addLogger = (req, res, next)=>{
    req.logger = config.env ==='production' ? loggerProd : loggerDev ;
    req.logger.debug(`Error debug: ${req.method} en ${req.url} - ${(new Date()).toLocaleTimeString()} ☺`)
    req.logger.http(`Error http: ${req.method} en ${req.url} - ${(new Date()).toLocaleTimeString()} ☺`)
    req.logger.info(`Error info: ${req.method} en ${req.url} - ${(new Date()).toLocaleTimeString()} ☺`)
    req.logger.warning(`Error warning: ${req.method} en ${req.url} - ${(new Date()).toLocaleTimeString()} ☺`)
    req.logger.error(`Error error: ${req.method} en ${req.url} - ${(new Date()).toLocaleTimeString()} ☺`)
    req.logger.fatal(`Error fatal: ${req.method} en ${req.url} - ${(new Date()).toLocaleTimeString()} ☺`)
}
