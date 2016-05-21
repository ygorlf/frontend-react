import { combineReducers } from 'redux'
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
} from './action/auth0'
import { CHANGE_STATE } from './action/menu'

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

// The quotes reducer
const menuDropdown = (state = {isActive: false, isAuthenticated: false}, action) => {
  switch (action.type) {
    case 'CHANGE_STATE':
      return Object.assign({}, state, {
        isActive: !state.isActive
      })
    default:
      return state
  }
}

// We combine the reducers here so that they
// can be left split apart above
const Store = combineReducers({
  auth,
  menuDropdown
})

export default Store
