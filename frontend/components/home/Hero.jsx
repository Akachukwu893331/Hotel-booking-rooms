/**
 * @name Hotel Room Booking System
 * @author Daniel
 * @description Hotel Room Booking and Management System Software ~ Developed By Daniel
 * @copyright ©2023 ― Daniel. All rights reserved.
 * @version v0.0.1
 *
 */

// import React from 'react';

// function Hero({ children, hero }) {
//   return (
//     <section className={hero}>
//       {children}
//     </section>
//   );
// }

// Hero.defaultProps = {
//   hero: 'defaultHero'
// };

// export default Hero;



import React from "react";

function Hero({ children, hero }) {
  return (
    <section className={`relative overflow-hidden ${hero}`}>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fadeIn">
        {children}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-0"></div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn .8s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
