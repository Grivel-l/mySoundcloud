import {connect} from 'react-redux';

import SearchList from '../components/SearchList';
import {getSearchedTracks} from '../selectors/musics';

const mapStateToProps = state => {
  return {
      tracks: getSearchedTracks(state)
  };
};

export default connect(mapStateToProps)(SearchList);
