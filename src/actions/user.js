import { SIGN_UP_USER, SIGN_IN_USER, SIGN_OUT_USER } from "../actions/types";

export const signUp = payload => ({
  type: SIGN_UP_USER,
  payload
});

export const signIn = payload => ({
  type: SIGN_IN_USER,
  payload
});

export const signOut = () => ({
  type: SIGN_OUT_USER,
  payload: null
});
