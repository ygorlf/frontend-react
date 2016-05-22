export const showModal = (params) => {
  return {
    type: 'SHOW_MODAL',
    modalType: params
  }
}

export const confirm_login = (params) => {
  console.log(params);
  return {
    type: 'LOGGED_IN',
    params
  }
}
