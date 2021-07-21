import { combineReducers } from 'redux';
import user from './reducers/UserReducer';
import section from './reducers/SectionReducer';
import error from './reducers/ErrorReducer';

const rootReducer = combineReducers({
  user,
  section,
  error,
});

export default rootReducer;
