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
import Category from './Component/Dashboard/Category';
import Addcategories from './Component/Dashboard/Addcategories';
import Editcategories from './Component/Dashboard/EditCategories';
import Addproduct from './Component/Dashboard/Addproduct';
import Editproduct from './Component/Dashboard/Editproduct';
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
      Category:{
        screen:Category,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={23} name="content-copy" style={{ color: tintColor }} />
          ),
          tabBarLabel:'Category'
        }
      },
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
      DashboardTabNavigator: {
          screen:DashboardTabNavigator,
          navigationOptions : {
            header: null
        } 
      },
      Addcategories:Addcategories,
      Editcategories:Editcategories,
      AddProduct:Addproduct,
      Editproduct:Editproduct,

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