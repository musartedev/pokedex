import { TOGGLE_LOADER, SET_ERROR, CLEAR_ERROR } from '../actions/types';

const initialState = {
  loading: false,
  errorMsg: null
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADER: {
      return { ...state, loading: action.payload };
    }
    case SET_ERROR: {
      return { ...state, errorMsg: action.payload };
    }
    case CLEAR_ERROR: {
      return { ...state, errorMsg: null };
    }
    default:
      return state;
  }
};

export default generalReducer;
