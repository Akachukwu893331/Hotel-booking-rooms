/**
 * @name Hotel Room Booking System
 * @author Daniel
 * @description Hotel Room Booking and Management System Software ~ Developed By Daniel
 * @copyright ©2023 ― Daniel. All rights reserved.
 * @version v0.0.1
 *
 */

// import React from 'react';

// function Footers() {
//   return (
//     <footer className='footer'>
//       <h2>Beach Resort | Hotel Room Booking System</h2>
//       <p>
//         ©2023 Beach Resort — Developed By
//         {' '}
//         <a
//           href='https://srmukul.com'
//           rel='noreferrer'
//           target='_blank'
//         >
//           Md. Samiur Rahman (Mukul)
//         </a>
//       </p>
//     </footer>
//   );
// }

// export default Footers;


















import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footers() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* About */}
        <div>
          <h3>Beach Resort</h3>
          <p>
            Experience luxury and comfort at our beachfront paradise. Private suites, premium dining, and unforgettable experiences await.
          </p>
          <div className='social-icons'>
            <a href='#' aria-label='Facebook'>
              <FaFacebookF />
            </a>
            <a href='#' aria-label='Twitter'>
              <FaTwitter />
            </a>
            <a href='#' aria-label='Instagram'>
              <FaInstagram />
            </a>
            <a href='#' aria-label='LinkedIn'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/rooms'>Rooms</a>
            </li>
            <li>
              <a href='/about'>About Us</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@beachresort.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Ocean Drive, Miami, FL</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3>Newsletter</h3>
          <p>Subscribe to get our latest offers and updates</p>
          <div className='newsletter'>
            <input type='email' placeholder='Your email' />
            <button type='button'>Subscribe</button>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        ©2025 Beach Resort. Designed with ❤️ for luxury and comfort.
      </div>
    </footer>
  );
}

export default Footers;
