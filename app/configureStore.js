import { createStore, applyMiddleware, combineReducers } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';

import menuView from './component/layout/header/Header-Reducer'
import projectView from './component/pages/social-project/Social-Project-Reducer'

const initialState = {
  
}

const reducer = combineReducers({
  menuView,
  projectView
});

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
