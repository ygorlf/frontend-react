import { combineReducers } from 'redux'
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
} from './action/auth0'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
const auth = (state = {isFetching: false, isAuthenticated: localStorage.getItem('id_token') ? true : false }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
    }
}

// Menu reducer
const menuView = (state = {
  menuIsActive: false,
  userIsAuthenticated: false,
  loginModalRequest: false,
  registerModalRequest: false
  }, action) => {
  switch (action.type) {
    case 'OPEN_MENU_DROPDOWN':
      return Object.assign({}, state, {
        menuIsActive: !state.menuIsActive
      })
    case 'LOGIN_MODAL_REQUEST':
      return Object.assign({}, state, {
        loginModalRequest: true
      })
    case 'REGISTER_MODAL_REQUEST':
      return Object.assign({}, state, {
        registerModalRequest: true
      })
    case 'USER_LOGIN':
      return Object.assign({}, state, {
        userIsAuthenticated: true
      })
    case 'USER_LOGOUT':
      return Object.assign({}, state, {
        userIsAuthenticated: false
      })
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        loginModalRequest: false,
        registerModalRequest: false
      })
    default:
      return state
  }
}

// We combine the reducers here so that they
// can be left split apart above
const Store = combineReducers({
  auth,
  menuView
})

export default Store
