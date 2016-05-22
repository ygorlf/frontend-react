import React, { Component } from 'react';
import styles from './login.styl'

class LoginForm extends Component {
  render() {
    return(
      <form className="form-login">
          <button className="form-login__signin">Login</button>
          <input type="email" name="email" placeholder="nome@email.com" className="form-login__email" ref='email'/>
          <input type="password" name="password" placeholder="senha" className="form-login__password" ref='password'/>
          <input type="submit" onClick={(event) => this.handleClick(event)} value="Entrar" className="form-login__btn" />
        </form>
    )
  }
  handleClick(event) {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    this.props.login(email, password);
  }
}

export default LoginForm;
