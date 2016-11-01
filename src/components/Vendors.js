import React, { PropTypes } from 'react';
import HeaderVendorContainer from '../containers/HeaderVendorContainer';

const propTypes = {
  children: PropTypes.node
};

export default function Vendors(props) {
  return (
    <div>
      <HeaderVendorContainer />
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          { props.children }
        </div>
      </div>
    </div>
  );
}

Vendors.propTypes = propTypes;
