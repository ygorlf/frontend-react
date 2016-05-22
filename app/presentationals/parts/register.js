import React, { Component } from 'react';
class RegisterForm extends Component {

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
    this.props.login(email, password);
  }

}

export default RegisterForm;
