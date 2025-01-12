import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div
        className=" bg-black
      "
      >
        <div className="md:-mt-40 mt-0 relative z-20 md:pl-12 pl-0">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />

          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          {/* <MovieList title={"Horror"} movies={movies.upcomingMovies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
