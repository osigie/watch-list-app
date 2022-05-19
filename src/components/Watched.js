import { useAppContext } from "./context/GlobalState";
import MovieCard from "./MovieCard";

const Watched = () => {
  const { watched } = useAppContext();
  return (
    <div className="movie-page">
      <div className="conatainer">
        <div className="header">
          <h1 className="heading"> Watched Movies </h1>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie, index) => {
              return <MovieCard movie={movie} type={"watched"} key={index} />;
            })}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list, add some! </h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
