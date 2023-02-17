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
  getMovies: (page, id, sort) => {
    return async (dispatch) => {
      dispatch({ type: actionType.SET_MOVIES });
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=fda7c15a6c66e214c0ef6a082e75bbdb&page=${page}&with_genres=${id}&sort_by=${sort}`
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
          `https://api.themoviedb.org/3/search/movie?api_key=fda7c15a6c66e214c0ef6a082e75bbdb&query=${search}`
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
