import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

const AppContext = createContext();

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: { movie } });
  };
  const addMovieToWatch = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCH", payload: { movie } });
  };

  const removeFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: { id } });
  };

  const takeBackToWatchlist = (movie) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: { movie } });
  };

  const removeTotal = (movie) => {
      dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED_TOTAL", payload: { movie } })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        addMovieToWatchList,
        addMovieToWatch,
        removeFromWatchList,
        takeBackToWatchlist,
        removeTotal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default GlobalState;
