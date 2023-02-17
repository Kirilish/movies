export const actionTypes = {
    ADD_MOVIES: "ADD_MOVIES",
    DELETE_MOVIES: "DELETE_MOVIES",
    DELETE_ALL: "DELETE_ALL",
  };
  export const actionFavorite = {
    addMovies: (payload) => ({ type: actionTypes.ADD_MOVIES, payload }),
    deleteMovies: (id) => ({ type: actionTypes.DELETE_MOVIES, payload: id }),
    deleteAll: (payload) => ({ type: actionTypes.DELETE_ALL, payload }),
  };