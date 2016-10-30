const EMAIL_CHANGED = 'EMAIL_CHANGED';
const PASSWORD_CHANGED = 'PASSWORD_CHANGED';

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

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default function auth(state = INITIAL_STATE, action) {
  console.log('actions', action);
  switch (action.type) {
  case EMAIL_CHANGED:
    return { ...state, email: action.payload };
  case PASSWORD_CHANGED:
    return { ...state, password: action.payload };
  default:
    return state;
  }
}
