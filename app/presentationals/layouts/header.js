import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './header.styl'
import LoginForm from '../parts/login'

class Header extends Component {

  render() {
    var showModal;
    if (this.props.TopMenu.modalIsVisible){
      if (this.props.TopMenu.modalType === "login"){
        showModal = <LoginForm login={this.props.onLoginSubmit}/>
      }
    }

    return(
      <header styleName="header">
      	<nav styleName="navigation">
      		<a href="#" styleName="logo">
      			<h1>Precisa Ser</h1>
      		</a>
      		<a href="#" styleName="dropdown" id="dropdown"></a>
      		<ul styleName="menu" id="menu">
      			<li><Link to="/">INÍCIO</Link></li>
      			<li><Link to="/">VITRINE</Link></li>
      			<li><Link to="/">SOBRE</Link></li>
            <li><a onClick={() => this.props.showModal('login')}>ENTRAR</a></li>
      		</ul>
      	</nav>
        {showModal}
      </header>
    );
  }
}

export default CSSModules(Header, styles);
