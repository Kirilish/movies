import axios from "axios";

export const actionType = {
  SET_MOVIES: "SET_MOVIES",
  SET_MOVIES_SUCCESS: "SET_MOVIES_SUCCESS",
  SET_MOVIES_ERROR: "SET_MOVIES_ERROR",

  SET_MOVIES_SEARCH: "SET_MOVIES_SEARCH",
  SET_MOVIES_SUCCESS_SEARCH: "SET_MOVIES_SUCCESS_SEARCH",
  SET_MOVIES_ERROR_SEARCH: " SET_MOVIES_ERROR_SEARCH",
};
export const actionMovies = {
  getMovies: (page) => {
    return async (dispatch) => {
      dispatch({ type: actionType.SET_MOVIES });
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=9885801ebff4fd52f79c28d7e495e46d&page=${page}`
        )
        .then((res) => {
          dispatch({
            type: actionType.SET_MOVIES_SUCCESS,
            payload: res.data.results,
          });
        })
        .catch((err) => {
          dispatch({ type: actionType.SET_MOVIES_ERROR, payload: err });
        });
    };
  },
  /*                                                       */
  getMoviesSearch: (search) => {
    return async (dispatch) => {
      dispatch({ type: actionType.SET_MOVIES_SEARCH });
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=9885801ebff4fd52f79c28d7e495e46d&query=${search}`
        )
        .then((res) => {
          dispatch({
            type: actionType.SET_MOVIES_SUCCESS_SEARCH,
            payload: res.data.results,
          });
        })
        .catch((err) => {
          dispatch({ type: actionType.SET_MOVIES_ERROR_SEARCH, payload: err });
        });
    };
  },
};
