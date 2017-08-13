import {connect} from 'react-redux';

import {MUSIC_SEND_TRACK} from '../actions/musics';
import Tracklist from '../components/Tracklist';

const mapDispatchToProps = dispatch => ({
  sendToServer: payload => dispatch({type: MUSIC_SEND_TRACK, payload})
});

export default connect(null, mapDispatchToProps)(Tracklist);
