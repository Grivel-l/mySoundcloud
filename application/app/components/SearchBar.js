import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';

import Colors from '../styles/colors';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.input = null;

    this.search = this.search.bind(this);
  }

  search() {
    this.props.searchMusic(this.input._lastNativeText);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={'Search...'}
          ref={ref => {
            if (this.input === null) {
              this.input = ref;
            }
          }}
        />
        <TouchableHighlight
          style={styles.searchButton}
          onPress={this.search}
        >
          <View />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    backgroundColor: Colors['lightGray'],
    borderRadius: 10,
    height: '70%',
    margin: 10
  },
  searchButton: {
    backgroundColor: Colors['mainColor'],
    alignSelf: 'stretch',
    flex: 1,
    margin: 7,
    marginLeft: 0,
    borderRadius: 5
  }
});

export default SearchBar;
