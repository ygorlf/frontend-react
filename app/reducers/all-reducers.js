import { createStore, applyMiddleware, combineReducers } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import SocialProjects from './social-projects';
import TopMenu from './top-menu';
import Global from './global';

const reducers = combineReducers({
  Global,
  SocialProjects,
  TopMenu
})

const createStoreWithMiddleware = applyMiddleware(apiMiddleware,thunk)(createStore);

export default function configureStore(initialState) {
 return createStoreWithMiddleware(reducers, initialState,
   window.devToolsExtension ? window.devToolsExtension() : f => f);
}
