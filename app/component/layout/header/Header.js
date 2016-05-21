import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { menuDropdown: state.menuDropdown }
}

class Header extends Component {
	render() {
		return(
				<header className="header">
					<nav className="navigation">
						<a href="#" className="logo">
							<h1>Precisa<span>Ser</span></h1>
						</a>
						<a href="#" className="dropdown" id="dropdown" onClick={() => this.props.dispatch({ type: 'CHANGE_STATE'})}></a>
						<ul className={this.props.menuDropdown.isActive ? "menu menu-is-active" : "menu"} id="menu">
							<li><Link to="/">INÍCIO</Link></li>
							<li><Link to="/showcase">VITRINE</Link></li>
							<li><Link to="/about">SOBRE</Link></li>
							<li><Link to="/login">ENTRAR</Link></li>
						</ul>
					</nav>
				</header>
		);
	}
}

export default connect(mapStateToProps)(Header);
