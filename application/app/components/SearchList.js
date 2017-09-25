import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Tracklist from '../containers/tracklist';

class SearchList extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Tracklist
          tracks={this.props.tracks}
          interactive={false}
        />
      </View>
    );
  }
}

export default SearchList;
