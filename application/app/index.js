import React from 'react';
import {Provider} from 'react-redux';
import {StackNavigator} from 'react-navigation';
import {
  AppRegistry,
  View
} from 'react-native';

import configureStore from './configureStore';
import screens from './components/Screens/';

const Navigator = StackNavigator({...screens});
const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Navigator />
      </View>
    </Provider>
  );
};

AppRegistry.registerComponent('app', () => App);
