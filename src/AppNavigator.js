import React from "react";
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from './Component/Home/Home';
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import Dashboard from './Component/Dashboard/Dashboard';
import Product from './Component/Dashboard/Product';
import Page2 from './Component/Dashboard/Page2';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Thumbnail} from 'native-base';
import {TouchableOpacity, Header, Item,Input,Button, Text } from 'react-native';

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
  Dashboard.navigationOptions={
    title: 'Page1g',
  }
  const DashboardTabNavigator = createMaterialBottomTabNavigator(
    {
      Dashboard:{
        screen:Dashboard,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={23} name="home" style={{ color: tintColor }} />
          ),
          tabBarLabel:'HOME'
        }
      },
      Page2,
      Product:{
        screen:Product,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={30} name="food" style={{ color: tintColor }} />
          ),
          tabBarLabel:'Product'
        }
      }
    },
    {
      activeColor: '#f6b233',
      barStyle: { backgroundColor: '#ffffff' }
    }
    
  );

  //Stack Dashboard Navigator
  const DashboardStackNavigator = createStackNavigator(
    {
      DashboardTabNavigator: DashboardTabNavigator
    },
    {
      headerMode: 'none'
      // defaultNavigationOptions: ({ navigation }) => {
      //   return {
      //     headerLeft: (
      //       <TouchableOpacity onPress={() => navigation.openDrawer()}>
      //         <Thumbnail small style={{marginStart:10}}  source={{uri: 'http://lawlessjakarta.com/wp-content/uploads/2017/09/Lawless_burgerbar_header.gif'}}/>
      //       </TouchableOpacity>
      //     ),
      //     headerRight: (
      //       <Icon
      //       style={{ paddingRight: 10,color:'#f6b233' }}
      //       onPress={() =>navigation.navigate('Page2')}
      //       name="cart"
      //       size={25}
      //     />
      //     ),
      //   };
      //}
    },
  );


  //Drawer Dashboard
  const NavigatorDashboard =  createDrawerNavigator(
    {
      Dashboard: { screen: DashboardStackNavigator},
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