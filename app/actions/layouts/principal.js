export const toggleMenu = (dropDownIsVisible) => {
  return {
    type: 'TOGGLE_MENU',
    dropDownIsVisible
  }
}

export const showLoginModal = () => {
  return {
    type: 'SHOW_LOGIN_MODAL'
  }
}
