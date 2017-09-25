import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import User from '../containers/user';
import SearchBar from '../containers/searchbar';
import Footer from '../containers/footer';

const FOOTER_HEIGHT = 50;
class App extends Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <User
        user={this.props.user}
        reposts={this.props.reposts}
        likes={this.props.likes}
        likesNextOffset={this.props.likesNextOffset}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          navigation={this.props.navigation}
        />
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
  }
});

export default App;
