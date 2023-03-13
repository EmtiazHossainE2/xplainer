import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/auth";

const initialState = {
  authenticated: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        authenticated: true,
        user: action.payload.user,
        error: null,
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        authenticated: false,
        user: null,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
