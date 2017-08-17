import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import User from './User';
import SearchBar from '../containers/searchbar';
import Tracklist from '../containers/tracklist';

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    if (this.props.search.length === 0) {
      console.log('Reposts', this.props.reposts);
      return (
        <User
          user={this.props.user}
          reposts={this.props.reposts}
          likes={this.props.likes}
        />
      );
    } else {
      console.log('Tracks', this.props.search);
      return (
        <View style={styles.searchContainer}>
          <Tracklist tracks={this.props.search} />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchContainer: {
    padding: 10,
    flex: 1,
    alignSelf: 'stretch'
  }
});

export default App;
