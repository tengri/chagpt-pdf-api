import winston from 'winston';
import expressWinston from 'express-winston';

// создадим логер запросов
const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({
      filename: 'request.log',
    }),
  ],
  format: winston.format.json(),
});

export default requestLogger;
