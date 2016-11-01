import axios from 'axios';
import { browserHistory } from 'react-router';

const SIGNIN_URL = process.env.SIGNIN_URL;
const SIGNUP_URL = process.env.SIGNUP_URL;
const LOGIN_USER_START = 'LOGIN_USER_START';
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_USER = 'AUTH_USER';
const SIGNUP_ERROR = 'SIGNUP_ERROR';

export function signinUser({ email, password, is_vendor }) {
  return function(dispatch) {
    dispatch({ type: LOGIN_USER_START });
    return axios.post(SIGNIN_URL, { email, password, is_vendor })
      .then((response) => {
        loginUserSuccess(dispatch, response.data.userId);
        localStorage.setItem('token_vendor', response.data.token_vendor);
        browserHistory.push('/vendors/dashboard');
      }).catch(() => {
        loginUserFail(dispatch);
      });
  };
}

export function signupUser({ email, password, is_vendor }) {
  return function(dispatch) {
    dispatch({ type: LOGIN_USER_START });
    axios.post(SIGNUP_URL, { email, password, is_vendor })
      .then((response) => {
        loginUserSuccess(dispatch, response.data.userId);
        localStorage.setItem('token_vendor', response.data.token_vendor);
        browserHistory.push('/vendors/dashboard');
      }).catch(() => {
        signupError(dispatch, 'This email is already in use');
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

const signupError = (dispatch, error) => {
  dispatch({
    type: SIGNUP_ERROR,
    payload: error
  });
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
  switch (action.type) {
  case LOGIN_USER_START:
    return { ...state, loading: true, error: '' };
  case LOGIN_USER_SUCCESS:
    return { ...state,
      authenticated: true,
      userId: action.payload,
      loading: false,
      error: '',
      password: '' };
  case AUTH_USER:
    return {
      ...state,
      authenticated: true
    };
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
      error: 'Please enter a valid email and password',
      email: '',
      password: '',
      loading: false,
      authenticated: false };
  case SIGNUP_ERROR:
    return {
      ...state,
      error: action.payload,
      email: '',
      password: '',
      loading: false,
      authenticated: false
    };
  default:
    return state;
  }
}
