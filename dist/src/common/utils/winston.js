"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonLogger = void 0;
const nest_winston_1 = require("nest-winston");
const winstonDaily = require("winston-daily-rotate-file");
const winston = require("winston");
const logDir = __dirname + '/../../../logs';
const dailyOptions = (level) => {
    return {
        level,
        datePattern: 'YYYY-MM-DD',
        dirname: logDir + `/${level}`,
        filename: `%DATE%.${level}.log`,
        maxFiles: 30,
        zippedArchive: true,
    };
};
exports.winstonLogger = nest_winston_1.WinstonModule.createLogger({
    transports: [
        new winston.transports.Console({
            level: process.env.MODE === 'production' ? 'http' : 'silly',
            format: process.env.MODE === 'production'
                ? winston.format.simple()
                : winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike(process.env.PROJECT_NAME, {
                    prettyPrint: true,
                })),
        }),
        new winstonDaily(dailyOptions('info')),
        new winstonDaily(dailyOptions('warn')),
        new winstonDaily(dailyOptions('error')),
    ],
});
//# sourceMappingURL=winston.js.map