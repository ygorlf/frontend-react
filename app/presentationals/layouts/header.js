import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './header.styl'
import LoginForm from '../parts/login'

class Header extends Component {

  render() {
    var loginModal;
    if (this.props.TopMenu.loginModalIsVisible){
      loginModal = <LoginForm/>
    }

    return(
      <header styleName="header">
      	<nav styleName="navigation">
      		<a href="#" styleName="logo">
      			<h1>Precisa Ser</h1>
      		</a>
      		<a href="#" styleName="dropdown" id="dropdown"></a>
      		<ul styleName="menu" id="menu">
      			<li><Link to="/" onClick={() => this.props.onMenuClick(this.props.TopMenu.dropDownIsVisible)}>INÍCIO</Link></li>
      			<li><Link to="/">VITRINE</Link></li>
      			<li><Link to="/">SOBRE</Link></li>
            <li><a onClick={() => this.props.onLoginClick()}>ENTRAR</a></li>
      		</ul>
      	</nav>
        {loginModal}
      </header>
    );
  }
}

export default CSSModules(Header, styles);
