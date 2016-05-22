const TopMenu = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        modalIsVisible: true,
        modalType: action.modalType
      })
    default:
      return state;
  }
}

export default TopMenu;
