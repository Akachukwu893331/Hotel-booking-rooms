import React from 'react';
import Link from 'next/link';

function FeaturedRooms({ featuredRoom = [] }) {
  // limit to 3 rooms
  const rooms = featuredRoom.slice(0, 3);

  return (
    <section className='featured-section'>
      <h2 className='featured-title'>Featured Rooms</h2>

      <div className='featured-grid'>
        {rooms.map((room) => (
          // eslint-disable-next-line no-underscore-dangle
          <div key={room._id} className='featured-card'>
            {/* Price + Type */}
            <div className='featured-top'>
              <span className='featured-price'>
                ₦
                {room.room_price}
                /night
              </span>
              <span className='featured-type'>
                {room.room_type}
              </span>
            </div>

            {/* Image */}
            <div className='featured-image'>
              <img
                src={room?.room_images[0]?.url || '/img/jpeg/room-1.jpeg'}
                alt={room.room_name}
              />
            </div>

            {/* Body */}
            <div className='featured-body'>
              <h3 className='featured-name'>
                {room.room_name}
              </h3>
              <p className='featured-desc'>
                {room.room_description?.slice(0, 80)
                  || 'Luxurious room with premium comfort.'}
                ...
              </p>

              <Link
                href={`/rooms/${room.room_slug}`}
                className='featured-btn'
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className='featured-more-wrap'>
        <Link href='/rooms' className='featured-more-btn'>
          See More Rooms
        </Link>
      </div>
    </section>
  );
}
export default FeaturedRooms;
