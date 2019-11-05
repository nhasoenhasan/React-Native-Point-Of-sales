import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Component/Home/Home';
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';

const AppNavigator = createStackNavigator({
  
  Home: { screen: Home },
  Login:{screen:Login},
  Register:{screen:Register},
});

export default createAppContainer(AppNavigator);