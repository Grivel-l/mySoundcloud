import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import Tracklist from './Tracklist';

class User extends Component {
  constructor(props) {
    super(props);
  }

  toUpperCase(content) {
    return content.substring(0, 1).toUpperCase() + content.substring(1);
  }

  render() {
    console.log('this.props.user', this.props.user);
    console.log('This.props.reposts', this.props.reposts);
    const {user} = this.props;
    return (
      <View style={styles.container}>
        {Object.keys(user).length > 0 &&
          <View style={styles.subContainer}>
            <View style={styles.row}>
              <Image
                source={{uri: user.avatar_url}}
                style={styles.avatar}
              />
              <View>
                <Text>{this.toUpperCase(user.username)}</Text>
                <Text>{`Followers: ${user.followers_count}`}</Text>
                <Text>{`Following: ${user.followings_count}`}</Text>
              </View>
            </View>
            <Tracklist tracks={this.props.reposts} />
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20
  },
  subContainer: {
    flex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 5
  },
  row: {
    flexDirection: 'row'
  }
});

export default User;
