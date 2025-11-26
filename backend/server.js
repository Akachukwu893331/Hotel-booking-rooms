

//imports modules & dependencies
// const app = require('./src/app');
// const logger = require('./src/middleware/winston.logger');

// // app listens to .env defined port
// app.listen(process.env.APP_PORT, () => {
//   logger.info(`App server running on: ${process.env.APP_BASE_URL}`);
// });




require('dotenv').config();  // load .env variables
const express = require('express');
const morgan = require('morgan'); // HTTP request logger
const connectDatabase = require('./src/database/connect.mongo.db'); // your mongoose connection
const logger = require('./src/middleware/winston.logger'); // your winston logger
const app = require('./src/app'); // your Express app

const PORT = process.env.APP_PORT || 3035;

// Connect to MongoDB
connectDatabase()
  .then(() => logger.info('MongoDB connection established successfully'))
  .catch((err) => logger.error('MongoDB connection failed:', err));

// Log every HTTP request
app.use(morgan('dev')); // shows all incoming requests in console

// Global error handler for uncaught errors
app.use((err, req, res, next) => {
  logger.error('Unhandled Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.APP_NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Start the server
app.listen(PORT, () => {
  logger.info(`App server running on: ${process.env.APP_BASE_URL}`);
});













