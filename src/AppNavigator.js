import React from "react";
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from './Component/Home/Home';
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import Page1 from './Component/Dashboard/Page1';
import Page2 from './Component/Dashboard/Page2';
import Dasboard from './Component/Dashboard/Dashboard';

  //Welcome Screen
  const NavigatorHome = createStackNavigator(
    {
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
      }
  );

  //Bottom Navigator
  Page1.navigationOptions={
    title: 'Page1g',
  }
  const DashboardTabNavigator = createMaterialBottomTabNavigator(
    {
      Page1,
      Page2,
    }
  );

  //Stack Dashboard Navigator
  const DashboardStackNavigator = createStackNavigator(
    {
      DashboardTabNavigator: DashboardTabNavigator
    }
  );


  //Drawer Dashboard
  const NavigatorDashboard =  createDrawerNavigator(
    {
      Dasboard: { screen: DashboardStackNavigator},
      },
      {
        contentOptions: {
        activeTintColor: '#e91e63',
      }
    }
  );

  //Switch Navigator
  const Router = createSwitchNavigator(
    {
      NavigatorHome,
      NavigatorDashboard,
    },
    {
      initialRouteName: 'NavigatorHome',
      headerMode: 'none',
    }
  );

export default createAppContainer(Router);;