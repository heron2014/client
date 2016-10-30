import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../redux/modules/auth';

const propTypes = {
  emailChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

class Login extends Component {

  onEmailChange(e) {
    this.props.emailChanged(e.target.value);
  }

  onPasswordChange(e) {
    this.props.passwordChanged(e.target.value);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="small-8 large-12 columns">
            <div className="row">
              <label>Email
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={this.onEmailChange.bind(this)}
                  value={this.props.email}
                  />
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="small-8 large-12 columns">
            <div className="row">
              <label>Password
                <input
                  type="password"
                  placeholder="password"
                  onChange={this.onPasswordChange.bind(this)}
                  value={this.props.password}
                  />
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="small-5 columns login-btns">
            <button type="button" className="secondary expanded hollow button">Sign up</button>
          </div>
          <div className="small-5 columns login-btns">
            <button type="button" className="success expanded button">Log in</button>
          </div>
        </div>
    </div>
    );
  }
}

Login.propTypes = propTypes;

function mapStateToProps({ auth }) {
  return {
    email: auth.email,
    password: auth.password
  };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(Login);
