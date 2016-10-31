import { connect } from 'react-redux';
import HeaderVendor from '../components/HeaderVendor';

function mapStateToProps({ auth }) {
  return {
    authenticated: auth.authenticated
  };
}

export default connect(mapStateToProps)(HeaderVendor);
