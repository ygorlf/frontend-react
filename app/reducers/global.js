const Global = (state = [], action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return Object.assign({}, state, {
        isAuthenticated: true,
        authorization: action.params.token,
        username: action.params.username
      })
    case 'LOGGED_OUT':
      return Object.assign({}, state, {
        isAuthenticated: false
      })
    default:
      return state;
  }
}

export default Global;
