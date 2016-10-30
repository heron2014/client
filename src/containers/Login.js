import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, signinUser } from '../redux/modules/auth';

const propTypes = {
  emailChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  signinUser: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

class Login extends Component {

  onEmailChange(e) {
    this.props.emailChanged(e.target.value);
  }

  onPasswordChange(e) {
    this.props.passwordChanged(e.target.value);
  }

  onLoginHandler() {
    const { email, password } = this.props;
    const is_vendor = true;
    this.props.signinUser({ email, password, is_vendor });
  }

  renderButtons() {
    if (this.props.loading) {
      return <div><p>Loading...</p></div>;
    }

    return (
      <div className="row">
        <div className="small-5 columns login-btns">
          <button
            type="button"
            className="secondary expanded hollow button"
            >Sign up</button>
        </div>
        <div className="small-5 columns login-btns">
          <button
            type="button"
            className="success expanded button"
            onClick={this.onLoginHandler.bind(this)}
            >Log in</button>
        </div>
      </div>
    );
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
        <span>{this.props.error}</span>
        {this.renderButtons()}
    </div>
    );
  }
}

Login.propTypes = propTypes;

function mapStateToProps({ auth }) {
  return {
    email: auth.email,
    password: auth.password,
    loading: auth.loading,
    authenticated: auth.authenticated,
    error: auth.error
  };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, signinUser })(Login);
