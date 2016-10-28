import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Vendors from './components/Vendors';
import Admin from './components/Admin';
import Signin from './components/auth/SignIn';
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
        <Route path="vendors" component={Vendors}>
          <Route path="signin" component={Signin} />
        </Route>
        <IndexRoute component={Home} />
    </Route>
      <Route path="/admin" component={Admin}></Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
