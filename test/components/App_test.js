import React from 'react';
import { expect } from 'chai';
import App from '../../src/components/App';
import { renderIntoDocument } from 'react-addons-test-utils';

describe('App', () => {

  it('renders', () => {
    let component = renderIntoDocument(<App/>);
    expect(component).to.exist;
  });
});
