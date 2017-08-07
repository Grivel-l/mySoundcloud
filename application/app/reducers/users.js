import {
  USER_GETTED,
  USER_REPOSTS_GETTED,
  USER_LIKES_GETTED
} from '../actions/users';

const initialState = {
  user: {},
  reposts: [],
  likes: []
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
    case USER_LIKES_GETTED:
      return {
        ...state,
        likes: [...state.likes, ...payload.likes]
      }
    default:
      return state;
  }
};

export default users;
