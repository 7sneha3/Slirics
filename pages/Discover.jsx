import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from '../assets/constants';
import { selectGenreListId } from "../redux/features/playerSlice";
import { useGetSongsByGenreQuery } from "../redux/services/audiusApi";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);

  const defaultGenre = genreListId || 'pop';
  const { data, isFetching, error } = useGetSongsByGenreQuery(defaultGenre);

  const genreTitle = genres.find(({ value }) => value === defaultGenre)?.title || 'Pop';

  if (isFetching) return <Loader title={`Loading ${genreTitle} songs...`} />;
  if (error) return <Error message={error?.data?.message || "Something went wrong"} />;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={defaultGenre}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>{genre.title}</option>
          ))}
        </select>
      </div>

      {/* Songs List */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {Array.isArray(data?.data) && data.data.length > 0 ? (
          data.data.map((song, i) => (
            <SongCard
              key={song.id || i}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data.data}
              i={i}
            />
          ))
        ) : (
          <p className="text-white">No songs found for {genreTitle}.</p>
        )}
      </div>
    </div>
  );
};

export default Discover;


// const Discover = () => {
//     const dispatch = useDispatch();
//     // const {} = useSelector(); //access entire cake 
//     const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);

//     const genre = (genreListId || 'pop');

// const { data, isFetching, error } = useGetSongsByGenreQuery(genre);


//     console.log("Genre:", genreListId, "API response:", data);

    
//     if (isFetching) return <Loader title="Loading songs..." />;
    
//     if (error) return <Error />;
    
//     const genreTitle = genres.find(({ value }) => value === (genreListId || 'pop'))?.title || 'Pop';

//     return (
//         <div className="flex flex-col">
//             <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
//                 <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
//                 <select onChange={(e) => dispatch(selectGenreListId(e.target.value))} value={genreListId || 'pop'} className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
//                     {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
//                 </select>

//             </div>

//             <div className="flex flex-wrap sm:justify-start justify-center gap-8">
//             {Array.isArray(data?.data) && data.data.length > 0 ? (
//   data.data.map((song, i) => (
//     <SongCard
//       key={song.id || i}
//       song={song}
//       isPlaying={isPlaying}
//       activeSong={activeSong}
//       data={data.data}
//       i={i}
//     />
//   ))
// ) : (
//   <p className="text-white">No songs found for this genre.</p>
// )}

//             </div>

//         </div>
//     );
// };

// export default Discover;
