export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const logIn = (id, email, firstName, lastName) => ({
  type: LOGIN,
  payload: { id, email, firstName, lastName },
});

export const logOut = () => ({
  type: LOGOUT,
});
