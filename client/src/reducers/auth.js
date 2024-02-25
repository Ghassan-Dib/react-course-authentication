import { AUTH_USER } from "../actions/types";

const initialState = {
  authenticated: "",
  errorMessage: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
};

export default auth;
