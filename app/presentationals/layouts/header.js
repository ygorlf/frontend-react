import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './header.styl';
import LoginForm from '../parts/login';

class Header extends Component {

  render() {
    var showModal;
    if (this.props.TopMenu.modalIsVisible){
      // aplicar css
      var main = document.getElementsByTagName('main');
      console.log(main);
      main[0].style.webkitFilter = "blur(5px)";
      if (this.props.TopMenu.modalType === "login"){
        showModal = <LoginForm login={this.props.onLoginSubmit}/>
      }
    }

    var removeBlur;
    if (!this.props.TopMenu.modalIsVisible){
      // retirar css
      var main = document.getElementsByTagName('main');
      main[0].style.webkitFilter = "blur(0px)";
      console.log('hey...');
    }

    return(
      <header className="header">
      	<nav className="navigation">
      		<a href="#" className="logo">
      			<h1>Precisa Ser</h1>
      		</a>
      		<a href="#" className="dropdown" id="dropdown"></a>
      		<ul className="menu" id="menu">
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

export default Header;
