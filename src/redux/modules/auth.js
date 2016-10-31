import axios from 'axios';
import { browserHistory } from 'react-router';

const SIGNIN_URL = process.env.SIGNIN_URL;
const SIGNUP_URL = process.env.SIGNUP_URL;
const EMAIL_CHANGED = 'EMAIL_CHANGED';
const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
const LOGIN_USER_START = 'LOGIN_USER_START';
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
const UNAUTH_USER = 'UNAUTH_USER';

export function emailChanged(text) {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
}

export function passwordChanged(text) {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
}

export function signinUser({ email, password, is_vendor }) {
  return function(dispatch) {
    dispatch({ type: LOGIN_USER_START });
    return axios.post(SIGNIN_URL, { email, password, is_vendor })
      .then((response) => {
        localStorage.setItem('token_vendor', response.data.token_vendor);
        loginUserSuccess(dispatch, response.data.userId);
        browserHistory.push('/vendors/dashboard');
      }).catch(() => {
        loginUserFail(dispatch);
      });
  };
}

export function signupUser({ email, password, is_vendor }) {
  return function(dispatch) {
    dispatch({ type: LOGIN_USER_START });
    return axios.post(SIGNUP_URL, { email, password, is_vendor })
      .then((response) => {
        loginUserSuccess(dispatch, response.data.userId);
        browserHistory.push('/vendors/dashboard');
      }).catch(() => {
        loginUserFail(dispatch);
      });
  };
}

const loginUserSuccess = (dispatch, userId) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: userId
  });
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

export function signoutUser() {
  localStorage.removeItem('token_vendor');
  return {
    type: UNAUTH_USER
  };
}

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  authenticated: false,
  userId: '',
  error: ''
};

export default function auth(state = INITIAL_STATE, action) {
  console.log('actions', action);
  switch (action.type) {
  case EMAIL_CHANGED:
    return { ...state, email: action.payload };
  case PASSWORD_CHANGED:
    return { ...state, password: action.payload };
  case LOGIN_USER_START:
    return { ...state, loading: true, error: '' };
  case LOGIN_USER_SUCCESS:
    return { ...state,
      authenticated: true,
      userId: action.payload,
      loading: false,
      error: '',
      password: '' };
  case UNAUTH_USER:
    return { ...state,
      authenticated: false,
      userId: '',
      email: '',
      password: '',
      loading: false
    };
  case LOGIN_USER_FAIL:
    return {
      ...state,
      error: 'Authentication failed',
      email: '',
      password: '',
      loading: false,
      authenticated: false };
  default:
    return state;
  }
}
