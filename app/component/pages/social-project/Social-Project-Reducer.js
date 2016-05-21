// SocialProject Reducer

const projectView = (state = {
  userIsAuthenticated: false,
  helpModalRequest: false,
  thanksModalRequest: false,
  }, action) => {
  switch (action.type) {
    case 'HELP_MODAL_REQUEST':
      return Object.assign({}, state, {
        helpModalRequest: true
      })
    case 'THANKS_MODAL_REQUEST':
      return Object.assign({}, state, {
        thanksModalRequest: true
      })
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        helpModalRequest: false,
        thanksModalRequest: false
      })
    default:
      return state
  }
}

export default projectView
