import React from "react";
import Alert from 'react-native';
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
import AuthLoading from './Component/Auth/AuthLoadingScreen';
import Orderhistory from './Component/Dashboard/Orderhistory';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Container,List, ListItem, Content, Button,Text,Thumbnail,Switch,Left,Right,Body } from 'native-base';
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
            backgroundColor: '#15202b',
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
      }
    },
    {
      activeColor: '#e0245e',
      barStyle: { backgroundColor: '#15202b' }
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
      Orderhistory,
      Chart:{
        screen:Chart,
        navigationOptions: {
          tabBarVisible : false
        }
      }
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
        <Container style={{backgroundColor: '#15202b'}}>
          <View style={{sheight:100,paddingTop:30,alignItems:'center'}}>
            <Thumbnail large source={{uri:'https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/72771346_453959675315642_344653513424789892_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=1&oh=5059274e73031ab025ea2a174caf23cd&oe=5E69FE3C'}} />
          </View>
          <Content style={{marginTop:'10%'}}>
            <List>
              <ListItem itemDivider style={{backgroundColor:'#e0245e',alignItems:'center'}}>
                <Text style={{color:'white'}}>Cashier</Text>
              </ListItem>
              <ListItem >
                <Body>
                <TouchableOpacity onPress={() =>navigation.navigate('Orderhistory')} >
                  <Text style={{color:'white'}}> Transaction</Text>
                </TouchableOpacity>
                </Body>
                  <TouchableOpacity onPress={() =>navigation.navigate('Orderhistory')} >
                    <Icon size={23} name="chart-areaspline" style={{ color: '#e0245e'}} />
                  </TouchableOpacity>
              </ListItem>
              <ListItem >
                <Body>
                  <Text style={{color:'white'}}> Log out</Text>
                </Body>
                <Right>
                  <TouchableOpacity onPress={deleteToken} >
                    <Icon size={23} name="logout" style={{ color: '#e0245e'}} />
                  </TouchableOpacity>
                </Right>
              </ListItem>
            </List>
          </Content>
      </Container>
      )
    }
  //Drawer Dashboard
  const NavigatorDashboard =  createDrawerNavigator(
    {
      Dashboard: { screen: DashboardStackNavigator},
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
      AuthLoading,
      NavigatorHome,
      NavigatorDashboard,
    },
    {
      initialRouteName: 'AuthLoading',
      headerMode: 'none',
    }
  );

export default createAppContainer(Router);;