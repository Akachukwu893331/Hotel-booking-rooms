/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

// const mongoose = require('mongoose');
// const logger = require('../middleware/winston.logger');

// const connectionString = process.env.MONGO_URI;
// mongoose.set('strictQuery', false);

// const connectDatabase = async () => {
//   try {
//     await mongoose
//       .connect(connectionString, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//         // useCreateIndex: true, // for mongoose 6.x
//         // useFindAndModify: false, // for mongoose 6.x
//       })
//       .then(() => {
//         logger.info('Connection establish to MongoDB database successful!');
//       })
//       .catch((error) => {
//         logger.error('Error connecting to MongoDB: ', error);
//       });
//   } catch (error) {
//     logger.error('Database connection error: ', error);
//   }
// };

// module.exports = connectDatabase;











const mongoose = require('mongoose');
const logger = require('../middleware/winston.logger');

const connectionString = process.env.MONGO_URI;

mongoose.set('strictQuery', false);

const connectDatabase = async () => {
  if (!connectionString) {
    logger.error('MONGO_URI is not defined in .env');
    return;
  }

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      // useCreateIndex and useFindAndModify are deprecated in Mongoose 6+
    });
    logger.info('✅ Connection to MongoDB established successfully!');
  } catch (error) {
    logger.error('❌ Error connecting to MongoDB:', error);
    // Optionally exit process if DB is critical
    // process.exit(1);
  }
};

module.exports = connectDatabase;
