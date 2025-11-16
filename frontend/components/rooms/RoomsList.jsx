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

// export default function RoomList({ rooms }) {
//   if (rooms.length === 0) {
//     return (
//       <div className='empty-search'>
//         <h3>unfortunately no rooms matched your search parameters</h3>
//       </div>
//     );
//   }

//   return (
//     <section className='rooms-list'>
//       <div className='rooms-list-center'>
//         {rooms.map((room) => (
//           <Room key={uniqueId()} room={room} />
//         ))}
//       </div>
//     </section>
//   );
// }











import React, { useState } from 'react';
import { v4 as uniqueId } from 'uuid';
import Link from 'next/link';

export default function RoomList({ rooms = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 6;

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);
  const totalPages = Math.ceil(rooms.length / roomsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (rooms.length === 0) {
    return (
      <div className='room-list-empty'>
        <h3>No rooms matched your search parameters.</h3>
      </div>
    );
  }

  return (
    <section className='room-list'>
      <div className='room-list-center'>
        {currentRooms.map((room) => (
          <div key={uniqueId()} className='room-list-card'>
            <div className='room-list-img-container'>
              <img
                src={room?.room_images?.[0]?.url || '/img/jpeg/room-1.jpeg'}
                alt={room?.room_name || 'Room Image'}
                className='room-list-img'
              />
              <div className='room-list-price'>
                ${room?.room_price ?? 'N/A'}/night
              </div>
              <div className='room-list-type'>{room?.room_type || 'Unknown Type'}</div>
            </div>
            <div className='room-list-info'>
              <h4 className='room-list-name'>{room?.room_name || 'Unnamed Room'}</h4>
              <p className='room-list-desc'>
                {room?.room_description
                  ? `${room.room_description.slice(0, 80)}${room.room_description.length > 80 ? '...' : ''}`
                  : 'No description available'}
              </p>
              <Link
                href={`/rooms/${room?.room_slug || '#'}`}
                className='room-list-btn'
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className='room-list-pagination'>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={uniqueId()}
              className={`room-list-page-btn ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
