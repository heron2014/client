import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

const propTypes = {
  handleLoginUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func
};

let Signin = (props) => {

  function handleSignin({ email, password }){
    const is_vendor = true;
    props.handleLoginUser({ email, password, is_vendor });
  }

  function renderButton() {
    if (props.loading) {
      return <div><p>Loading...</p></div>;
    }

    return (
      <button type="submit" className="success expanded button">
        Log in
      </button>
    );
  }

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit(handleSignin)}>
      <Field component={renderField} type="text" name="email" placeholder="example@gmai.com"/>
      <Field component={renderField} type="password" name="password" placeholder="password"/>
      {renderButton()}
      <Link to="/vendors/signup">Sign up here</Link>
    </form>
  );
};

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched ? <span className="error-msg">{error}</span> : ''}
    </div>
  </div>
);

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};

const validate = values => {
  const errors = {};
  let isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email);
  errors.email = !values.email ? "Email is required" : !isEmailValid ? "Invalid email address" : "";

  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
};

Signin = reduxForm({
  form: 'signin',
  validate
})(Signin);

Signin.propTypes = propTypes;
export default Signin;
