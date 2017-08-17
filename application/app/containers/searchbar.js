import {connect} from 'react-redux';

import {MUSIC_SEARCH_TRACK} from '../actions/musics';
import SearchBar from '../components/SearchBar';

const mapDispatchToProps = dispatch => ({
  searchMusic: query => dispatch({type: MUSIC_SEARCH_TRACK, payload: {query}})
});

export default connect(null, mapDispatchToProps)(SearchBar);
