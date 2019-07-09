import { TOGGLE_LOADER, SET_ERROR, CLEAR_ERROR } from '../actions/types';

export const toggleLoader = payload => {
  return {
    type: TOGGLE_LOADER,
    payload
  };
};

export const setError = payload => ({
  type: SET_ERROR,
  payload
});

export const clearError = () => ({
  type: CLEAR_ERROR
});
