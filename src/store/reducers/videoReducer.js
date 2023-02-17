import { actionType } from "../actions/moviesVideo";

const initialState = {
  video: {},
  loading: false,
  error: false,
};

export const videoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.SET_MOVIES_VIDEO:
      return {
        ...state,
        video: {},
        loading: true,
        error: false,
      };
    case actionType.SET_MOVIES_SUCCESS_VIDEO:
      return {
        ...state,
        video: payload,
        loading: false,
        error: false,
      };
    case actionType.SET_MOVIES_ERROR_VIDEO:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};