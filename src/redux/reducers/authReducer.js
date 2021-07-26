import { LOGIN_USER } from "../actions/actiontypes";

const initialState = {
  user: null,
};
export const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
