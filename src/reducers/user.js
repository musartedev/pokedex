import { SIGN_UP_USER, SIGN_IN_USER, SIGN_OUT_USER } from "../actions/types";

const initialState = {
  currentUser: {
    fullName: "",
    email: "",
    password: ""
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_USER:
      return { ...state, user: action.payload };
    case SIGN_IN_USER:
      return { ...state, user: action.payload };
    case SIGN_OUT_USER:
      return { ...initialState };
    default:
      return state;
  }
};

export default userReducer;
