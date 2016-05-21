import { combineReducers } from 'redux'
import menuView from './component/layout/header/Header-Reducer'
import projectView from './component/pages/social-project/Social-Project-Reducer'

const Store = combineReducers({
  menuView,
  projectView
})

export default Store
