import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
//   <div className="flex-1 flex items-center justify-start">
//     <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} h-12 w-12 sm:h-16 sm:w-16 mr-4`}>
//   <img src={activeSong?.artwork?.["480x480"] || "default_image_url"} alt="cover art" className="rounded-full" />
// </div>

//     <div className="w-[50%]">
//     <p className="text-white font-bold text-sm sm:text-lg line-clamp-1">
//   {activeSong?.title || 'No active Song'}
// </p>
// <p className="text-gray-300 text-xs sm:text-sm line-clamp-1">
//   {activeSong?.user?.name || 'No active Artist'}
// </p>

//     </div>
//   </div>

<div className="flex items-center">
  <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} h-10 w-10 sm:h-14 sm:w-14 mr-3`}>
    <img src={activeSong?.artwork?.["480x480"] || "default_image_url"} alt="cover art" className="rounded-full" />
  </div>
  <div className="max-w-[120px] sm:max-w-[180px]">
    <p className="text-white font-semibold text-sm sm:text-base truncate">{activeSong?.title || 'No Song'}</p>
    <p className="text-gray-400 text-xs sm:text-sm truncate">{activeSong?.user?.name || 'No Artist'}</p>
  </div>
</div>

);

export default Track;
