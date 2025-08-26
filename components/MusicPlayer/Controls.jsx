import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  // <div className="flex items-center justify-between w-full px-4 sm:max-w-[300px] gap-4">
  <div className="flex items-center justify-center gap-3">

  <BsArrowRepeat
    size={20}
    color={repeat ? 'red' : 'white'}
    onClick={() => setRepeat((prev) => !prev)}
    className="hidden sm:block cursor-pointer"
  />
  {currentSongs?.length && (
    <MdSkipPrevious size={26} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />
  )}
  {isPlaying ? (
    <BsFillPauseFill size={40} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
  ) : (
    <BsFillPlayFill size={40} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
  )}
  {currentSongs?.length && (
    <MdSkipNext size={26} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />
  )}
  <BsShuffle
    size={20}
    color={shuffle ? 'red' : 'white'}
    onClick={() => setShuffle((prev) => !prev)}
    className="hidden sm:block cursor-pointer"
  />
</div>

);

export default Controls;
