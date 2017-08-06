import {connect} from 'react-redux';

import App from '../components/App';
import {
  getUser,
  getUserReposts,
  getUserLikes
} from '../selectors/users';

const mapStateToProps = state => {
  return {
      user: getUser(state),
      reposts: getUserReposts(state),
      likes: getUserLikes(state),
  };
};

const mapDispatchToProps = dispatch => ({
});

const app = connect(mapStateToProps, mapDispatchToProps)(App);

export default app;
