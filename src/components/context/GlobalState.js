import { createContext, useContext, useReducer } from "react";

const initialState = {
  watchlist: [],
  watched: [],
};

const AppContext = createContext();

const GlobalState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value = {state}></AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default GlobalState;
