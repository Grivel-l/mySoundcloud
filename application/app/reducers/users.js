import {
  USER_GETTED,
  USER_REPOSTS_GETTED,
  USER_LIKES_GETTED
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
      }
    case USER_REPOSTS_GETTED:
      return {
        ...state,
        reposts: [...state.reposts, ...payload.reposts]
      }
    case USER_LIKES_GETTED:
      console.log('NextOffset', payload);
      return {
        ...state,
        likes: {
          items: [...state.likes.items, ...payload.likes],
          nextOffset: payload.nextOffset
        }
      }
    default:
      return state;
  }
};

export default users;
