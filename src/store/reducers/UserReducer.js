import { LOGIN, LOGOUT } from '../actionCreators/UserActions';

const initialState = {
  id: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
