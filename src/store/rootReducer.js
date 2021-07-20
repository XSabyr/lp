import { combineReducers } from 'redux';
import user from './reducers/UserReducer';
import section from './reducers/SectionReducer';

const rootReducer = combineReducers({
  user,
  section,
});

export default rootReducer;
