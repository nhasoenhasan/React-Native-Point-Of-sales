import React from "react";
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Component/Home/Home';
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import Dasboard from './Component/Dashboard/Dashboard';

    
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

  // const NavigatorLogin = createStackNavigator(
  //   {
  //     Login:{screen:Login},
  //     Register:{screen:Register},
  //     },
  //     {
  //       defaultNavigationOptions: {
  //         headerStyle: {
  //           backgroundColor: 'black',
  //         },
  //         headerTintColor: '#fff',
  //       },
  //   }
  // );



  const NavigatorDashboard = createStackNavigator(
    {
      Dasboard: { screen: Dasboard},
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


  // const AppNavigator = createStackNavigator({
  //   Home: { screen: Home},
  //   Login:{screen:Login},
  //   Register:{screen:Register},
  //   },
  //   {
  //     defaultNavigationOptions: {
  //       headerStyle: {
  //         backgroundColor: 'black',
  //       },
  //       headerTintColor: '#fff',
  //     },
  //   });


export default createAppContainer(Router);;