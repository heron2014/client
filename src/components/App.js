import React, { PropTypes } from 'react';
import Header from './Header';

const propTypes = {
  children: PropTypes.node
};

export default function App(props) {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          { props.children }
        </div>
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export { App };
