import {
  MUSIC_SEND_TRACK_SUCCESS,
  MUSIC_SEARCH_TRACK_RESET
} from '../actions/musics';

const initialState = {
  search: []
};

const musics = (state = initialState, {type, payload}) => {
  switch (type) {
    case MUSIC_SEND_TRACK_SUCCESS:
      return {
        ...state,
        search: payload.tracks
      }
    case MUSIC_SEARCH_TRACK_RESET:
      return {
        ...state,
        search: initialState.search
      }
    default:
      return state;
  }
};

export default musics;
