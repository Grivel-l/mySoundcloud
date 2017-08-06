import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

class User extends Component {
  constructor(props) {
    super(props);
  }

  renderUser() {
    if (Object.keys(this.props.user).length === 0) {
      return <View />
    };

    return (
      <View>
        <Image
          source={{uri: this.props.user.avatar_url}}
          style={styles.avatar}
        />
        <Text>{'Rendering user'}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderUser()}
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
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 5
  }
});

export default User;
