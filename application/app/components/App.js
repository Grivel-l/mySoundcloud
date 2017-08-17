import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import User from './User';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <User
          user={this.props.user}
          reposts={this.props.reposts}
          likes={this.props.likes}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
