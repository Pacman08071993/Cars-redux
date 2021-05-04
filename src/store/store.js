/* eslint-disable no-console */
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import reducerCar from './carState/reducer';
import reducerCategories from './categoriesState/reducer';


combineReducers({ reducerCar, reducerCategories });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers, composeEnhancers(applyMiddleware(thunk)));