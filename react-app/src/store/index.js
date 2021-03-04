import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import tripsReducer from './trips';
import newTripReducer from './addTrip';
import mapReducer from './map';
import photoReducer from './photos';
import entryReducer from './entry';

const rootReducer = combineReducers({
  session: sessionReducer,
  map: mapReducer,
  photos: photoReducer,
  trips: tripsReducer,
  newTrip: newTripReducer,
  journalEntries: entryReducer,
  tripEntries: entryReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

  export default configureStore;
