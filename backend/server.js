/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

/*
 * Name: Hotel Room Booking System ~ Backed
 * Description: Build an Hotel Room Booking System using node.js, express.js application from the scratch
 * Author: Md. Samiur Rahman (Mukul)
 * Last Modified: 26/02/2023
 * Version: v0.0.1
 *
 */

//imports modules & dependencies
// const app = require('./src/app');
// const logger = require('./src/middleware/winston.logger');

// // app listens to .env defined port
// app.listen(process.env.APP_PORT, () => {
//   logger.info(`App server running on: ${process.env.APP_BASE_URL}`);
// });




// require('dotenv').config();  // load .env variables
// const express = require('express');
// const morgan = require('morgan'); // HTTP request logger
// const connectDatabase = require('./src/database/connect.mongo.db'); // your mongoose connection
// const logger = require('./src/middleware/winston.logger'); // your winston logger
// const app = require('./src/app'); // your Express app

// const PORT = process.env.APP_PORT || 3035;

// // Connect to MongoDB
// connectDatabase()
//   .then(() => logger.info('MongoDB connection established successfully'))
//   .catch((err) => logger.error('MongoDB connection failed:', err));

// // Log every HTTP request
// app.use(morgan('dev')); // shows all incoming requests in console

// // Global error handler for uncaught errors
// app.use((err, req, res, next) => {
//   logger.error('Unhandled Error:', err);
//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || 'Internal Server Error',
//     stack: process.env.APP_NODE_ENV === 'development' ? err.stack : undefined
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   logger.info(`App server running on: ${process.env.APP_BASE_URL}`);
// });

















// require('dotenv').config();   // Load .env variables

// const express = require('express');
// const morgan = require('morgan');
// const connectDatabase = require('./src/database/connect.mongo.db');
// const logger = require('./src/middleware/winston.logger');
// const app = require('./src/app');

// const PORT = process.env.APP_PORT || 3035;

// // Connect to MongoDB
// connectDatabase()
//   .then(() => logger.info('MongoDB connection established successfully'))
//   .catch((err) => logger.error('MongoDB connection failed:', err));

// // HTTP Request Logger (console only — safe for all platforms)
// app.use(morgan('dev'));

// // Global error handler
// app.use((err, req, res, next) => {
//   logger.error('Unhandled Error:', err);

//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || 'Internal Server Error',
//     stack: process.env.APP_NODE_ENV === 'development' ? err.stack : undefined
//   });
// });

// // Start the server (NOT FOR VERCEL)
// app.listen(PORT, () => {
//   logger.info(`Server running at: ${process.env.APP_BASE_URL}`);
// });









require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const connectDatabase = require('./src/database/connect.mongo.db');
const logger = require('./src/middleware/winston.logger');

const app = express();

// -----------------------------
// Middleware
// -----------------------------
app.use(express.json());
app.use(morgan('dev'));

// -----------------------------
// CORS Setup for Vercel
// -----------------------------
const allowedOrigins = [
  "https://hotel-booking-rooms-beach-resort.vercel.app", // frontend
  "https://hotel-booking-rooms-admin.vercel.app",       // admin
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin || allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }

  // Handle preflight
  if (req.method === "OPTIONS") return res.sendStatus(200);

  next();
});

// -----------------------------
// Connect to Database
// -----------------------------
connectDatabase()
  .then(() => logger.info('MongoDB connection established successfully'))
  .catch((err) => logger.error('MongoDB connection failed:', err));

// -----------------------------
// Your Routes
// -----------------------------
app.use('/api/v1/auth', require('./src/routes/auth.routes'));

// -----------------------------
// Global Error Handler
// -----------------------------
app.use((err, req, res, next) => {
  logger.error('Unhandled Error:', err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.APP_NODE_ENV === 'development' ? err.stack : undefined
  });
});

// -----------------------------
// Local server (remove on Vercel)
// -----------------------------
if (process.env.APP_NODE_ENV !== 'production') {
  const PORT = process.env.APP_PORT || 3035;
  app.listen(PORT, () => {
    logger.info(`Server running locally at: http://localhost:${PORT}`);
  });
}

module.exports = app; // for Vercel serverless
