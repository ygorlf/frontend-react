const TopMenu = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return Object.assign({}, state, {
        dropDownIsVisible: !state.dropDownIsVisible
      })
    case 'SHOW_LOGIN_MODAL':
      return Object.assign({}, state, {
        loginModalIsVisible: true
      })
    default:
      return state;
  }
}

export default TopMenu;
