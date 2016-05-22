import { createStore, applyMiddleware, combineReducers } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import SocialProjects from './social-projects';
import TopMenu from './top-menu';

const reducers = combineReducers({
  SocialProjects,
  TopMenu
})

const createStoreWithMiddleware = applyMiddleware(apiMiddleware,thunk)(createStore);

export default function configureStore(initialState) {
 return createStoreWithMiddleware(reducers, initialState);
}
