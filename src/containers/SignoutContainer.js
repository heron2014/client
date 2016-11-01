import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../redux/modules/auth';

const propTypes = {
  signoutUser: PropTypes.func.isRequired
};

class Signout extends Component {

  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>Sorry to see you go...</div>
    );
  }
}

Signout.propTypes = propTypes;

export default connect(null, { signoutUser })(Signout);
