import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

import Tracklist from './Tracklist';
import Colors from '../styles/colors';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categorie: 'reposts'
    };
  }

  toUpperCase(content) {
    return content.substring(0, 1).toUpperCase() + content.substring(1);
  }

  renderCategorie(categorie) {
    return (
      <TouchableHighlight
        style={styles.categorie}
        underlayColor={'transparent'}
        onPress={() => {
          if (this.state.categorie !== categorie) {
            this.setState({categorie});
          }
        }}
      >
        <Text style={[
          styles.categorieText,
          categorie === this.state.categorie && {color: Colors.mainColor}
        ]}>
          {this.toUpperCase(categorie)}
        </Text>
      </TouchableHighlight>
    )
  }

  render() {
    const {user} = this.props;
    return (
      <View style={styles.container}>
        {Object.keys(user).length > 0 &&
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
        }
        <View style={styles.categories}>
          {this.renderCategorie('reposts')}
          {this.renderCategorie('likes')}
        </View>
        <Tracklist tracks={this.props[this.state.categorie]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10
  },
  categories: {
    width: '100%',
    height: 60,
    borderBottomColor: Colors.mainColor,
    borderBottomWidth: 5,
    flexDirection: 'row',
    marginBottom: 5
  },
  categorie: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categorieText: {
    fontWeight: 'bold',
    fontSize: 20
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