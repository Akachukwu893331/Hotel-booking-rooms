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
//   const UPLOADS_FOLDER = './public/uploads/users';

//   // if not exists to `upload` folder to create
//   if (!fs.existsSync('./public/uploads')) {
//     fs.mkdirSync('./public/uploads', { recursive: true });
//   }

//   // if not exists to `users` folder to create
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
//   filename: (_req, file, cb) => {
//     const fileExt = path.extname(file.originalname);
//     const fileName = `${file.originalname.replace(fileExt, '').toLowerCase().split(' ').join('-')}-${Date.now()}`;

//     cb(null, fileName + fileExt);
//   }
// });

// // prepare the final multer upload object
// const avatarUpload = multer({
//   storage,
//   limits: {
//     fileSize: 1000000 // 1MB
//   },
//   fileFilter: (_req, file, cb) => {
//     if (file.fieldname === 'avatar') {
//       if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
//         cb(null, true);
//       } else {
//         cb(new Error('Only .jpg, .png or .jpeg format allowed!'));
//       }
//     } else {
//       cb(new Error('There was an unknown error!'));
//     }
//   }
// });

// module.exports = avatarUpload;







const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'users', // folder in Cloudinary
    format: async (req, file) => {
      // Keep original extension
      const ext = file.mimetype.split('/')[1];
      return ext;
    },
    public_id: (req, file) => {
      const timestamp = Date.now();
      const originalName = file.originalname.split('.')[0].replace(/\s+/g, '-').toLowerCase();
      return `${originalName}-${timestamp}`;
    }
  }
});

// Prepare multer upload object
const avatarUpload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
  fileFilter: (_req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (file.fieldname === 'avatar' && allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only .jpg, .png or .jpeg format allowed!'));
    }
  }
});

module.exports = avatarUpload;
