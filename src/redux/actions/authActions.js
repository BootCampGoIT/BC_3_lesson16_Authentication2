import {
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  SETLOADING,
  SETERROR,
} from "../constants/authConstants";

const signUp = (user) => ({ type: SIGNUP, payload: user });
const signIn = (user) => ({ type: SIGNIN, payload: user });
const signOut = () => ({ type: SIGNOUT });
const setLoading = () => ({ type: SETLOADING });
const setError = (error) => ({ type: SETERROR, payload: error });

export { signUp, signIn, signOut, setLoading, setError };
