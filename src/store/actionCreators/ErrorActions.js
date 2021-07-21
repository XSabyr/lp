export const LOGINFAILED = 'LOGINFAILED';
export const RESETLOGINFAIL = 'RESETLOGINFAIL';

export const loginFailed = () => ({
  type: LOGINFAILED,
});

export const resetLoginFail = () => ({
  type: RESETLOGINFAIL,
});
