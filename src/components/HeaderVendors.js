import React from 'react';
import { Link, IndexLink } from 'react-router';

export default function HeaderVendors() {
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
          <li>
            <Link to="/vendors/login" activeClassName="active-link">Sign up/Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
