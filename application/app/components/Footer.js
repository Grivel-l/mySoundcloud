import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../styles/colors';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actionStatus: 'play',
      isDisabled: false
    };

    this.actionButton = this.actionButton.bind(this);
  }

  actionButton() {
    if (!this.state.isDisabled) {
      this.props.actionButton();
      this.setState({
        actionStatus: this.state.actionStatus === 'play' ? 'pause' : 'play',
        isDisabled: true
      }, () => {
        setTimeout(() => {
          this.setState({isDisabled: false});
        }, 300);
      });
    }
  }

  getActionLayout() {
    const size = this.props.height * 1.5;
    return {
      height: size,
      width: size,
      borderRadius: size
    }
  }

  render() {
    const isPlaying = this.state.actionStatus === 'play';
    return (
      <View style={[styles.container, {height: this.props.height + this.props.height / 1.5}]}>
        <View style={[styles.subContainer, {height: this.props.height}]} />
        <TouchableHighlight
          style={[
            styles.actionButton,
            this.getActionLayout(),
            {borderColor: isPlaying ? Colors.lightBlack : Colors.mainColor}
          ]}
          underlayColor={Colors.lightGray}
          onPress={this.actionButton}
        >
          <Icon
            name={isPlaying ? 'pause' : 'play'}
            size={30}
            color={isPlaying ? Colors.lightBlack : Colors.mainColor}
          />
        </TouchableHighlight>
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
    borderWidth: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
