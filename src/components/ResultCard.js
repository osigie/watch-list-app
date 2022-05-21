import { useAppContext } from "./context/GlobalState";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchList, watchList, watched } = useAppContext();
  const alreadyWatched = watchList.find((each) => each.id === movie.id);
  const alreadyInWatched = watched.find((each) => each.id === movie.id);

  // const check = alreadyWatched ? true : false;
  const check = alreadyWatched || alreadyInWatched ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        ) : (
          <div className="filler-poster"> </div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="released-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            onClick={() => addMovieToWatchList(movie)}
            disabled={check}
          >
            Add to watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
