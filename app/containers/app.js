import {connect} from 'react-redux';

import App from '../components/App';
import {
  getUser,
  getUserReposts
} from '../selectors/users';

const mapStateToProps = state => {
  return {
      user: getUser(state),
      reposts: getUserReposts(state)
  };
};

const mapDispatchToProps = dispatch => ({
});

const app = connect(mapStateToProps, mapDispatchToProps)(App);

export default app;
