import {connect} from 'react-redux';

import {
  MUSIC_SEARCH_TRACK,
  MUSIC_SEARCH_TRACK_RESET
} from '../actions/musics';
import SearchBar from '../components/SearchBar';

const mapDispatchToProps = dispatch => ({
  searchMusic: query => dispatch({type: MUSIC_SEARCH_TRACK, payload: {query}}),
  resetSearch: () => dispatch({type: MUSIC_SEARCH_TRACK_RESET})
});

export default connect(null, mapDispatchToProps)(SearchBar);
