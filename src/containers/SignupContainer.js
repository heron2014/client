import { connect } from 'react-redux';
import { signupUser } from '../redux/modules/auth';
import Signup from '../components/Signup';

function mapStateToProps({ auth }) {
  return {
    errorMessage: auth.error,
    loading: auth.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSignupUser: (email, password, is_vendor) => {
      dispatch(signupUser(email, password, is_vendor));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
