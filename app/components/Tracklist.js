import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import Colors from '../styles/colors';

class Tracklist extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.tracks.length !== nextProps.tracks.length;
  }

  renderTracks() {
    return (
      <ScrollView>
        {this.props.tracks.map(({track}, index) => {
          if (track !== undefined) {
            return (
              <View
                key={`Track${index}`}
                style={styles.track}
              >
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
  }
});

export default Tracklist;
