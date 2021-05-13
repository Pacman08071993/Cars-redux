import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import reducerCar from './carState/reducer';
import reducerCategories from './categoriesState/reducer';


const reducer = combineReducers({ reducerCar, reducerCategories });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;