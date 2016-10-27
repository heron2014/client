import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Vendors from './components/Vendors';
import * as reducers from './redux';

// load foundation
$(document).foundation(); //eslint-disable-line no-undef

//app css
require('style!css!sass!applicationStyles');

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="vendors" component={Vendors} />
        <IndexRoute component={Home} />
    </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
