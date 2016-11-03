import { connect } from 'react-redux';
import { signinUser } from '../redux/modules/auth';
import Signin from '../components/Signin';

function mapStateToProps({ auth }) {
  return {
    loading: auth.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleLoginUser: (email, password, is_vendor) => {
      dispatch(signinUser(email, password, is_vendor));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
