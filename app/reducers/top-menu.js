const TopMenu = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        modalIsVisible: true,
        modalType: action.modalType
      })
    case 'HIDE_MODAL':
      return Object.assign({}, state, {
        modalIsVisible: false,
        modalType: [],
      })
    default:
      return state;
  }
}

export default TopMenu;
