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
import Chart from './Component/Dashboard/Chart';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Container, Header, Content, Button,Text,Thumbnail } from 'native-base';
import {
  View,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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
      },
      Product:{
        screen:Product,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={30} name="food" style={{ color: tintColor }} />
          ),
          tabBarLabel:'Product'
        }
      },
      Chart:{
        screen:Chart,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={30} name="cart" style={{ color: tintColor }} />
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

    //DRAWER CUSTOM
    const CustomDrawerContentComponent = ({navigation}) =>{
      const deleteToken = async () => {
        try {
          await AsyncStorage.removeItem('xaccess-token')
          navigation.navigate('NavigatorHome')
        } catch (err) {
          console.log(`The error is: ${err}`)
        }
      }
      return(
        <Container>
        <View style={{backgroundColor:'white',height:100,paddingTop:30,alignItems:'center'}}>
          <Thumbnail large source={{uri:'https://avatars3.githubusercontent.com/u/23376494?s=460&v=4'}} />
        </View>
        <Content>
          <View style={{alignItems:'center',marginTop:30}}>
              <Button onPress = { deleteToken} rounded danger style={{height:30}}>
                <Text>Logout</Text>
              </Button>
          </View>
        </Content>
        
      </Container>
      )
    }
  //Drawer Dashboard
  const NavigatorDashboard =  createDrawerNavigator(
    {
      Dashboard: { screen: DashboardStackNavigator}
      },
      {
        contentComponent:CustomDrawerContentComponent,
        contentOptions: {
        drawerLabel: 'Dashboard',
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