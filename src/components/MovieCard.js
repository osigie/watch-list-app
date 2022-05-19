import MovieControl from "./MovieControl";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
      ) : (
        <div className="filler-poster"> </div>
      )}
      {<MovieControl movie={movie} type={type} />}
    </div>
  );
};

export default MovieCard;
