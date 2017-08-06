import {
  USER_GETTED
} from '../actions/users';

const initialState = {
  user: {}
};

const users = (state = initialState, {type, payload}) => {
  switch (type) {
    case USER_GETTED:
      return {
        ...state,
        user: payload.user
      }
    default:
      return state;
  }
};

export default users;
