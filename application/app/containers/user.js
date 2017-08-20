import {connect} from 'react-redux';

import {
  USER_LOAD_REPOSTS,
  USER_LOAD_LIKES
} from '../actions/users';
import User from '../components/User';

const mapDispatchToProps = dispatch => ({
  loadReposts: payload => dispatch({type: USER_LOAD_REPOSTS, payload}),
  loadLikes: payload => dispatch({type: USER_LOAD_LIKES, payload})
});

export default connect(null, mapDispatchToProps)(User);
