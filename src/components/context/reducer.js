export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchList: [action.payload.movie, ...state.watchList],
      };
    case "ADD_MOVIE_TO_WATCH":
      return {
        ...state,
        watchedList: state.watchList.filter((movie) => {
          return movie.id !== action.payload.movie.id;
        }),
        watched: [action.payload.movie, ...state.watched],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter((movie) => {
          return movie.id !== action.payload.id;
        }),
      };
    case "REMOVE_MOVIE_FROM_WATCHED":
      return {
        ...state,
        watchList: [action.payload.movie, ...state.watchList],
        watched: state.watched.filter(
          (each) => each.id !== action.payload.movie.id
        ),
      };
    case "REMOVE_MOVIE_FROM_WATCHED_TOTAL":
      return {
        ...state,
        watched: state.watched.filter(
          (each) => each.id !== action.payload.movie.id
        ),
      };
    default:
      return state;
  }
};
