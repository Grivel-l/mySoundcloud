import React, {Component} from 'react';

import App from '../../containers/app';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <App navigation={this.props.navigation} />;
  }
}

export default HomeScreen;
