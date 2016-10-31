import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const propTypes = {
  authenticated: PropTypes.bool.isRequired
};

export default function HeaderVendor(props) {

  function renderLinks() {
    if (props.authenticated) {
      return (
        <ul className="menu">
          <li>
            <Link to="/vendors/signout" activeClassName="active-link">Sign out</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="menu">
          <li>
            <Link to="/vendors/login" activeClassName="active-link">Sign up/Login</Link>
          </li>
        </ul>
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
        {renderLinks()}
      </div>
    </div>
  );
}

HeaderVendor.propTypes = propTypes;
