/**
 * @name Hotel Room Booking System
 * @author Daniel
 * @description Hotel Room Booking and Management System Software ~ Developed By Daniel
 * @copyright ©2023 ― Daniel. All rights reserved.
 * @version v0.0.1
 *
 */

// import React from 'react';
// import { v4 as uniqueId } from 'uuid';
// import Room from '../shared/Room';
// import Title from './Title';

// function FeaturedRooms({ featuredRoom }) {
//   return (
//     <section className='featured-rooms'>
//       <Title title='featured rooms' />

//       <div className='featured-rooms-center'>
//         {featuredRoom?.map((room) => (
//           <Room key={uniqueId()} room={room} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturedRooms;






// import React from 'react';
// import Link from 'next/link';
// import { v4 as uniqueId } from 'uuid';
// //import '../styles/featured-rooms.css';

// function FeaturedRooms({ featuredRoom }) {
//   const roomsToShow = featuredRoom.slice(0, 3);

//   return (
//     <section className="featured-section">
//       <h2 className="featured-title">Featured Rooms</h2>

//       <div className="featured-cards">
//         {roomsToShow.map((room) => (
//           <div key={uniqueId()} className="featured-card">
//             <div className="card-img-container">
//               <img
//                 src={room?.room_images?.[0]?.url || '/img/jpeg/room-1.jpeg'}
//                 alt={room?.room_name}
//               />

//               {/* Top-left price badge */}
//               <div className="price-badge">
//                 <p>per night</p>
//                 <h6>{`$${room?.room_price}`}</h6>
//               </div>

//               {/* Top-right room type */}
//               <div className="type-badge">
//                 <p>{room?.room_type}</p>
//               </div>
//             </div>

//             <div className="card-body">
//               <h4>{room?.room_name}</h4>
//               <p className="room-desc">
//                 {room?.room_description?.slice(0, 120)}
//                 {room?.room_description?.length > 120 ? '...' : ''}
//               </p>
//               <Link
//                 href={`/rooms/${room?.room_slug}`}
//                 className="view-details-btn"
//               >
//                 View Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="see-more-wrapper">
//         <Link href="/rooms" className="see-more-btn">
//           See More Rooms
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default FeaturedRooms;









import React from 'react';
import Link from 'next/link';
import Room from '../shared/Room';

function FeaturedRooms({ featuredRoom = [] }) {
  // limit to 3 rooms
  const rooms = featuredRoom.slice(0, 3);

  return (
    <section className="featured-section">
      <h2 className="featured-title">Featured Rooms</h2>

      <div className="featured-grid">
        {rooms.map((room) => (
          <div key={room._id} className="featured-card">
            
            {/* Price + Type */}
            <div className="featured-top">
              <span className="featured-price">${room.room_price}/night</span>
              <span className="featured-type">{room.room_type}</span>
            </div>

            {/* Image */}
            <div className="featured-image">
              <img
                src={room?.room_images[0]?.url || '/img/jpeg/room-1.jpeg'}
                alt={room.room_name}
              />
            </div>

            {/* Body */}
            <div className="featured-body">
              <h3 className="featured-name">{room.room_name}</h3>
              <p className="featured-desc">
                {room.room_description?.slice(0, 80) || 'Luxurious room with premium comfort.'}...
              </p>

              <Link href={`/rooms/${room.room_slug}`} className="featured-btn">
                View Details
              </Link>
            </div>

          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="featured-more-wrap">
        <Link href="/rooms" className="featured-more-btn">
          See More Rooms
        </Link>
      </div>
    </section>
  );
}

export default FeaturedRooms;
