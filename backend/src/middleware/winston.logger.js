

// const winston = require('winston');

// const {
//   combine, timestamp, printf, colorize
// } = winston.format;

// const logger = winston.createLogger({
//   level: process.env.APP_LOG_LEVEL || 'info',
//   format: combine(
//     colorize({ all: true }),
//     timestamp({
//       format: 'YYYY-MM-DD hh:mm:ss.SSS A'
//     }),
//     printf((level) => `[${level.timestamp}] ${level.level}: ${level.message}`)
//   ),
//   transports: [new winston.transports.Console()]
// });

// module.exports = logger;





// const winston = require('winston');

// const { combine, timestamp, printf, colorize, errors } = winston.format;

// const logger = winston.createLogger({
//   level: process.env.APP_LOG_LEVEL || 'info',
//   format: combine(
//     colorize({ all: true }),
//     timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS A' }),
//     errors({ stack: true }), // <- capture error stack if info is an Error
//     printf((info) => {
//       // Log stack if it exists, otherwise log message
//       return `[${info.timestamp}] ${info.level}: ${info.stack || info.message}`;
//     })
//   ),
//   transports: [new winston.transports.Console()]
// });

// module.exports = logger;














const winston = require('winston');
const morgan = require('morgan');

const { combine, timestamp, printf, colorize, errors } = winston.format;

// ------------------------
// Winston Logger (Vercel-safe)
// ------------------------
const logger = winston.createLogger({
  level: process.env.APP_LOG_LEVEL || 'info',
  format: combine(
    colorize({ all: true }),
    timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS A' }),
    errors({ stack: true }),
    printf((info) => {
      return `[${info.timestamp}] ${info.level}: ${info.stack || info.message}`;
    })
  ),
  transports: [
    // Console-only transport → no filesystem writes
    new winston.transports.Console()
  ],
});

// ------------------------
// Morgan Middleware Logger (Vercel-safe)
// ------------------------
const morganLogger = morgan('dev', {
  stream: {
    write: (message) => {
      logger.info(message.trim()); // send Morgan logs to Winston console logger
    },
  },
});

module.exports = {
  logger,
  morganLogger,
};

