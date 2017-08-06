import {connect} from 'react-redux';

import App from '../components/App';
import {getUser} from '../selectors/users';

const mapStateToProps = state => {
  return {
      user: getUser(state)
  };
};

const mapDispatchToProps = dispatch => ({
});

const app = connect(mapStateToProps, mapDispatchToProps)(App);

export default app;
