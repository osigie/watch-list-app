import MovieCard from "./MovieCard";
import { useAppContext } from "./context/GlobalState";
const WatchList = () => {
  const { watchList } = useAppContext();
  return (
    <div className="movie-page">
      <div className="conatainer">
        <div className="header">
          <h1 className="heading"> My WatchList </h1>
        </div>
        {watchList.length > 0 ? (
          <div className="movie-grid">
            {watchList.map((movie, index) => {
              return <MovieCard movie={movie} type={"watchList"} key={index} />;
            })}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list, add some! </h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
