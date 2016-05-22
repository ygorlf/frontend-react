import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../presentationals/layouts/header'
import { toggleMenu, showLoginModal } from '../actions/layouts/principal'
import { login } from '../api-actions/sign-in'

const mapStateToProps = (state) => {
 return {
    TopMenu: state.TopMenu
 }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClick: (dropDownIsVisible) => {
      dispatch(toggleMenu(dropDownIsVisible))
    },
    onLoginClick: () => {
      dispatch(showLoginModal())
    },
    onLoginSubmit: (email, password) => {
      dispatch(login(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
