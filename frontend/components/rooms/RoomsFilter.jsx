/**
 * @name Hotel Room Booking System
 * @author Daniel
 * @description Hotel Room Booking and Management System Software ~ Developed By Daniel
 * @copyright ©2023 ― Daniel All rights reserved.
 * @version v0.0.1
 *
 */

// import React, { useEffect, useState } from 'react';

// export default function RoomFilter({ ourRooms, setOurFilteredRooms }) {
//   const [allowBreakfast, setAllowBreakfast] = useState(false);
//   const [allowPets, setAllowPets] = useState(false);
//   const [priceRange, setPriceRange] = useState(1000);
//   const [roomType, setRoomType] = useState('all');

//   // Combined filtering function
//   useEffect(() => {
//     let filteredRooms = [...ourRooms];

//     if (roomType !== 'all') {
//       filteredRooms = filteredRooms.filter(room => room.room_type === roomType);
//     }

//     filteredRooms = filteredRooms.filter(room => room.room_price <= priceRange);

//     if (allowBreakfast) {
//       filteredRooms = filteredRooms.filter(room => room.provide_breakfast === true);
//     }

//     if (allowPets) {
//       filteredRooms = filteredRooms.filter(room => room.allow_pets === true);
//     }

//     setOurFilteredRooms(filteredRooms);
//   }, [roomType, priceRange, allowBreakfast, allowPets, ourRooms, setOurFilteredRooms]);

//   const roomTypeOptions = [
//     { value: 'all', label: 'All Rooms', icon: '🏠' },
//     { value: 'single', label: 'Single', icon: '👤' },
//     { value: 'couple', label: 'Couple', icon: '👩‍❤️‍👨' },
//     { value: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
//     { value: 'presidential', label: 'Presidential', icon: '👑' }
//   ];

//   const clearAllFilters = () => {
//     setRoomType('all');
//     setPriceRange(1000);
//     setAllowBreakfast(false);
//     setAllowPets(false);
//   };

//   return (
//     <section className='filter-container-wide'>
//       <div className='wide-filter-box'>
//         {/* Header */}
//         <div className='wide-filter-header'>
//           <div className='wide-title-section'>
//             <h3 className='wide-filter-title'>Filter Rooms</h3>
//             <div className='price-display-wide'>
//               Up to ${priceRange}
//             </div>
//           </div>
//           <button
//             type='button'
//             className='clear-all-wide'
//             onClick={clearAllFilters}
//             disabled={roomType === 'all' && priceRange === 1000 && !allowBreakfast && !allowPets}
//           >
//             Clear All
//           </button>
//         </div>

//         {/* Main Filters Row */}
//         <div className='wide-filters-row'>
//           {/* Room Type */}
//           <div className='wide-filter-group'>
//             <label className='wide-group-label'>Room Type</label>
//             <div className='wide-type-buttons'>
//               {roomTypeOptions.map(option => (
//                 <button
//                   key={option.value}
//                   type='button'
//                   className={`wide-type-btn ${roomType === option.value ? 'active' : ''}`}
//                   onClick={() => setRoomType(option.value)}
//                 >
//                   <span className='wide-type-icon'>{option.icon}</span>
//                   <span className='wide-type-label'>{option.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Price Range */}
//           <div className='wide-filter-group'>
//             <label className='wide-group-label'>Price Range</label>
//             <div className='wide-slider-container'>
//               <input
//                 className='wide-slider'
//                 type='range'
//                 min={100}
//                 max={1000}
//                 step={50}
//                 value={priceRange}
//                 onChange={(e) => setPriceRange(parseInt(e.target.value))}
//               />
//               <div className='wide-slider-labels'>
//                 <span>$100</span>
//                 <span>$500</span>
//                 <span>$1000</span>
//               </div>
//             </div>
//           </div>

//           {/* Amenities */}
//           <div className='wide-filter-group'>
//             <label className='wide-group-label'>Amenities</label>
//             <div className='wide-amenities'>
//               <label className='wide-amenity-option'>
//                 <input
//                   type='checkbox'
//                   checked={allowBreakfast}
//                   onChange={(e) => setAllowBreakfast(e.target.checked)}
//                 />
//                 <span className='wide-checkbox'></span>
//                 <span className='wide-amenity-label'>Breakfast</span>
//               </label>
//               <label className='wide-amenity-option'>
//                 <input
//                   type='checkbox'
//                   checked={allowPets}
//                   onChange={(e) => setAllowPets(e.target.checked)}
//                 />
//                 <span className='wide-checkbox'></span>
//                 <span className='wide-amenity-label'>Pets</span>
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Active Filters Bar */}
//         <div className='wide-active-filters'>
//           <span className='active-filters-label'>Active:</span>
//           <div className='wide-active-tags'>
//             {roomType !== 'all' && (
//               <span className='wide-active-tag'>
//                 {roomTypeOptions.find(opt => opt.value === roomType)?.label}
//                 <button type='button' onClick={() => setRoomType('all')}>×</button>
//               </span>
//             )}
//             {priceRange < 1000 && (
//               <span className='wide-active-tag'>
//                 Under ${priceRange}
//                 <button type='button' onClick={() => setPriceRange(1000)}>×</button>
//               </span>
//             )}
//             {allowBreakfast && (
//               <span className='wide-active-tag'>
//                 Breakfast
//                 <button type='button' onClick={() => setAllowBreakfast(false)}>×</button>
//               </span>
//             )}
//             {allowPets && (
//               <span className='wide-active-tag'>
//                 Pets
//                 <button type='button' onClick={() => setAllowPets(false)}>×</button>
//               </span>
//             )}
//             {(roomType === 'all' && priceRange === 1000 && !allowBreakfast && !allowPets) && (
//               <span className='no-filters-text'>No filters applied</span>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from 'react';

export default function RoomFilter({ ourRooms, setOurFilteredRooms }) {
  const [allowBreakfast, setAllowBreakfast] = useState(false);
  const [allowPets, setAllowPets] = useState(false);
  const [priceRange, setPriceRange] = useState(1000);
  const [roomType, setRoomType] = useState('all');

  useEffect(() => {
    let filteredRooms = [...ourRooms];

    if (roomType !== 'all') {
      filteredRooms = filteredRooms.filter(
        (room) => room.room_type === roomType
      );
    }

    filteredRooms = filteredRooms.filter(
      (room) => room.room_price <= priceRange
    );

    if (allowBreakfast) {
      filteredRooms = filteredRooms.filter(
        (room) => room.provide_breakfast === true
      );
    }

    if (allowPets) {
      filteredRooms = filteredRooms.filter(
        (room) => room.allow_pets === true
      );
    }

    setOurFilteredRooms(filteredRooms);
  }, [roomType, priceRange, allowBreakfast, allowPets, ourRooms, setOurFilteredRooms]);

  const roomTypeOptions = [
    { value: 'all', label: 'All Rooms', icon: '🏠' },
    { value: 'single', label: 'Single', icon: '👤' },
    { value: 'couple', label: 'Couple', icon: '👩‍❤️‍👨' },
    { value: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
    { value: 'presidential', label: 'Presidential', icon: '👑' }
  ];

  const clearAllFilters = () => {
    setRoomType('all');
    setPriceRange(1000);
    setAllowBreakfast(false);
    setAllowPets(false);
  };

  return (
    <section className='filter-container-wide'>
      <div className='wide-filter-box'>
        <div className='wide-filter-header'>
          <div className='wide-title-section'>
            <h3 className='wide-filter-title'>Filter Rooms</h3>
            <div className='price-display-wide'>
              Up to
              <br />
              $
              {priceRange}
            </div>
          </div>
          <button
            type='button'
            className='clear-all-wide'
            onClick={clearAllFilters}
            disabled={
              roomType === 'all'
              && priceRange === 1000
              && !allowBreakfast
              && !allowPets
            }
          >
            Clear All
          </button>
        </div>

        <div className='wide-filters-row'>
          <div className='wide-filter-group'>
            <label className='wide-group-label'>Room Type</label>
            <div className='wide-type-buttons'>
              {roomTypeOptions.map((option) => (
                <button
                  key={option.value}
                  type='button'
                  className={`wide-type-btn ${
                    roomType === option.value ? 'active' : ''
                  }`}
                  onClick={() => setRoomType(option.value)}
                >
                  <span className='wide-type-icon'>{option.icon}</span>
                  <span className='wide-type-label'>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className='wide-filter-group'>
            <label className='wide-group-label'>Price Range</label>
            <div className='wide-slider-container'>
              <input
                className='wide-slider'
                type='range'
                min={100}
                max={1000}
                step={50}
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value, 10))}
              />
              <div className='wide-slider-labels'>
                <span>$100</span>
                <span>$500</span>
                <span>$1000</span>
              </div>
            </div>
          </div>

          <div className='wide-filter-group'>
            <label className='wide-group-label'>Amenities</label>
            <div className='wide-amenities'>
              <label className='wide-amenity-option'>
                <input
                  type='checkbox'
                  checked={allowBreakfast}
                  onChange={(e) => setAllowBreakfast(e.target.checked)}
                />
                <span className='wide-checkbox' />
                <span className='wide-amenity-label'>Breakfast</span>
              </label>

              <label className='wide-amenity-option'>
                <input
                  type='checkbox'
                  checked={allowPets}
                  onChange={(e) => setAllowPets(e.target.checked)}
                />
                <span className='wide-checkbox' />
                <span className='wide-amenity-label'>Pets</span>
              </label>
            </div>
          </div>
        </div>

        <div className='wide-active-filters'>
          <span className='active-filters-label'>Active:</span>
          <div className='wide-active-tags'>
            {roomType !== 'all' && (
              <span className='wide-active-tag'>
                {roomTypeOptions.find((opt) => opt.value === roomType)?.label}
                <button type='button' onClick={() => setRoomType('all')}>
                  ×
                </button>
              </span>
            )}

            {priceRange < 1000 && (
              <span className='wide-active-tag'>
                Under
                <br />
                $
                {priceRange}
                <button type='button' onClick={() => setPriceRange(1000)}>
                  ×
                </button>
              </span>
            )}

            {allowBreakfast && (
              <span className='wide-active-tag'>
                Breakfast
                <button type='button' onClick={() => setAllowBreakfast(false)}>
                  ×
                </button>
              </span>
            )}

            {allowPets && (
              <span className='wide-active-tag'>
                Pets
                <button type='button' onClick={() => setAllowPets(false)}>
                  ×
                </button>
              </span>
            )}

            {roomType === 'all'
              && priceRange === 1000
              && !allowBreakfast
              && !allowPets && <span className='no-filters-text'>No filters applied</span>}
          </div>
        </div>
      </div>
    </section>
  );
}
