import React, { Component } from 'react';
import * as ApiSignIn from '../../api-actions/sign-in'

class LoginForm extends Component {

  render() {
    return(
      <div className="form-login">
          <input type="email" name="email" placeholder="nome@email.com" className="form-login__email" ref='email'/>
          <input type="password" name="password" placeholder="senha" className="form-login__password" ref='password'/>
          <button onClick={(event) => this.handleClick(event)} value="Login" className="form-login__btn"/>
      </div>
    )
  }

  handleClick(event) {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    ApiSignIn.login(email, password);
  }
}

export default LoginForm;
