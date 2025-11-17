/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

import {
  FaSun, FaGlassMartiniAlt, FaHotel
} from 'react-icons/fa';

const services = [
  {
    icon: <FaSun />,
    title: 'Private Sunset Beach',
    info: 'Unwind on our exclusive beach with golden sands and serene waves. Enjoy sunbathing, beach games, or evening strolls while watching the sun dip below the horizon.'
  },
  {
    icon: <FaGlassMartiniAlt />,
    title: 'Poolside Lounge & Bar',
    info: 'Sip handcrafted cocktails and refreshing beverages at our chic poolside lounge. Relax under cabanas and enjoy the ocean breeze with gourmet bites.'
  },
  {
    icon: <FaHotel />,
    title: 'Premium Suites',
    info: 'Stay in elegantly designed suites with panoramic ocean views, plush bedding, private balconies, and all modern amenities for the ultimate comfort.'
  }

];

export default services;
