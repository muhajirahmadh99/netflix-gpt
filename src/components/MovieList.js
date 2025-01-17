import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  return (
    <div className="px-6">
      <h1 className="md:text-3xl case text-lg py-2 text-gray-100">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
