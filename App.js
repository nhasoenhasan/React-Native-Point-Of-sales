import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Component/Public/Redux/store';
import AppNavigator from './src/AppNavigator';
import Auth from './src/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}