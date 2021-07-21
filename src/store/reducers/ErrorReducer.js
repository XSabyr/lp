import { LOGINFAILED, RESETLOGINFAIL } from '../actionCreators/ErrorActions';

const initialState = {
  loginError: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGINFAILED:
      return { ...state, loginError: true };
    case RESETLOGINFAIL:
      return { ...state, loginError: false };
    default:
      return state;
  }
};

export default UserReducer;
