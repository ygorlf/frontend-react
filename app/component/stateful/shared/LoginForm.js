import React, { Component } from 'react';

class LoginForm extends Component {
	render() {
		return(
			<form action="#" method="POST" className="form-login">
				<input type="email" name="email" placeholder="nome@email.com" className="form-login__email"/>
				<input type="password" name="password" placeholder="senha" className="form-login__password"/>
				<input type="submit" name="submit" value={this.props.btnValue} className="form-login__btn"/>
				{this.props.wololo}
			</form>
		);
	}
}

export default LoginForm;
