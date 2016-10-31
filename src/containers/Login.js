import { connect } from 'react-redux';
import { emailChanged, passwordChanged, signinUser } from '../redux/modules/auth';
import Login from '../components/Login';

function mapStateToProps({ auth }) {
  return {
    email: auth.email,
    password: auth.password,
    loading: auth.loading,
    authenticated: auth.authenticated,
    error: auth.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleEmailChange: (value) => {
      dispatch(emailChanged(value));
    },
    handlePasswordChange: (value) => {
      dispatch(passwordChanged(value));
    },
    handleLoginUser: (email, password, is_vendor) => {
      dispatch(signinUser(email, password, is_vendor));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
