import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import User from '../containers/user';
import SearchBar from '../containers/searchbar';
import Tracklist from '../containers/tracklist';
import Footer from './Footer';

const FOOTER_HEIGHT = 50;
class App extends Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    if (this.props.search.length === 0) {
      return (
        <User
          user={this.props.user}
          reposts={this.props.reposts}
          likes={this.props.likes}
          likesNextOffset={this.props.likesNextOffset}
        />
      );
    } else {
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
        <SearchBar showBack={this.props.search.length > 0} />
        {this.renderContent()}
        <Footer height={FOOTER_HEIGHT} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: FOOTER_HEIGHT
  },
  searchContainer: {
    padding: 10,
    flex: 1,
    alignSelf: 'stretch'
  }
});

export default App;
