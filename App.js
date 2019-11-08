import React from 'react';
import { Root } from "native-base";
import {Provider} from 'react-redux';
import store from './src/Component/Public/Redux/store';
import Router from './src/AppNavigator';
import Auth from './src/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      
      <Provider store={store}>
         <Root>
        <Router />
        </Root>
      </Provider>
    );
  }
}