import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import User from './User';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Likes', this.props.likes);
    return (
      <View style={styles.container}>
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
  },
  message: {
    fontSize: 30,
    padding: 10
  }
});

export default App;
