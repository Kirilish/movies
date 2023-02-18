import { actionType } from "../actions/moviesActions";

const initialState = {
  movies: [],
  loading: false,
  error: false,
  info: {},
};

export const moviesReduser = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.SET_MOVIES:
      return {
        ...state,
        movies: [],
        loading: true,
        error: false,
      };
    case actionType.SET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload,
        loading: false,
        error: false,
      };
    case actionType.SET_MOVIES_ERROR:
      return {
        ...state,
        error: true,
      };
/*                                                */
    case actionType.SET_MOVIES_SEARCH:
      return {
        ...state,
        movies: [],
        loading: true,
        error: false,
      };
    case actionType.SET_MOVIES_SUCCESS_SEARCH:
      return {
        ...state,
        movies: payload,
        loading: false,
        error: false,
      };
    case actionType.SET_MOVIES_ERROR_SEARCH:
      return {
        ...state,
        error: true,
      };
/*                                                        */
    case actionType.SET_MOVIES_INFO:
      return {
        ...state,
        info: {},
        loading: true,
        error: false,
      };
    case actionType.SET_MOVIES_SUCCESS_INFO:
      return {
        ...state,
        info: payload,
        loading: false,
        error: false,
      };
    case actionType.SET_MOVIES_ERROR_INFO:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
