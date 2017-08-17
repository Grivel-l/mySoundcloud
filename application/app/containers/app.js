import {connect} from 'react-redux';

import App from '../components/App';
import {
  getUser,
  getUserReposts,
  getUserLikes
} from '../selectors/users';
import {getSearchedTracks} from '../selectors/musics';

const mapStateToProps = state => {
  return {
      user: getUser(state),
      reposts: getUserReposts(state),
      likes: getUserLikes(state),
      search: getSearchedTracks(state)
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
