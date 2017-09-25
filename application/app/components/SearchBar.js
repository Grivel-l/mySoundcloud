import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../styles/colors';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.input = null;

    this.search = this.search.bind(this);
    this.back = this.back.bind(this);
  }

  back() {
    this.input.clear();
    this.props.resetSearch();
  }

  search() {
    if (this.input._lastNativeText !== undefined && this.input._lastNativeText.length > 0) {
      this.props.searchMusic(this.input._lastNativeText);
      this.props.navigation.navigate('SearchScreen');
    }
  }

  renderBackButton() {
    if (this.props.showBack) {
      return (
        <TouchableHighlight
          style={[styles.searchButton, {marginRight: 0}]}
          onPress={this.back}
        >
          <Icon
            name={'arrow-left'}
            size={20}
            color={Colors.lightGray}
          />
        </TouchableHighlight>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderBackButton()}
        <TextInput
          style={[styles.input, this.props.showBack && {margin: 5}]}
          placeholder={'Search...'}
          ref={ref => {
            if (this.input === null) {
              this.input = ref;
            }
          }}
        />
        <TouchableHighlight
          style={[styles.searchButton, {marginLeft: 0}]}
          onPress={this.search}
        >
          <Icon
            name={'search'}
            size={20}
            color={Colors.lightGray}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightBlack
  },
  input: {
    width: '80%',
    backgroundColor: Colors.lightGray,
    borderRadius: 5,
    height: '70%',
    margin: 10
  },
  searchButton: {
    backgroundColor: Colors.mainColor,
    alignSelf: 'stretch',
    flex: 1,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SearchBar;
