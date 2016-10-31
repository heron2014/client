import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Vendors from './components/Vendors';
import Admin from './components/Admin';
import Login from './containers/Login';
import Dashboard from './components/Dashboard';
import * as reducers from './redux';

// load foundation
$(document).foundation(); //eslint-disable-line no-undef

//app css
require('style!css!sass!applicationStyles');

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
    </Route>
    <Route path="/vendors" component={Vendors}>
      <Route path="login" component={Login} />
      <Route path="dashboard" component={Dashboard} />
    </Route>
      <Route path="/admin" component={Admin}></Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
