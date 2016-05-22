import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../presentationals/layouts/header'
import { showModal } from '../actions/layouts/principal'
import { login } from '../api-actions/sign-in'

const mapStateToProps = (state) => {
 return {
    Global: state.Global,
    TopMenu: state.TopMenu
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (type) => {
      dispatch(showModal(type))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
