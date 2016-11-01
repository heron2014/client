import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


export default function(ComposedComponent) {

  const propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps({ auth }) {
    return {
      authenticated: auth.authenticated
    };
  }

  Authentication.propTypes = propTypes;
  
  return connect(mapStateToProps)(Authentication);
}
