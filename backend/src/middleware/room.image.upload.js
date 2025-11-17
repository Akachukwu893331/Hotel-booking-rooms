/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const uploadPath = () => {
//   const UPLOADS_FOLDER = './public/uploads/rooms';

//   // if not exists to `upload` folder to create
//   if (!fs.existsSync('./public/uploads')) {
//     fs.mkdirSync('./public/uploads', { recursive: true });
//   }

//   // if not exists to `rooms` folder to create
//   if (!fs.existsSync(UPLOADS_FOLDER)) {
//     fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
//   }

//   return UPLOADS_FOLDER;
// };

// // define the storage
// const storage = multer.diskStorage({
//   destination: (_req, _file, cb) => {
//     cb(null, uploadPath());
//   },
//   filename: (req, file, cb) => {
//     const fileExt = path.extname(file.originalname);
//     const fileName = `${file.originalname.replace(fileExt, '').toLowerCase().split(' ').join('-')}-${Date.now()}`;

//     cb(null, fileName + fileExt);
//   }
// });

// // prepare the final multer upload object
// const roomImageUpload = multer({
//   storage,
//   limits: {
//     fileSize: 1000000 // 1MB
//   },
//   fileFilter: (_req, files, cb) => {
//     if (files.fieldname === 'room_images') {
//       if (files.mimetype === 'image/png' || files.mimetype === 'image/jpg' || files.mimetype === 'image/jpeg') {
//         cb(null, true);
//       } else {
//         cb(new Error('Only .jpg, .png or .jpeg format allowed!'));
//       }
//     } else {
//       cb(new Error('There was an unknown error!'));
//     }
//   }
// });

// module.exports = roomImageUpload;











// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// // Helper to get upload path
// const uploadPath = () => {
//   // Use absolute path based on this file's location
//   const UPLOADS_FOLDER = path.join(__dirname, '../../public/uploads/rooms');

//   try {
//     // Create folder recursively if it doesn't exist
//     if (!fs.existsSync(UPLOADS_FOLDER)) {
//       fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
//       console.log('Created uploads folder:', UPLOADS_FOLDER);
//     }
//   } catch (err) {
//     console.error('Error creating upload folder:', err);
//     throw err; // stop if folder can't be created
//   }

//   return UPLOADS_FOLDER;
// };

// // Multer storage configuration
// const storage = multer.diskStorage({
//   destination: (_req, _file, cb) => {
//     cb(null, uploadPath());
//   },
//   filename: (_req, file, cb) => {
//     const fileExt = path.extname(file.originalname);
//     const fileName = `${file.originalname
//       .replace(fileExt, '')
//       .toLowerCase()
//       .split(' ')
//       .join('-')}-${Date.now()}`;
//     cb(null, fileName + fileExt);
//   },
// });

// // Multer upload object
// const roomImageUpload = multer({
//   storage,
//   limits: {
//     fileSize: 1 * 1024 * 1024, // 1MB
//   },
//   fileFilter: (_req, file, cb) => {
//     const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];

//     if (file.fieldname === 'room_images') {
//       if (allowedTypes.includes(file.mimetype)) {
//         cb(null, true);
//       } else {
//         cb(new Error('Only .jpg, .png or .jpeg format allowed!'));
//       }
//     } else {
//       cb(new Error('Unknown field!'));
//     }
//   },
// });

// module.exports = roomImageUpload;










const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Helper to get upload path
const uploadPath = () => {
  // Use /tmp for Vercel (writable during request)
  const UPLOADS_FOLDER = path.join('/tmp/uploads/rooms');

  try {
    // Create folder recursively if it doesn't exist
    if (!fs.existsSync(UPLOADS_FOLDER)) {
      fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
      console.log('Uploads folder ready:', UPLOADS_FOLDER);
    }
  } catch (err) {
    console.error('Failed to create uploads folder:', err);
    throw err;
  }

  return UPLOADS_FOLDER;
};

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadPath()),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${file.originalname
      .replace(ext, '')
      .toLowerCase()
      .split(' ')
      .join('-')}-${Date.now()}${ext}`;
    cb(null, name);
  },
});

// Multer upload instance
const roomImageUpload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
  fileFilter: (_req, file, cb) => {
    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    if (file.fieldname !== 'room_images') return cb(new Error('Unknown field!'));
    if (!allowedTypes.includes(file.mimetype)) return cb(new Error('Only .jpg, .png, .jpeg allowed'));
    cb(null, true);
  },
});

module.exports = roomImageUpload;
