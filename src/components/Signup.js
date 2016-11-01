import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

const propTypes = {
  handleSignupUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func,
  errorMessage: PropTypes.string.isRequired
};

let Signup = (props) => {

  function handleSignup({ email, password }){
    const is_vendor = true;
    props.handleSignupUser({ email, password, is_vendor });
  }

  function renderButton() {
    if (props.loading) {
      return <div><p>Loading...</p></div>;
    }
    return (
      <button type="submit" className="success expanded button">
        Sign up
      </button>
    );
  }

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit(handleSignup)}>
      <Field component={renderField} type="text" name="email" placeholder="example@gmai.com" label="Email"/>
      <Field component={renderField} type="password" name="password" placeholder="password" label="Password"/>
      <Field component={renderField} type="password" name="confirmPassword" placeholder="password" label="Confirm password"/>
      <span className="error-msg">{props.errorMessage}</span>
      {renderButton()}
      <Link to="/vendors/login">Already have an account? Please sign in here</Link>
    </form>
  );
};

const validate = values => {
  const errors = {};

  let isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email);
  errors.email = !values.email ? "Email is required" : !isEmailValid ? "Invalid email address" : "";
  
  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  return errors;
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


Signup = reduxForm({
  form: 'signup',
  validate
})(Signup);

Signup.propTypes = propTypes;

export default Signup;
