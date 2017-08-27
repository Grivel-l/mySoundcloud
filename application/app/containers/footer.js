import {connect} from 'react-redux';

import {MUSIC_ACTION_BUTTON} from '../actions/musics';
import Footer from '../components/Footer';

const mapDispatchToProps = dispatch => ({
  actionButton: () => dispatch({type: MUSIC_ACTION_BUTTON})
});

export default connect(null, mapDispatchToProps)(Footer);
