import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  Modal
} from 'react-native';

import Colors from '../styles/colors';

class Tracklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.tracks.length !== nextProps.tracks.length || this.state.showModal !== nextState.showModal;
  }

  openModal(track) {
    console.log('Track', track);
    this.setState({showModal: true});
  }

  renderTracks() {
    return (
      <ScrollView>
        {this.props.tracks.map(({track}, index) => {
          if (track !== undefined) {
            return (
              <TouchableHighlight
                key={`Track${index}`}
                style={styles.track}
                onPress={this.openModal.bind(this, track)}
                underlayColor={'transparent'}
              >
                <View style={styles.pressChild}>
                  <Image
                    style={styles.artwork}
                    source={{uri: track.artwork_url || track.user.avatar_url}}
                  />
                  <View style={styles.rowContainer}>
                    <View style={styles.firstRow}>
                      <Text style={styles.h2}>{track.user.username}</Text>
                      <Text style={styles.h2}>{track.duration}</Text>
                    </View>
                    <View>
                      <Text>{track.title}</Text>
                    </View>
                    <View>
                      <Text style={styles.h2}>{track.playback_count}</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            );
          }
        })}
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.tracks.length > 0 && this.renderTracks()}
        <Modal
          animationType={'fade'}
          visible={this.state.showModal}
          onRequestClose={() => {}}
          transparent={true}
        >
          <TouchableHighlight
            style={styles.modal}
            onPress={() => this.setState({showModal: false})}
          >
            <View style={styles.subModal}>
              <View style={styles.modalTextWrapper}>
                <Text style={styles.modalText}>{'Play it on the server'}</Text>
              </View>
              <View style={styles.modalTextWrapper}>
                <Text style={styles.modalText}>{'Play it on the phone'}</Text>
              </View>
              <View style={styles.modalTextWrapper}>
                <Text style={styles.modalText}>{'Download it'}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  track: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  artwork: {
    borderRadius: 5,
    width: 70,
    height: 70,
    marginRight: 5
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  h2: {
    color: Colors.h2
  },
  rowContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  pressChild: {
    flex: 1,
    flexDirection: 'row'
  },
  subModal: {
    backgroundColor: 'white',
    width: 300,
    height: 300,
    borderRadius: 5,
    elevation: 7
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalText: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Tracklist;