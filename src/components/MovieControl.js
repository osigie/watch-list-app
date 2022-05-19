import { AiFillEye } from "react-icons/ai";
import { BsEyeSlashFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./context/GlobalState";

const MovieControl = ({ type, movie }) => {
  const {
    removeFromWatchList,
    addMovieToWatch,
    takeBackToWatchlist,
    removeTotal,
  } = useAppContext();

  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatch(movie)}>
            <AiFillEye />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatchList(movie.id)}
          >
            <FaTimes />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => takeBackToWatchlist(movie)}
          >
            <BsEyeSlashFill />
          </button>
          <button className="ctrl-btn" onClick={() => removeTotal(movie)}>
            <FaTimes />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControl;
