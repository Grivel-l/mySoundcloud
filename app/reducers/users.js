import {
  USER_GETTED,
  USER_REPOSTS_GETTED
} from '../actions/users';

const initialState = {
  user: {},
  reposts: []
};

const users = (state = initialState, {type, payload}) => {
  switch (type) {
    case USER_GETTED:
      return {
        ...state,
        user: payload.user
      }
    case USER_REPOSTS_GETTED:
      return {
        ...state,
        reposts: [...state.reposts, ...payload.reposts]
      }
    default:
      return state;
  }
};

export default users;
