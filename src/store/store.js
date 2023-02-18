import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from "redux-thunk"
import { countReducer } from './reducer';
import { moviesReduser } from './reducers/moviesReducers';
import {vidiosReducer} from "./reducers/videoReducer"
import { favoriteReducer } from './reducers/favoriteReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    count: countReducer,
    movies: moviesReduser,
    video: vidiosReducer,
    favorite: favoriteReducer,
})

export const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware
        (thunk))
)


