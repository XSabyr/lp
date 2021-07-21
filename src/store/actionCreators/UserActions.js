import { tryToLogInFunction } from '../../data';
import { loginFailed, resetLoginFail } from './ErrorActions';

export const SETUSERDATA = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const TRYTOLOGIN = 'TRYTOLOGIN';

export const setUserData = (id, email, firstName, lastName) => ({
  type: SETUSERDATA,
  payload: { id, email, firstName, lastName },
});

export const logOut = () => ({
  type: LOGOUT,
});

export const tryToLogIn = (email, password) => {
  return (dispatch) => {
    dispatch(resetLoginFail());
    // local authorization
    let user = tryToLogInFunction(email, password);

    if (!user) {
      dispatch(loginFailed());
    } else {
      dispatch(setUserData(user.id, user.email, user.firstName, user.lastName));
    }
  };
};
