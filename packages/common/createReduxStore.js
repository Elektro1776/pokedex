import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import { routerReducer } from 'react-router-redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import modules from '../client/modules';
export const storeReducer = combineReducers({
  ...modules.reducers
});
const createReduxStore = (initialState) => {
  let store = createStore(
    storeReducer,
    initialState, // initial state
    applyMiddleware(thunk)
    // routerMiddleware ? composeWithDevTools(applyMiddleware(routerMiddleware)) : undefined
  );
  return store;
};

export default createReduxStore;
