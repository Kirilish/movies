import { actionTypes } from "../actions/favoriteAction";

const initialState = {
  favorite: [],
};

export const favoriteReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const array_id = [];
  switch (type) {
    case actionTypes.ADD_MOVIES:
      return {
        ...state,
        favorite: [...state.favorite, payload].filter((i) => {
          if (!array_id.includes(i.id)) {
            array_id.push(i.id);
            return i;
          }
        }),
      };
    case actionTypes.DELETE_MOVIES:
      return {
        ...state,
        favorite: state.favorite.filter((i) => i.id !== payload),
      };
    case actionTypes.DELETE_ALL:
      return {
        ...state,
        favorite: [],
      };
    default:
      return state;
  }
};