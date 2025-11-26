

// const sgMail = require('@sendgrid/mail');
// const { successResponse, errorResponse } = require('./app.response');

// const sendEmail = async (res, user, url, subjects, message, title) => {
//   sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

//   const msg = {
//     to: user.email,
//     from: process.env.SEND_SENDER_MAIL,
//     subject: subjects,
//     text: message,
//     html: `<div>
//       <h4>${title}</h4>
//       <a href="${url}" target="_blank"> >>> Click Here</a>
//     </div>`
//   };

//   await sgMail.send(msg).then(() => {
//     res.status(200).json(successResponse(
//       0,
//       'SUCCESS',
//       `Email sent to ${user.email} successful`
//     ));
//   }).catch(async (error) => {
//     // eslint-disable-next-line no-param-reassign
//     user.resetPasswordToken = undefined;
//     // eslint-disable-next-line no-param-reassign
//     user.resetPasswordExpire = undefined;

//     await user.save({ validateBeforeSave: false });

//     res.status(500).json(errorResponse(
//       2,
//       'SERVER SIDE ERROR',
//       error
//     ));
//   });
// };

// module.exports = sendEmail;







const nodemailer = require('nodemailer');

const sendEmail = async (res, user, url, subject, message, title, options = {}) => {
  try {
    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,           // your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD,   // 16-character App Password
      },
    });

    // Email content
    const mailOptions = {
      from: `"${process.env.GMAIL_SENDER_NAME || 'No Reply'}" <${process.env.GMAIL_USER}>`,
      to: user.email,
      subject,
      html: `
        <div>
          <h4>${title}</h4>
          <p>${message}</p>
          <a href="${url}" target="_blank">Click Here</a>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // If "noResponse" flag is true, don't send JSON (used for redirects)
    if (!options.noResponse && res) {
      return res.status(200).json({
        status: 'success',
        message: `Email sent to ${user.email} successfully`
      });
    }

  } catch (error) {
    // Reset tokens if they exist
    if (user.resetPasswordToken) user.resetPasswordToken = undefined;
    if (user.resetPasswordExpire) user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false }).catch(() => {});

    // If res exists and noResponse not set, return JSON error
    if (res && !options.noResponse) {
      return res.status(500).json({
        status: 'error',
        message: error.message || 'SERVER SIDE ERROR'
      });
    }

    // Otherwise, throw error for the caller to handle
    throw error;
  }
};

module.exports = sendEmail;
