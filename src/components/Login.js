import React, { PropTypes } from 'react';

const propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  handlePasswordChange: PropTypes.func.isRequired
};

export default function Login(props) {

  function onLoginHandler() {
    const { email, password } = props;
    const is_vendor = true;
    props.handleLoginUser({ email, password, is_vendor });
  }

  function renderButtons() {
    if (props.loading) {
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
            onClick={() => { onLoginHandler(); }}
            >Log in</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="row">
        <div className="small-8 large-12 columns">
          <div className="row">
            <label>Email
              <input
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => { props.handleEmailChange(e.target.value); }}
                value={ props.email }
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
                onChange={(e) => { props.handlePasswordChange(e.target.value); }}
                value={ props.password }
                />
            </label>
          </div>
        </div>
      </div>
      <span>{props.error}</span>
      {renderButtons()}
  </div>
  );
}

Login.propTypes = propTypes;
