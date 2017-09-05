import {
  USER_GETTED,
  USER_REPOSTS_GETTED,
  USER_LIKES_GETTED,
  USER_CLEAR_REPOSTS,
  USER_CLEAR_LIKES
} from '../actions/users';

const initialState = {
  user: {},
  reposts: [],
  likes: {
    items: [],
    nextOffset: null
  }
};

const users = (state = initialState, {type, payload}) => {
  switch (type) {
    case USER_GETTED:
      return {
        ...state,
        user: payload.user
      };
    case USER_REPOSTS_GETTED:
      return {
        ...state,
        reposts: [...state.reposts, ...payload.reposts]
      };
    case USER_LIKES_GETTED:
      return {
        ...state,
        likes: {
          items: [...state.likes.items, ...payload.likes],
          nextOffset: payload.nextOffset
        }
      };
    case USER_CLEAR_REPOSTS:
      return {
        ...state,
        reposts: [...initialState.reposts]
      };
    case USER_CLEAR_LIKES:
      return {
        ...state,
        likes: {...initialState.likes}
      }
    default:
      return state;
  }
};

export default users;
