import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableHighlight,
  Modal
} from 'react-native';

import Colors from '../styles/colors';

class Tracklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      refreshing: false
    };

    this.page = 0;
    this.focusedTrack = null;
    this.flatList = null;

    this.sendToServer = this.sendToServer.bind(this, this.focusedTrack);
    this.renderLoader = this.renderLoader.bind(this);
    this.endReached = this.endReached.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tracks.length > 0 && nextProps.tracks.length === 0) {
      this.props.loadNextItems(0);
    }

    if (this.state.refreshing) {
      if (this.props.tracks.length === 0 && nextProps.tracks.length !== 0) {
        this.setState({refreshing: false});
      }
    } else {
      if (this.props.reRender !== nextProps.reRender) {
        if (this.flatList !== null) {
          this.flatList.scrollToOffset({offset: 0});
        }
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.tracks.length !== nextProps.tracks.length ||
      this.state.showModal !== nextState.showModal || 
      this.state.refreshing !== nextState.refreshing;
  }

  refresh() {
    this.flatList = null;
    this.props.clearTracks();
    this.setState({refreshing: true});
  }

  renderLoader() {
    return (
      <View style={styles.loader}>
        <Text style={{fontSize: 30}}>{'Loading...'}</Text>
      </View>
    );
  }

  openModal(track) {
    this.focusedTrack = track.id;
    this.setState({showModal: true});
  }

  endReached(track, index) {
    this.page += 1;
    this.props.loadNextItems(this.props.tracks[this.props.tracks.length - 1].uuid || this.props.nextOffset);
  }

  renderTracks() {
    return (
      <FlatList
        data={this.props.tracks}
        keyExtractor={(track, index) => `Track${index}`}
        onEndReached={this.endReached}
        ListFooterComponent={this.renderLoader}
        onEndReachedThreshold={0.1}
        onRefresh={this.refresh}
        refreshing={this.state.refreshing}
        ref={ref => {
          if (this.flatList === null) {
            this.flatList = ref;
          }
        }}
        renderItem={({item}) => {
          const track = item.track || item;
          if (track !== undefined && track.type !== 'playlist') {
            return (
              <TouchableHighlight
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
        }}
      />
    );
  }

  sendToServer() {
    this.props.sendToServer({idTrack: this.focusedTrack});
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
              <TouchableHighlight
                style={styles.modalTextWrapper}
                onPress={this.sendToServer}
                underlayColor={'rgba(0, 0, 0, 0.3)'}
              >
                <Text style={styles.modalText}>{'Play it on the server'}</Text>
              </TouchableHighlight>
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
    flex: 1,
    alignSelf: 'stretch'
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
  },
  loader: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Tracklist;
