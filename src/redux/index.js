import { combineReducers } from 'redux';
import auth from './modules/auth';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form,
  auth
});

export default rootReducer;
