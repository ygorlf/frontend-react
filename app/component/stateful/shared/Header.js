import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
	render() {
		const { store } = this.context;
		console.log(store)
		return(
			<div>
				<header className="header">
					<nav className="navigation">
						<a href="#" className="logo">
							<h1>Precisa<span>Ser</span></h1>
						</a>
						<a href="#" className="dropdown" id="dropdown"></a>
						<ul className="menu" id="menu">
							<li><Link to="/">início</Link></li>
							<li><Link to="/showcase">vitrine</Link></li>
							<li><Link to="/about">sobre</Link></li>
							<li><Link to="/login">logar</Link></li>
						</ul>
					</nav>
				</header>
				{this.props.children}
			</div>
		);
	}
}

export default Header;
