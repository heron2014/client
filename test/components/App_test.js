import React from 'react';
import expect from 'expect';
import App from '../../src/components/App';
import { renderIntoDocument } from 'react-addons-test-utils';

describe('App', () => {

  it('renders', () => {
    let component = renderIntoDocument(<div><App /></div>);
    expect(component).toExist();
  });
});
