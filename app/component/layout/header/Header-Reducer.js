// Menu Reducer

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

export default menuView
