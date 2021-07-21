import { SETUSERDATA, LOGOUT } from '../actionCreators/UserActions';

const initialState = {
  id: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUSERDATA:
      return action.payload;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
