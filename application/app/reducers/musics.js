import {
  MUSIC_SEND_TRACK_SUCCESS
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
    default:
      return state;
  }
};

export default musics;
