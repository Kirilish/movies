import { INCREMENT, DECREMENT } from "./action";

const initialState = {
  count: 0,
  loading: false,
};

export const countReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};
