import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

import Tracklist from '../containers/tracklist';
import Colors from '../styles/colors';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categorie: 'reposts'
    };

    this.loadNextItems = this.loadNextItems.bind(this);
  }

  toUpperCase(content) {
    return content.substring(0, 1).toUpperCase() + content.substring(1);
  }

  renderCategories() {
    const categories = ['reposts', 'likes'];
    return categories.map((categorie, index) => {
      return (
        <TouchableHighlight
          key={`Categorie${index}`}
          style={[
            styles.categorie,
            index === 0 && {marginLeft: 0},
            categories[index + 1] === undefined && {marginRight: 0}
          ]}
          underlayColor={Colors.lightBlack}
          onPress={() => {
            if (this.state.categorie !== categorie) {
              this.setState({categorie});
            }
          }}
        >
          <Text style={[
            styles.categorieText,
            {color: categorie === this.state.categorie ? Colors.mainColor : Colors.notSelected}
          ]}>
            {this.toUpperCase(categorie)}
          </Text>
        </TouchableHighlight>
      );
    });
  }

  getCategorie() {
    return this.state.categorie.substring(0, 1).toUpperCase() + this.state.categorie.substring(1);
  }

  loadNextItems(uuid) {
    this.props[`load${this.getCategorie()}`](uuid);
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
          {this.renderCategories()}
        </View>
        <Tracklist
          tracks={this.props[this.state.categorie]}
          loadNextItems={this.loadNextItems}
          nextOffset={this.props.likesNextOffset}
          reRender={this.state.categorie === 'reposts'}
          clearTracks={this.props[`clear${this.getCategorie()}`]}
        />
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
    height: 60,
    borderBottomColor: Colors.mainColor,
    borderBottomWidth: 5,
    flexDirection: 'row',
    marginBottom: 5
  },
  categorie: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightBlack,
    margin: 5,
    marginBottom: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
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
