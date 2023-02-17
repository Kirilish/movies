import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { countReducer } from "./reducer";
import { moviesReducer } from "../store/reducers/moviesReducer";
import { videoReducer } from "./reducers/videoReducer";
import { favoriteReducer } from "./reducers/favoriteReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  count: countReducer,
  movies: moviesReducer,
  video: videoReducer,
  favorite: favoriteReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
