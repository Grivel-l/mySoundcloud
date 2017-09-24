import React, {Component} from 'react';

import SearchList from '../../containers/searchList';

class SearchScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <SearchList />;
  }
}

export default SearchScreen;
