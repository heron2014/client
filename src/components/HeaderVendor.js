import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const propTypes = {
  authenticated: PropTypes.bool.isRequired
};

export default function HeaderVendor(props) {

  function renderLinks() {
    if (props.authenticated) {
      return (
        <li>
          <Link to="/vendors/signout" activeClassName="active-link">Sign out</Link>
        </li>
      );
    } else {
      return (
        [
          <li key={1}>
            <Link activeClassName="active-link" to="/vendors/login">Log In</Link>
          </li>,
          <li key={2}>
            <Link activeClassName="active-link" to="/vendors/signup">Sign Up</Link>
          </li>
        ]
      );
    }
  }

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          {renderLinks()}
        </ul>
      </div>
    </div>
  );
}

HeaderVendor.propTypes = propTypes;
