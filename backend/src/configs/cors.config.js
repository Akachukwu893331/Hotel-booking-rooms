

// const allowedOrigins = [
//   'http://localhost:3033',
//   'http://localhost:3034',
//   'http://localhost:5500',
//   'https://api-beach-resort.srmukul.com',
//   'https://admin-beach-resort.vercel.app',
//   'https://mukul-beach-resort.vercel.app'
// ];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS origin'));
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200
// };

// module.exports = corsOptions;












// const allowedOrigins = [
//   // Local development
//   "http://localhost:3033",
//   "http://localhost:3034",
//   "http://localhost:3035",

//   // Production: frontend
//   "https://hotel-booking-rooms-beach-resort.vercel.app",

//   // Production: admin panel
//   "https://hotel-booking-rooms-admin.vercel.app",

//   // Production: backend hosted on Vercel
//   "https://hotel-booking-rooms-backend.vercel.app"
// ];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS origin"));
//     }
//   },

//   methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,

//   preflightContinue: false,
//   optionsSuccessStatus: 200
// };

// module.exports = corsOptions;

























const allowedOrigins = [
  // Local development
  "http://localhost:3033",
  "http://localhost:3034",
  "http://localhost:3035",

  // Production: frontend
  "https://hotel-booking-rooms-beach-resort.vercel.app",

  // Production: admin panel
  "https://hotel-booking-rooms-admin.vercel.app",

  // Production: backend hosted on Vercel
  "https://hotel-booking-rooms-backend.vercel.app"
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow REST clients like Postman (no origin)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS origin"));
    }
  },

  // Required for PUT, POST, PATCH, DELETE
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

  // FULL list of headers required for authentication + uploads
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin"
  ],

  // Required for cookies / sessions
  credentials: true,

  // Fix for older browsers handling preflight
  optionsSuccessStatus: 200,

  preflightContinue: false
};

module.exports = corsOptions;
