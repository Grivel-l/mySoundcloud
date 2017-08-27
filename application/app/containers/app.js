import {connect} from 'react-redux';

import App from '../components/App';
import {
  getUser,
  getUserReposts,
  getUserLikes,
  getUserNextLikes
} from '../selectors/users';
import {getSearchedTracks} from '../selectors/musics';

const mapStateToProps = state => {
  return {
      user: getUser(state),
      reposts: getUserReposts(state),
      likes: getUserLikes(state),
      likesNextOffset: getUserNextLikes(state),
      search: getSearchedTracks(state)
  };
};

export default connect(mapStateToProps)(App);
