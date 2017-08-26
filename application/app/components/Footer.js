import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Colors from '../styles/colors';

class Footer extends Component {
  getActionLayout() {
    const size = this.props.height * 1.5;
    return {
      height: size,
      width: size,
      borderRadius: size
    }
  }

  render() {
    return (
      <View style={[styles.container, {height: this.props.height + this.props.height / 1.5}]}>
        <View style={[styles.subContainer, {height: this.props.height}]} />
        <View style={[styles.actionButton, this.getActionLayout()]} />
      </View>
    );
  }
}

export default Footer;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  subContainer: {
    backgroundColor: Colors.lightBlack,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  actionButton: {
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    position: 'absolute',
    top: 0,
    elevation: 5,
    borderColor: Colors.lightBlack,
    borderWidth: 8
  }
});
