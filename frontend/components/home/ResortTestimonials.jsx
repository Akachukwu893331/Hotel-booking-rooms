// import React from 'react';
// import Link from 'next/link';

// function ResortTestimonials() {
//   const testimonials = [
//     {
//       name: 'Olivia Bennett',
//       text: "The best beach resort I've ever visited. Stunning views, warm staff, and unforgettable sunsets. Every moment felt like paradise.",
//       img: 'https://randomuser.me/api/portraits/women/65.jpg',
//       rating: 5,
//       location: 'New York, USA'
//     },
//     {
//       name: 'Michael Carter',
//       text: 'Our villa was beyond incredible. Private beach, 24/7 service — worth every penny. The attention to detail was remarkable.',
//       img: 'https://randomuser.me/api/portraits/men/32.jpg',
//       rating: 5,
//       location: 'London, UK'
//     },
//     {
//       name: 'Sophia Martinez',
//       text: "The spa treatments and infinity pool were heavenly. I'm already planning my next visit. Truly a transformative experience.",
//       img: 'https://randomuser.me/api/portraits/women/45.jpg',
//       rating: 5,
//       location: 'Madrid, Spain'
//     },
//     {
//       name: 'James Wilson',
//       text: "Exceptional service from start to finish. The culinary experience alone deserves five stars. We'll be back next year!",
//       img: 'https://randomuser.me/api/portraits/men/67.jpg',
//       rating: 5,
//       location: 'Sydney, Australia'
//     },
//     {
//       name: 'Emma Thompson',
//       text: 'Perfect blend of luxury and nature. Waking up to ocean views every morning was magical. The staff made us feel like family.',
//       img: 'https://randomuser.me/api/portraits/women/33.jpg',
//       rating: 5,
//       location: 'Vancouver, Canada'
//     }
//   ];

//   // Duplicate for seamless scroll
//   const scrollingTestimonials = [...testimonials, ...testimonials];

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
//         ★
//       </span>
//     ));
//   };

//   return (
//     <section className='resort-testimonials'>
//       <div className='testimonials-container'>
//         {/* Header */}
//         <div className='testimonials-header'>
//           <span className='section-label'>Testimonials</span>
//           <h2 className='title'>Experiences That Speak Volumes</h2>
//           <p className='subtitle'>
//             Discover why our guests return year after year to create unforgettable memories
//           </p>
//         </div>

//         {/* Slider Container */}
//         <div className='testimonial-slider-wrapper'>
//           <div className='slider-overlay left'></div>
//           <div className='slider-overlay right'></div>

//           <div className='testimonial-slider'>
//             <div className='testimonial-track'>
//               {scrollingTestimonials.map((item, i) => (
//                 <div className='testimonial-card' key={i}>
//                   {/* Rating Stars */}
//                   <div className='rating-stars'>
//                     {renderStars(item.rating)}
//                   </div>

//                   {/* Quote Icon */}
//                   <div className='quote-icon'>❝</div>

//                   {/* Testimonial Text */}
//                   <p className='testimonial-text'>"{item.text}"</p>

//                   {/* Guest Info */}
//                   <div className='guest-info'>
//                     <img
//                       src={item.img}
//                       alt={item.name}
//                       className='testimonial-img'
//                       loading='lazy'
//                     />
//                     <div className='guest-details'>
//                       <h4 className='testimonial-name'>{item.name}</h4>
//                       <span className='guest-location'>{item.location}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Navigation Dots */}
//         <div className='slider-nav'>
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               type='button'
//               className='nav-dot'
//               aria-label={`Go to testimonial ${i + 1}`}
//             />
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className='testimonials-cta'>
//           <p className='cta-text'>Ready to create your own story?</p>
//           <Link href='/auth/registration' className='cta-button'>
//             Book Your Stay
//             <span className='arrow'>→</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ResortTestimonials;

import React from 'react';
import Link from 'next/link';

function ResortTestimonials() {
  const testimonials = [
    {
      name: 'Olivia Bennett',
      text: 'The best beach resort I&apos;ve ever visited. Stunning views, warm staff, and unforgettable sunsets. Every moment felt like paradise.',
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 5,
      location: 'New York, USA'
    },
    {
      name: 'Michael Carter',
      text: 'Our villa was beyond incredible. Private beach, 24/7 service — worth every penny. The attention to detail was remarkable.',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      location: 'London, UK'
    },
    {
      name: 'Sophia Martinez',
      text: 'The spa treatments and infinity pool were heavenly. I&apos;m already planning my next visit. Truly a transformative experience.',
      img: 'https://randomuser.me/api/portraits/women/45.jpg',
      rating: 5,
      location: 'Madrid, Spain'
    },
    {
      name: 'James Wilson',
      text: 'Exceptional service from start to finish. The culinary experience alone deserves five stars. We&apos;ll be back next year!',
      img: 'https://randomuser.me/api/portraits/men/67.jpg',
      rating: 5,
      location: 'Sydney, Australia'
    },
    {
      name: 'Emma Thompson',
      text: 'Perfect blend of luxury and nature. Waking up to ocean views every morning was magical. The staff made us feel like family.',
      img: 'https://randomuser.me/api/portraits/women/33.jpg',
      rating: 5,
      location: 'Vancouver, Canada'
    }
  ];

  const scrollingTestimonials = [...testimonials, ...testimonials];

  const renderStars = (rating) => Array.from({ length: 5 }, (_, i) => (
    <span key={`star-${i}`} className={`star ${i < rating ? 'filled' : ''}`}>
      ★
    </span>
  ));

  return (
    <section className='resort-testimonials'>
      <div className='testimonials-container'>
        <div className='testimonials-header'>
          <span className='section-label'>Testimonials</span>
          <h2 className='title'>Experiences That Speak Volumes</h2>
          <p className='subtitle'>
            Discover why our guests return year after year to create unforgettable memories
          </p>
        </div>

        <div className='testimonial-slider-wrapper'>
          <div className='slider-overlay left' />
          <div className='slider-overlay right' />

          <div className='testimonial-slider'>
            <div className='testimonial-track'>
              {scrollingTestimonials.map((item) => (
                <div className='testimonial-card' key={item.name}>
                  <div className='rating-stars'>{renderStars(item.rating)}</div>

                  <div className='quote-icon'>❝</div>

                  <p className='testimonial-text'>
                    &quot;
                    {item.text}
                    &quot;
                  </p>

                  <div className='guest-info'>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='testimonial-img'
                      loading='lazy'
                    />
                    <div className='guest-details'>
                      <h4 className='testimonial-name'>{item.name}</h4>
                      <span className='guest-location'>{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='slider-nav'>
          {testimonials.map((item) => (
            <button
              key={item.name}
              type='button'
              className='nav-dot'
              aria-label={`Go to testimonial ${item.name}`}
            />
          ))}
        </div>

        <div className='testimonials-cta'>
          <p className='cta-text'>Ready to create your own story?</p>
          <Link href='/auth/registration' className='cta-button'>
            Book Your Stay
            {' '}
            <span className='arrow'>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ResortTestimonials;
