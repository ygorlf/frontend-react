export const showModal = (params) => {
  return {
    type: 'SHOW_MODAL',
    modalType: params
  }
}

export const confirmLogin = (params) => {
  return {
    type: 'LOGGED_IN',
    params
  }
}

export const hideModal = () => {
  return {
    type: 'HIDE_MODAL'
  }
}
