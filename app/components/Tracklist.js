import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

class Tracklist extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.tracks.length !== nextProps.tracks.length;
  }

  renderTracks() {
    return (
      <ScrollView style={{backgroundColor: 'purple', height: '80%'}}>
        {this.props.tracks.map(({track}, index) => {
          console.log('Track', track);
          if (track !== undefined) {
            return (
              <View key={`Track${index}`} style={styles.track}>
                <Image
                  style={styles.artwork}
                  source={{uri: track.artwork_url}}
                />
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
  track: {
    marginBottom: 5
  },
  artwork: {
    borderRadius: 5,
    width: 100,
    height: 100
  }
});

export default Tracklist;
