import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node
};

export default function Vendors(props) {
  return (
    <div>{props.children}</div>
  );
}

Vendors.propTypes = propTypes;
