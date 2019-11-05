import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Component/Home/Home';
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import Dasboard from './Component/Dashboard/Dashboard';


  const AppNavigator = createStackNavigator({
    Home: { screen: Home},
    Login:{screen:Login},
    Register:{screen:Register},
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
      },
    });

 



// Login:{screen:Login},
// Register:{screen:Register},
// // Dasboard: { screen: Dasboard},
export default createAppContainer(AppNavigator);