

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

const { combine, timestamp, printf, colorize, errors } = winston.format;

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
    // Only Console transport → SAFE for Vercel
    new winston.transports.Console()
  ],
});

module.exports = logger;
